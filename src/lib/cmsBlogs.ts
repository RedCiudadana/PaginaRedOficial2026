export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  autor: string;
  correo: string;
  date: string;
  highlight: boolean;
  content: string;
}

interface FrontmatterResult {
  data: Record<string, string>;
  content: string;
}

const blogMarkdown = import.meta.glob('../cms/blogs/*.md', { as: 'raw', eager: true });

const blogPosts: BlogPost[] = Object.entries(blogMarkdown).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw as string);
  const fileName = path.split('/').pop() ?? '';
  const fileSlug = fileName.replace(/\.md$/i, '');
  const slug = fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    image: data.image ?? '',
    autor: data.autor ?? '',
    correo: data.correo ?? '',
    date: data.date ?? '',
    highlight: (data.highlight ?? '').toLowerCase() === 'true',
    content: sanitizeContent(content),
  };
});

blogPosts.sort((a, b) => {
  const timeA = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
  const timeB = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);
  return timeB - timeA;
});

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

function sanitizeContent(content: string): string {
  return content.replace(/<!--StartFragment-->|<!--EndFragment-->/g, '').trim();
}

function parseFrontmatter(raw: string): FrontmatterResult {
  const lines = raw.split(/\r?\n/);
  if (lines[0]?.trim() !== '---') {
    return { data: {}, content: raw.trim() };
  }

  const data: Record<string, string> = {};
  let currentKey: string | null = null;
  let index = 1;

  for (; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.trim() === '---') {
      index += 1;
      break;
    }

    if (/^\s+/.test(line) && currentKey) {
      const continuation = line.trim();
      if (continuation.length > 0) {
        data[currentKey] = `${data[currentKey]} ${continuation}`.trim();
      }
      continue;
    }

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      continue;
    }

    currentKey = match[1];
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[currentKey] = value;
  }

  return { data, content: lines.slice(index).join('\n').trim() };
}

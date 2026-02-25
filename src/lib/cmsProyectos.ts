export interface Project {
  slug: string;
  title: string;
  enlace: string;
  programa: string;
  descripcion: string;
  ano: string;
  foto: string;
  content: string;
}

interface FrontmatterResult {
  data: Record<string, string>;
  content: string;
}

const projectMarkdown = import.meta.glob('../cms/proyectos/*.md', { as: 'raw', eager: true });

const projects: Project[] = Object.entries(projectMarkdown).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw as string);
  const fileName = path.split('/').pop() ?? '';
  const fileSlug = fileName.replace(/\.md$/i, '');
  const slug = fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');

  return {
    slug,
    title: data.title ?? slug,
    enlace: data.enlace ?? '',
    programa: data.programa ?? '',
    descripcion: data.descripcion ?? '',
    ano: data.ano ?? '',
    foto: data.foto ?? '',
    content: sanitizeContent(content),
  };
});

projects.sort((a, b) => {
  const yearA = Number.parseInt(a.ano, 10);
  const yearB = Number.parseInt(b.ano, 10);
  if (Number.isNaN(yearA) && Number.isNaN(yearB)) {
    return a.title.localeCompare(b.title);
  }
  if (Number.isNaN(yearA)) {
    return 1;
  }
  if (Number.isNaN(yearB)) {
    return -1;
  }
  return yearB - yearA;
});

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
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

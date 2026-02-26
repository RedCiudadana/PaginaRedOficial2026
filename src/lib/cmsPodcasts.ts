export interface PodcastEpisode {
  slug: string;
  title: string;
  description: string;
  link: string;
  date: string;
  highlight: boolean;
  image: string;
  topics: string[];
  hosts: string;
  guests: string;
  duration: string;
  season: number;
  episode: number;
  listenCount: number;
  content: string;
}

interface FrontmatterResult {
  data: Record<string, string>;
  content: string;
}

const podcastMarkdown = import.meta.glob('../cms/podcasts/*.md', { as: 'raw', eager: true });

const podcasts: PodcastEpisode[] = Object.entries(podcastMarkdown).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw as string);
  const fileName = path.split('/').pop() ?? '';
  const fileSlug = fileName.replace(/\.md$/i, '');
  const slug = fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const topics = (data.topics ?? '')
    .split(',')
    .map((topic) => topic.trim())
    .filter(Boolean);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    link: data.link ?? '',
    date: data.date ?? '',
    highlight: (data.highlight ?? '').toLowerCase() === 'true',
    image: data.image ?? data.cover_image ?? '',
    topics,
    hosts: data.hosts ?? 'Red Ciudadana',
    guests: data.guests ?? '',
    duration: data.duration ?? '—',
    season: Number.parseInt(data.season ?? '1', 10) || 1,
    episode: Number.parseInt(data.episode ?? '0', 10) || 0,
    listenCount: Number.parseInt(data.listen_count ?? '0', 10) || 0,
    content: sanitizeContent(content),
  };
});

podcasts.sort((a, b) => {
  const timeA = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
  const timeB = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);
  return timeB - timeA;
});

export function getAllPodcasts(): PodcastEpisode[] {
  return podcasts;
}

export function getPodcastBySlug(slug: string): PodcastEpisode | undefined {
  return podcasts.find((podcast) => podcast.slug === slug);
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

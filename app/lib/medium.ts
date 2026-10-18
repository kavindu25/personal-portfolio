export type Post = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
  tags: string[];
  readingMinutes: number;
};

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decode(value: string) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const point = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(point) ? String.fromCodePoint(point) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

function cdata(value: string | undefined) {
  if (!value) return "";
  const match = value.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return decode((match ? match[1] : value).trim());
}

function field(item: string, tag: string) {
  return item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1];
}

function plain(html: string) {
  return decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function parseItem(item: string): Post | null {
  const title = cdata(field(item, "title"));
  const url = cdata(field(item, "link")).split("?")[0];
  if (!title || !url.startsWith("https://")) return null;

  const html = field(item, "content:encoded");
  const body = html ? html.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "") : "";

  // Medium appends a 1px tracking image (/_/stat); the thumbnail is the first real image.
  const image = [...body.matchAll(/<img[^>]+src="([^"]+)"/g)]
    .map((m) => decode(m[1]))
    .find((src) => !src.includes("/_/stat"));

  // The first long paragraph reads better than the first caption or heading.
  const paragraphs = [...body.replace(/<figure[\s\S]*?<\/figure>/g, "").matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((m) => plain(m[1]))
    .filter((text) => text.length > 40);
  const excerpt = (paragraphs[0] ?? "").slice(0, 180).replace(/\s+\S*$/, (rest) => (paragraphs[0].length > 180 ? "..." : rest));

  const words = plain(body).split(" ").filter(Boolean).length;
  const published = field(item, "pubDate");
  const date = published ? new Date(published) : null;

  return {
    title,
    url,
    date: date && !Number.isNaN(date.getTime()) ? date.toISOString() : "",
    excerpt,
    image,
    tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => cdata(m[1])).slice(0, 3),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

/**
 * Latest posts from a Medium profile's RSS feed. Returns an empty list if Medium
 * is unreachable or the feed shape changes, so the page never fails to build.
 */
export async function getMediumPosts(username: string, limit = 4): Promise<Post[]> {
  try {
    const response = await fetch(`https://medium.com/feed/${username}`, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-feed)" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];

    const xml = await response.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .map((m) => parseItem(m[1]))
      .filter((post): post is Post => post !== null)
      .slice(0, limit);
  } catch {
    return [];
  }
}

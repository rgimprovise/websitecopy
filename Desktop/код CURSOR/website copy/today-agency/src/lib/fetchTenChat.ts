import type { BlogPost } from "./constants";

const FEED_URL = "https://tenchat.ru/2195428?tab=feed";
const BASE_URL = "https://tenchat.ru";

function extractOgMeta(html: string, property: string): string {
  const m =
    html.match(
      new RegExp(
        `<meta[^>]+property="${property}"[^>]+content="([^"]*)"`,
        "i"
      )
    ) ||
    html.match(
      new RegExp(
        `<meta[^>]+content="([^"]*)"[^>]+property="${property}"`,
        "i"
      )
    );
  return m?.[1] ?? "";
}

function extractJsonLdField(html: string, field: string): string {
  try {
    const scripts = [
      ...html.matchAll(
        /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
      ),
    ];
    for (const s of scripts) {
      const data = JSON.parse(s[1]);
      if (data[field] !== undefined) return String(data[field]);
    }
  } catch {
    // ignore parse errors
  }
  return "";
}

function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return "";
  }
}

async function fetchArticle(url: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    const title =
      extractOgMeta(html, "og:title") ||
      extractJsonLdField(html, "headline");
    if (!title) return null;

    const image = extractOgMeta(html, "og:image") || undefined;
    const dateIso = extractJsonLdField(html, "datePublished");
    const fullText = extractJsonLdField(html, "text");
    const excerpt = fullText
      ? fullText.slice(0, 220).trimEnd() + (fullText.length > 220 ? "…" : "")
      : "";

    return {
      title,
      excerpt,
      date: formatDate(dateIso),
      tag: "тенчат",
      externalUrl: url,
      image,
    };
  } catch {
    return null;
  }
}

export async function fetchTenChatPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return [];
    const html = await res.text();

    // Extract all unique /media/ paths from href attributes
    const seen = new Set<string>();
    const urls: string[] = [];
    for (const m of html.matchAll(/href="(\/media\/[^"?#]+)"/g)) {
      const full = `${BASE_URL}${m[1]}`;
      if (!seen.has(full)) {
        seen.add(full);
        urls.push(full);
      }
    }

    if (!urls.length) return [];

    const results = await Promise.all(urls.map(fetchArticle));
    return results.filter((p): p is BlogPost => p !== null);
  } catch {
    return [];
  }
}

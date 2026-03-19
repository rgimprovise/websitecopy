/**
 * Minimal live HTML renderer for Tilda subpages.
 * We fetch the HTML, extract <body>, and strip <script> tags to avoid
 * executing remote JS inside our Next app.
 */
export async function fetchTildaBody(url: string): Promise<string> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();

  // Extract body innerHTML (Tilda pages are HTML documents).
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  // Remove scripts for safety and to prevent re-initialization clashes.
  return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}


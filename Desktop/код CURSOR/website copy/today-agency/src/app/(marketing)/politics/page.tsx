import { notFound } from "next/navigation";
import { fetchTildaBody } from "@/lib/tildaLive";

export default async function PoliticsPage() {
  const url = "https://alarcev.n8nrgimprovise.space/politics";

  let body: string;
  try {
    body = await fetchTildaBody(url);
  } catch {
    notFound();
  }

  return (
    <div
      className="min-h-screen"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}


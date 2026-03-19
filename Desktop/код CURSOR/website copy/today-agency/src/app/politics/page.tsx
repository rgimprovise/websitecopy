import { notFound } from "next/navigation";
import { fetchTildaBody } from "@/lib/tildaLive";

export default async function PoliticsPage() {
  const url = "https://today-agency.ru/politics";

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


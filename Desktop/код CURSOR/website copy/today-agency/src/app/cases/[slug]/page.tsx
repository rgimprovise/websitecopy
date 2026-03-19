import { notFound } from "next/navigation";

import { fetchTildaBody } from "@/lib/tildaLive";

export default async function CaseSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const url = `https://today-agency.ru/cases/${params.slug}`;

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
      // Tilda documents include their own inline styles/layout in body.
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}


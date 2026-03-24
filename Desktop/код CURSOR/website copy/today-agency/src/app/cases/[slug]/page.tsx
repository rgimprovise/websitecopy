import { notFound } from "next/navigation";

import { fetchTildaBody } from "@/lib/tildaLive";
import { CASE_STUDIES } from "@/lib/constants";

export function generateStaticParams() {
  return CASE_STUDIES.filter((cs) => cs.slug).map((cs) => ({ slug: cs.slug! }));
}

export default async function CaseSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const url = `https://alarcev.n8nrgimprovise.space/cases/${params.slug}`;

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


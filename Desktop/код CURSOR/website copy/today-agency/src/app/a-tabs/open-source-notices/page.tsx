import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое — из A-TABS_Clean_Legal_Package_v2 / 08_Open_Source_Notices.md.
 *
 * По умолчанию ставим "no third-party components statement" — это безопасно,
 * если в текущей сборке расширения нет сторонних библиотек, требующих
 * attribution. Если в будущем появятся сторонние компоненты — заменить
 * блок ниже на их перечень по шаблону.
 */

export const metadata: Metadata = {
  title: `Open Source Notices — ${ATABS.name} — ${ATABS.publisher.responsible}`,
  description: `Open source attribution notices for ${ATABS.name} by ${ATABS.publisher.responsible}.`,
  openGraph: {
    title: `Open Source Notices — ${ATABS.name}`,
    description: `Open source attribution notices for ${ATABS.name}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.openSourceNotices}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsOpenSourceNoticesPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Open Source Notices"
        documentSubtitle={`Last Updated: ${ATABS.legalEdition}`}
      />

      <section className="bg-white pb-20 pt-12 text-brand-dark md:pt-16">
        <Container className="max-w-[920px]">
          <div className="rounded-xl border border-brand-gray bg-[#f6f7f9] p-5 text-sm leading-relaxed">
            <p>
              <strong>Extension:</strong> {ATABS.name}
            </p>
            <p className="mt-2">
              <strong>Last Updated:</strong> {ATABS.legalEdition}
            </p>
          </div>

          <article className="legal-prose mt-12">
            <p>
              This page lists third-party open source libraries, fonts, icons, or other
              licensed materials included in the Extension package, if any.
            </p>

            <H2>No third-party components statement</H2>
            <p>
              The Extension does not include third-party open source components requiring
              attribution notices as of {ATABS.legalEdition}.
            </p>
            <p className="text-sm text-brand-muted">
              If third-party libraries, fonts, icons, or other licensed materials are
              added to the Extension package in a future release, this page will be
              updated with the component name, author, version, license, source URL, and
              modification status for each component, together with any license text
              required to be reproduced.
            </p>

            <H2>Contact</H2>
            <p>
              For attribution corrections or questions about open source notices, contact{" "}
              <a
                href={`mailto:${ATABS.contact.legalEmail}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.contact.legalEmail}
              </a>
              .
            </p>
            <p>
              Project page:{" "}
              <Link
                href={ATABS.paths.home}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.urls.home}
              </Link>
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-10 text-lg font-medium tracking-tight first:mt-0 sm:text-xl">
      {children}
    </h2>
  );
}

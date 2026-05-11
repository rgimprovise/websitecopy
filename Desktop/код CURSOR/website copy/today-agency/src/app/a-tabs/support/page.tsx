import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое — буква в букву из A-TABS_Clean_Legal_Package_v2 /
 * 06_Support_and_Contact.md.
 */

export const metadata: Metadata = {
  title: `Support & Contact — ${ATABS.name} — ${ATABS.publisher.responsible}`,
  description: `Support and contact information for ${ATABS.name}, published in the Chrome Web Store as ${ATABS.publisher.displayName}.`,
  openGraph: {
    title: `Support — ${ATABS.name}`,
    description: `Support and contact information for ${ATABS.name}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.support}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsSupportPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Support & Contact"
        documentSubtitle={`Last Updated: ${ATABS.legalEdition}`}
      />

      <section className="bg-white pb-20 pt-12 text-brand-dark md:pt-16">
        <Container className="max-w-[920px]">
          <div className="rounded-xl border border-brand-gray bg-[#f6f7f9] p-5 text-sm leading-relaxed">
            <p>
              <strong>Extension:</strong> {ATABS.name}
            </p>
            <p className="mt-2">
              <strong>Chrome Web Store Publisher Name:</strong> {ATABS.publisher.displayName}
            </p>
            <p className="mt-2">
              <strong>Responsible Publisher / Provider:</strong> {ATABS.publisher.responsible}
            </p>
          </div>

          <article className="legal-prose mt-12">
            <H2>Support</H2>
            <p>
              For support questions, bug reports, or questions about the Extension,
              contact:
            </p>
            <p>
              <a
                href={`mailto:${ATABS.contact.supportEmail}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.contact.supportEmail}
              </a>
            </p>
            <p>When contacting support, please include:</p>
            <ul>
              <li>Extension name: {ATABS.name};</li>
              <li>Chrome version, if relevant;</li>
              <li>operating system, if relevant;</li>
              <li>a short description of the issue;</li>
              <li>screenshots only if they do not contain sensitive information.</li>
            </ul>
            <p>
              Do not send passwords, payment information, confidential browser history,
              or sensitive personal information in support emails.
            </p>

            <H2>Legal contact</H2>
            <p>
              {ATABS.publisher.responsible}
              <br />
              {ATABS.publisher.address.line1}
              <br />
              {ATABS.publisher.address.line2}
              <br />
              {ATABS.publisher.address.country}
              <br />
              Email:{" "}
              <a
                href={`mailto:${ATABS.contact.legalEmail}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.contact.legalEmail}
              </a>
            </p>

            <H2>Useful links</H2>
            <ul>
              <li>
                Project page:{" "}
                <Link
                  href={ATABS.paths.home}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.urls.home}
                </Link>
              </li>
              <li>
                Privacy Policy:{" "}
                <Link
                  href={ATABS.paths.privacyPolicy}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.urls.privacyPolicy}
                </Link>
              </li>
              <li>
                Terms of Use:{" "}
                <Link
                  href={ATABS.paths.termsOfUse}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.urls.termsOfUse}
                </Link>
              </li>
              <li>
                Data Handling:{" "}
                <Link
                  href={ATABS.paths.dataHandling}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.urls.dataHandling}
                </Link>
              </li>
              <li>
                Open Source Notices:{" "}
                <Link
                  href={ATABS.paths.openSourceNotices}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  https://alarcev.n8nrgimprovise.space{ATABS.paths.openSourceNotices}
                </Link>
              </li>
            </ul>

            <H2>Publisher notice</H2>
            <p>
              This support page may be hosted on the Alarcev website for convenience. The
              Chrome Web Store publisher and responsible party for the Extension is{" "}
              {ATABS.publisher.responsible}, publishing under the name{" "}
              {ATABS.publisher.displayName}.
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

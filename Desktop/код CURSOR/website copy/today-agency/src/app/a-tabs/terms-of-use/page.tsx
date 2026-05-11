import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое — буква в букву из A-TABS_Clean_Legal_Package_v2 /
 * 02_Terms_of_Use.md (Last Updated: May 11, 2026).
 */

export const metadata: Metadata = {
  title: `Terms of Use — ${ATABS.name} — ${ATABS.publisher.responsible}`,
  description: `Terms of Use for ${ATABS.name}, published in the Chrome Web Store as ${ATABS.publisher.displayName} by ${ATABS.publisher.responsible}.`,
  openGraph: {
    title: `Terms of Use — ${ATABS.name}`,
    description: `Terms of Use for ${ATABS.name} by ${ATABS.publisher.responsible}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.termsOfUse}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsTermsOfUsePage() {
  return (
    <>
      <ATabsHero
        documentTitle="Terms of Use"
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
            <p className="mt-2">
              <strong>Chrome Web Store Publisher Name:</strong> {ATABS.publisher.displayName}
            </p>
            <p className="mt-2">
              <strong>Responsible Publisher / Provider:</strong> {ATABS.publisher.responsible}
            </p>
            <p className="mt-2">
              <strong>Governing law:</strong> {ATABS.publisher.country}
            </p>
          </div>

          <article className="legal-prose mt-12">
            <p>
              These Terms of Use (the &ldquo;Terms&rdquo;) govern your access to and use
              of A-TABS: Links Organizer (the &ldquo;Extension&rdquo;). The Extension is
              published in the Chrome Web Store under the publisher name{" "}
              <strong>{ATABS.publisher.displayName}</strong> by{" "}
              <strong>{ATABS.publisher.responsible}</strong>, an individual residing in{" "}
              {ATABS.publisher.country} (the &ldquo;Publisher&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              This document is hosted on the Alarcev website for convenience. The Chrome
              Web Store publisher and responsible party for the Extension is{" "}
              <strong>{ATABS.publisher.responsible}</strong>.
            </p>
            <p>
              By installing or using the Extension, you agree to these Terms. If you do
              not agree to these Terms, do not install or use the Extension.
            </p>

            <H2>1. Description of the Extension</H2>
            <p>
              The Extension helps users save, organize, search, and reopen browser tabs
              and links as local collections.
            </p>
            <p>
              The Extension is a productivity and organization tool. It is not a cloud
              storage service, backup service, legal service, financial service, medical
              service, security service, or professional advisory service.
            </p>

            <H2>2. Free status</H2>
            <p>
              The Extension is currently provided free of charge and without paid
              in-extension features. The current version does not require an account, does
              not process payments, does not display advertising, and does not provide
              paid subscriptions.
            </p>
            <p>
              If paid features, cloud synchronization, account functionality,
              subscriptions, advertising, email collection, or related commercial products
              are introduced in the future, the relevant legal documents, Chrome Web Store
              disclosures, and user-facing notices will be updated before or at the time
              such features are released.
            </p>

            <H2>3. Eligibility</H2>
            <p>
              You may use the Extension only if you can form a legally binding agreement
              under the laws that apply to you and only in compliance with these Terms
              and applicable law. If you use the Extension on behalf of a company or
              organization, you represent that you have authority to do so.
            </p>

            <H2>4. License to use the Extension</H2>
            <p>
              Subject to these Terms, we grant you a limited, personal, revocable,
              non-exclusive, non-transferable license to install and use the Extension
              for personal or internal productivity purposes.
            </p>
            <p>
              This license does not transfer ownership of the Extension or any
              intellectual property rights to you.
            </p>

            <H2>5. Local user data and user responsibility</H2>
            <p>
              The Extension is designed to store saved links, collections, categories,
              labels, notes, ordering, and settings locally on the user&rsquo;s device.
              You are responsible for:
            </p>
            <ul>
              <li>
                the accuracy and legality of the URLs, titles, notes, labels, and other
                information you save;
              </li>
              <li>
                maintaining your own backups if you need to preserve saved collections;
              </li>
              <li>
                keeping your device, browser profile, operating system account, passwords,
                and Google account secure;
              </li>
              <li>
                understanding that uninstalling the Extension, clearing browser data,
                browser profile damage, device failure, or other technical events may
                result in loss of locally stored Extension data.
              </li>
            </ul>
            <p>We do not guarantee that locally stored data can be recovered.</p>

            <H2>6. Restrictions</H2>
            <p>You must not:</p>
            <ul>
              <li>
                use the Extension for unlawful, harmful, fraudulent, abusive, deceptive,
                or infringing purposes;
              </li>
              <li>
                use the Extension to store, organize, distribute, or facilitate access to
                illegal content;
              </li>
              <li>
                interfere with, damage, or disrupt the Extension, Chrome, the Chrome Web
                Store, or any third-party service;
              </li>
              <li>
                misrepresent your affiliation with the Extension, the Publisher, Alarcev,
                Google, Chrome, or any third party;
              </li>
              <li>
                copy, resell, sublicense, rent, lease, or commercially distribute the
                Extension except as expressly permitted by law or by a separate written
                agreement;
              </li>
              <li>
                reverse engineer, decompile, or attempt to extract source code except
                where such restriction is prohibited by applicable law;
              </li>
              <li>
                remove copyright, trademark, or other proprietary notices from the
                Extension.
              </li>
            </ul>

            <H2>7. Third-party websites and content</H2>
            <p>
              The Extension may help you save links to third-party websites. We do not
              control third-party websites, their availability, security, legality,
              accuracy, privacy practices, or content. Your use of third-party websites is
              governed by their own terms and policies.
            </p>
            <p>
              The Extension is not affiliated with, endorsed by, or sponsored by any
              third-party tab management service, browser vendor, website, or trademark
              owner unless expressly stated by us.
            </p>

            <H2>8. External project website</H2>
            <p>
              The Extension may contain links to an external project website, support
              email, or related pages, including pages hosted on the Alarcev website.
              External websites and services are not part of the Extension and may have
              their own terms and privacy policies.
            </p>
            <p>
              The Alarcev website may host documentation for convenience. The Chrome Web
              Store publisher and responsible party for the Extension is{" "}
              {ATABS.publisher.responsible}, publishing under the Chrome Web Store name{" "}
              {ATABS.publisher.displayName}.
            </p>

            <H2>9. Privacy</H2>
            <p>
              Your use of the Extension is also governed by the Privacy Policy available
              at:
            </p>
            <p>
              <Link
                href={ATABS.paths.privacyPolicy}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.urls.privacyPolicy}
              </Link>
            </p>
            <p>
              The Privacy Policy explains how the Extension handles local data and what
              information, if any, may be processed through voluntary external contact
              channels.
            </p>

            <H2>10. Intellectual property</H2>
            <p>
              The Extension, including its name, logo, interface, design, code, and
              related materials, is protected by applicable intellectual property laws.
              Except for the limited license granted in these Terms, no rights are
              transferred to you.
            </p>
            <p>
              User-created collections and saved links remain under the user&rsquo;s
              control locally on the user&rsquo;s device.
            </p>

            <H2>11. Updates, changes, suspension, or discontinuation</H2>
            <p>
              We may update, modify, suspend, or discontinue the Extension or any part of
              it at any time. Updates may be required to maintain compatibility with
              Chrome, security, platform policies, or applicable law.
            </p>
            <p>
              We may remove the Extension from distribution if we believe continued
              distribution may violate law, platform policies, third-party rights,
              security requirements, or these Terms.
            </p>

            <H2>12. Disclaimer of warranties</H2>
            <p>
              The Extension is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the maximum extent permitted by applicable law,
              we disclaim all warranties, whether express, implied, statutory, or
              otherwise, including warranties of merchantability, fitness for a particular
              purpose, non-infringement, availability, accuracy, security, and error-free
              operation.
            </p>
            <p>
              We do not guarantee that the Extension will be uninterrupted, error-free,
              secure, compatible with every browser configuration, or free from data loss.
            </p>

            <H2>13. Limitation of liability</H2>
            <p>
              To the maximum extent permitted by applicable law, the Publisher shall not
              be liable for indirect, incidental, special, consequential, exemplary, or
              punitive damages, including loss of data, loss of profits, loss of business,
              loss of goodwill, or device/browser issues arising out of or related to the
              use or inability to use the Extension.
            </p>
            <p>
              Because the Extension is currently provided free of charge, our total
              liability for any claim related to the Extension shall be limited to the
              maximum extent permitted by applicable law.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations of liability, so some
              limitations may not apply to you.
            </p>

            <H2>14. Indemnity</H2>
            <p>
              To the extent permitted by applicable law, you agree to defend, indemnify,
              and hold harmless the Publisher from claims, losses, liabilities, damages,
              costs, and expenses arising from your misuse of the Extension, violation of
              these Terms, violation of applicable law, or infringement of third-party
              rights.
            </p>

            <H2>15. Governing law</H2>
            <p>
              To the extent permitted by applicable law, these Terms shall be governed by
              the laws of {ATABS.publisher.country}, without regard to conflict of law
              rules. Mandatory consumer protection laws of your country of residence may
              still apply where required by law.
            </p>

            <H2>16. Changes to these Terms</H2>
            <p>
              We may update these Terms from time to time. The updated version will be
              posted at the same location as these Terms or another reasonable location.
              The &ldquo;Last Updated&rdquo; date above will indicate the latest version.
              Continued use of the Extension after an update means that you accept the
              updated Terms.
            </p>

            <H2>17. Contact</H2>
            <p>Legal contact:</p>
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
            <p>
              Support contact:{" "}
              <a
                href={`mailto:${ATABS.contact.supportEmail}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.contact.supportEmail}
              </a>
              <br />
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

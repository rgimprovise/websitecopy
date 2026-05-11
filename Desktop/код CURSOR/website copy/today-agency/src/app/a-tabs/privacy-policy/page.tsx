import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое — буква в букву из A-TABS_Clean_Legal_Package_v2 /
 * 01_Privacy_Policy.md (Last Updated: May 11, 2026).
 */

export const metadata: Metadata = {
  title: `Privacy Policy — ${ATABS.name} — ${ATABS.publisher.responsible}`,
  description: `Privacy Policy for ${ATABS.name}, published in the Chrome Web Store as ${ATABS.publisher.displayName} by ${ATABS.publisher.responsible}.`,
  openGraph: {
    title: `Privacy Policy — ${ATABS.name}`,
    description: `Privacy Policy for ${ATABS.name} by ${ATABS.publisher.responsible}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.privacyPolicy}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsPrivacyPolicyPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Privacy Policy"
        documentSubtitle={`Last Updated: ${ATABS.legalEdition}`}
      />

      <section className="bg-white pb-20 pt-12 text-brand-dark md:pt-16">
        <Container className="max-w-[920px]">
          <IdentityBox />

          <article className="legal-prose mt-12">
            <p>
              This Privacy Policy explains how A-TABS: Links Organizer (the
              &ldquo;Extension&rdquo;) handles information when you use it. The Extension
              is published in the Chrome Web Store under the publisher name{" "}
              <strong>{ATABS.publisher.displayName}</strong> by{" "}
              <strong>{ATABS.publisher.responsible}</strong>, an individual residing in{" "}
              {ATABS.publisher.country} (the &ldquo;Publisher&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              This document is hosted on the Alarcev website for convenience. The Chrome
              Web Store publisher and responsible party for the Extension is{" "}
              <strong>{ATABS.publisher.responsible}</strong>. Alarcev may host project
              pages and legal documents, but Alarcev is not the Chrome Web Store publisher
              of the Extension unless expressly stated otherwise.
            </p>

            <H2>1. Summary</H2>
            <p>
              The Extension helps users save, organize, search, and reopen browser tabs
              and links as local collections.
            </p>
            <p>
              The Extension is currently provided free of charge. It does not require an
              account, does not include paid features, does not display advertising, does
              not sell user data, and does not upload saved collections to
              developer-controlled servers.
            </p>

            <H2>2. Single purpose</H2>
            <p>
              The single purpose of the Extension is to help users save, organize, search,
              and reopen browser tabs and links as local collections.
            </p>

            <H2>3. Information handled locally by the Extension</H2>
            <p>
              To provide its core functionality, the Extension may handle the following
              information locally on the user&rsquo;s device:
            </p>
            <ul>
              <li>saved links and URLs added by the user;</li>
              <li>titles and favicons of saved tabs or links;</li>
              <li>
                user-created folders, categories, labels, notes, ordering, and collections;
              </li>
              <li>local Extension settings and preferences.</li>
            </ul>
            <p>
              This information is used only to allow the user to save, organize, search,
              and reopen links or tab collections.
            </p>

            <H2>4. Local storage and no server transmission</H2>
            <p>
              The Extension stores its main data locally on the user&rsquo;s device using
              browser storage mechanisms such as local browser storage, IndexedDB, or
              equivalent local storage.
            </p>
            <p>
              The Extension does not upload saved links, tab collections, folders, labels,
              notes, browser sessions, settings, or browsing activity to the Publisher,
              Alarcev, or third parties.
            </p>
            <p>
              The current version of the Extension does not operate a cloud account system,
              remote synchronization system, advertising system, analytics system,
              telemetry system, crash-reporting system, or user tracking system.
            </p>

            <H2>5. Information we do not collect through the Extension</H2>
            <p>
              In its current version, the Extension does not collect, receive, transmit,
              sell, rent, trade, or otherwise share:
            </p>
            <ul>
              <li>
                browsing history outside the user-facing tab and link organization features;
              </li>
              <li>the content of web pages;</li>
              <li>passwords, authentication data, cookies, or session tokens;</li>
              <li>payment information;</li>
              <li>government identifiers or personal identification documents;</li>
              <li>precise geolocation data;</li>
              <li>health information;</li>
              <li>financial information;</li>
              <li>communications content;</li>
              <li>advertising identifiers;</li>
              <li>
                analytics, telemetry, crash reports, or behavioral tracking data.
              </li>
            </ul>

            <H2>6. Chrome permissions and purpose limitation</H2>
            <p>
              The Extension requests only permissions needed for its stated single
              purpose. The final permission list is defined in the Extension&rsquo;s{" "}
              <code className="font-mono">manifest.json</code> and in the Chrome Web Store
              privacy disclosures.
            </p>
            <p>
              Depending on the final technical configuration, the Extension may request
              permissions such as <code className="font-mono">storage</code>,{" "}
              <code className="font-mono">tabs</code>, and/or{" "}
              <code className="font-mono">activeTab</code>:
            </p>
            <ul>
              <li>
                <code className="font-mono">storage</code> is used to save the
                user&rsquo;s collections, links, labels, notes, preferences, and settings
                locally.
              </li>
              <li>
                <code className="font-mono">tabs</code> is used to read tab titles, URLs,
                and favicons only when necessary to save, display, or reopen a tab
                collection selected or created by the user.
              </li>
              <li>
                <code className="font-mono">activeTab</code> is used only after a user
                action to interact with the current active tab.
              </li>
            </ul>
            <p>
              We do not use Chrome API data for advertising, profiling, creditworthiness,
              unrelated analytics, resale, or unrelated purposes.
            </p>

            <H2>7. Chrome Web Store Limited Use disclosure</H2>
            <p>
              The use of information received from Google APIs will adhere to the{" "}
              <a
                href="https://developer.chrome.com/docs/webstore/program-policies/user-data-faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Chrome Web Store User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <p>
              Any browser tab or link information accessed through Chrome extension APIs
              is used only to provide or improve the Extension&rsquo;s single purpose:
              local tab and link organization. We do not transfer such information to
              third parties, do not use it for advertising, and do not allow humans to
              read it because it is not transmitted to us.
            </p>

            <H2>8. External website and voluntary contact</H2>
            <p>
              The Extension may contain links to an external project website, legal
              documents, or support contact, including:
            </p>
            <ul>
              <li>
                Project page:{" "}
                <Link href={ATABS.paths.home} className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover">
                  {ATABS.urls.home}
                </Link>
              </li>
              <li>
                Support email:{" "}
                <a href={`mailto:${ATABS.contact.supportEmail}`} className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover">
                  {ATABS.contact.supportEmail}
                </a>
              </li>
            </ul>
            <p>
              If a user voluntarily clicks an external link, visits an external website,
              or sends an email, any information provided through that external channel
              is handled separately from the local operation of the Extension. For
              example, if a user emails support, we may receive the user&rsquo;s email
              address, message content, and attachments solely to respond to the request
              and maintain support records.
            </p>
            <p>
              Users should not send passwords, payment information, confidential browser
              history, or sensitive personal information in support emails.
            </p>

            <H2>9. Cookies, analytics, advertising, and tracking</H2>
            <p>
              The Extension does not use cookies, web beacons, pixels, advertising
              identifiers, behavioral advertising, retargeting, third-party analytics
              SDKs, or tracking SDKs.
            </p>
            <p>
              If a separate website related to the Extension uses cookies or analytics in
              the future, those website practices will be disclosed separately. Website
              processing will not change the current local-first data handling of the
              Extension unless the Extension itself is updated and the Chrome Web Store
              disclosures are also updated.
            </p>

            <H2>10. Sharing of information</H2>
            <p>
              The Extension does not transmit saved user collections or local Extension
              data to the Publisher, Alarcev, or third parties.
            </p>
            <p>We do not sell, rent, or trade personal information.</p>
            <p>
              Support email information may be processed by email and infrastructure
              providers strictly as necessary to receive, store, and respond to support
              messages. We may also disclose information if required by applicable law,
              court order, lawful governmental request, or as necessary to protect legal
              rights, users, or the security of the Extension.
            </p>

            <H2>11. Data retention and deletion</H2>
            <p>
              Extension data is stored locally on the user&rsquo;s device until the user
              deletes it. Users may delete Extension data by:
            </p>
            <ul>
              <li>using deletion controls inside the Extension, if available;</li>
              <li>
                removing individual saved links, tabs, collections, labels, or folders;
              </li>
              <li>uninstalling the Extension from Chrome;</li>
              <li>clearing the Extension&rsquo;s local storage or browser profile data.</li>
            </ul>
            <p>
              Because Extension data is stored locally and is not transmitted to us, we
              cannot access, export, restore, or delete a user&rsquo;s local Extension
              data on the user&rsquo;s behalf.
            </p>
            <p>
              Support emails may be retained for as long as reasonably necessary to
              respond to the request, maintain records, comply with legal obligations,
              resolve disputes, and protect legal rights. If a user wants us to delete
              support correspondence where reasonably possible, the user may contact us at{" "}
              <a href={`mailto:${ATABS.contact.supportEmail}`} className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover">
                {ATABS.contact.supportEmail}
              </a>{" "}
              or{" "}
              <a href={`mailto:${ATABS.contact.legalEmail}`} className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover">
                {ATABS.contact.legalEmail}
              </a>
              .
            </p>

            <H2>12. International transfers</H2>
            <p>
              The Extension does not transmit Extension data to us or to
              developer-controlled servers. Support emails may be processed through email
              infrastructure that can involve storage or routing outside the user&rsquo;s
              country. By contacting us by email, the user understands that the
              information sent in the email may be processed where email service
              providers operate.
            </p>

            <H2>13. Children&rsquo;s privacy</H2>
            <p>
              The Extension is not directed to children. We do not knowingly collect
              personal information from children through the Extension. If you believe a
              child has provided personal information to us through an external contact
              channel, please contact us so that we can take appropriate action.
            </p>

            <H2>14. User rights</H2>
            <p>
              Because we do not collect Extension data, we cannot provide a server-side
              copy of Extension data. Users can access and manage their Extension data
              locally in their browser.
            </p>
            <p>
              For support email information that we may hold, users may contact us to
              request access, correction, deletion, restriction, or other rights available
              under applicable law. We may need to verify the requester&rsquo;s identity
              before fulfilling a request.
            </p>

            <H2>15. Security</H2>
            <p>
              The Extension is designed to minimize privacy risk by keeping its main data
              locally on the user&rsquo;s device. Users remain responsible for the
              security of their own device, browser profile, operating system, backups,
              and Google account.
            </p>
            <p>
              No method of local storage or electronic processing is completely secure.
              Users should avoid saving highly sensitive information in tab titles,
              collection names, notes, or URLs.
            </p>

            <H2>16. Changes to this Privacy Policy</H2>
            <p>
              We may update this Privacy Policy from time to time. If the Extension
              introduces account features, cloud synchronization, analytics, email
              collection, payments, advertising, remote storage, or any other new data
              handling practices, this Privacy Policy and the Chrome Web Store privacy
              disclosures will be updated before or at the time such features are
              released.
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

function IdentityBox() {
  return (
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
        <strong>Legal email:</strong>{" "}
        <a
          href={`mailto:${ATABS.contact.legalEmail}`}
          className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
        >
          {ATABS.contact.legalEmail}
        </a>{" "}
        &nbsp; <strong>Support email:</strong>{" "}
        <a
          href={`mailto:${ATABS.contact.supportEmail}`}
          className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
        >
          {ATABS.contact.supportEmail}
        </a>
      </p>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-10 text-lg font-medium tracking-tight first:mt-0 sm:text-xl">
      {children}
    </h2>
  );
}

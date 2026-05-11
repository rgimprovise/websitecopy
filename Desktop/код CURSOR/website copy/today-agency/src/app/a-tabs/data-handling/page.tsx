import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое — буква в букву из A-TABS_Clean_Legal_Package_v2 /
 * 03_Data_Handling_Statement.md (Last Updated: May 11, 2026).
 */

export const metadata: Metadata = {
  title: `Data Handling — ${ATABS.name} — ${ATABS.publisher.responsible}`,
  description: `Data Handling Statement and Chrome Web Store Limited Use disclosure for ${ATABS.name} by ${ATABS.publisher.responsible}.`,
  openGraph: {
    title: `Data Handling — ${ATABS.name}`,
    description: `Data Handling Statement for ${ATABS.name} by ${ATABS.publisher.responsible}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.dataHandling}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsDataHandlingPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Data Handling Statement and Chrome Web Store Limited Use Disclosure"
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
          </div>

          <article className="legal-prose mt-12">
            <p>
              This statement explains how A-TABS: Links Organizer handles Chrome API data
              and user information.
            </p>

            <H2>1. Single purpose</H2>
            <p>
              The single purpose of A-TABS: Links Organizer is to help users save,
              organize, search, and reopen browser tabs and links as local collections.
            </p>
            <p>
              The Extension is focused only on tab and link organization. It does not
              provide unrelated functionality.
            </p>

            <H2>2. Local-first data handling</H2>
            <p>
              The Extension stores its main data locally on the user&rsquo;s device. This
              may include:
            </p>
            <ul>
              <li>saved links and URLs added by the user;</li>
              <li>tab titles and favicons for saved tabs;</li>
              <li>
                user-created folders, categories, labels, notes, ordering, and collections;
              </li>
              <li>local preferences and Extension settings.</li>
            </ul>
            <p>
              This data is used only to provide the Extension&rsquo;s core functionality.
            </p>

            <H2>3. No transmission to developer servers</H2>
            <p>
              In its current version, the Extension does not upload saved links, tab
              collections, folders, labels, notes, settings, or browsing data to
              developer-controlled servers.
            </p>
            <p>
              The Extension does not currently include cloud synchronization, account
              login, advertising, analytics, telemetry, crash reporting, or remote user
              tracking.
            </p>

            <H2>4. Chrome permissions</H2>
            <p>
              The final permission list depends on the published{" "}
              <code className="font-mono">manifest.json</code>. Use only the explanations
              for permissions actually present in the final manifest.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">storage</h3>
            <p>
              Used to save the user&rsquo;s tab collections, saved links, categories,
              labels, notes, preferences, and local Extension settings on the user&rsquo;s
              device. This data is stored locally and is not uploaded to
              developer-controlled servers.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">tabs</h3>
            <p>
              Used to read the titles, URLs, favicons, and tab status of tabs selected by
              the user or included in a saved browser session. This is necessary for the
              Extension&rsquo;s core function: saving, organizing, searching, and
              reopening tab collections.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">activeTab</h3>
            <p>
              Used only when the user actively clicks or interacts with the Extension to
              save or manage the current active tab. This permission provides temporary
              access to the active tab after a user action and is required to save the
              current page into a collection.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">tabGroups</h3>
            <p>
              <em>Use this explanation only if the permission is present.</em> Used to
              read or recreate Chrome tab group names, colors, and grouping structure if
              the Extension supports saving and restoring tab groups.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">sessions</h3>
            <p>
              <em>Use this explanation only if the permission is present.</em> Used to
              restore recently closed tabs or browser sessions if the Extension implements
              such functionality.
            </p>

            <h3 className="mt-6 text-base font-medium tracking-tight">contextMenus</h3>
            <p>
              <em>Use this explanation only if the permission is present.</em> Used to add
              right-click menu actions that let users save or organize tabs, links, or
              pages.
            </p>

            <H2>5. Permissions to avoid unless strictly necessary</H2>
            <p>
              The Extension should avoid broad or unrelated permissions unless they are
              necessary for the product&rsquo;s single purpose and clearly disclosed. In
              the current local-first concept, avoid permissions such as{" "}
              <code className="font-mono">history</code>,{" "}
              <code className="font-mono">cookies</code>,{" "}
              <code className="font-mono">identity</code>,{" "}
              <code className="font-mono">webRequest</code>,{" "}
              <code className="font-mono">declarativeNetRequest</code>,{" "}
              <code className="font-mono">scripting</code>,{" "}
              <code className="font-mono">unlimitedStorage</code>, and broad{" "}
              <code className="font-mono">host_permissions</code> unless a future feature
              clearly requires them and the Store Listing, Privacy Policy, and Chrome Web
              Store privacy disclosures are updated.
            </p>

            <H2>6. Limited Use commitment</H2>
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
              Chrome API data is used only to provide or improve the Extension&rsquo;s
              single purpose: allowing users to save, organize, search, and reopen tabs
              and links as local collections.
            </p>
            <p>
              Chrome API data is not used for advertising, profiling, creditworthiness,
              unrelated analytics, sale, resale, or transfer to data brokers.
            </p>

            <H2>7. No sale or sharing of user data</H2>
            <p>
              The Extension does not sell, rent, trade, or transfer saved tab collections,
              links, or local Extension data to third parties.
            </p>

            <H2>8. Remote code</H2>
            <p>
              The Extension should not load or execute remotely hosted code. All
              JavaScript, HTML, CSS, and other executable resources should be included in
              the extension package submitted to the Chrome Web Store.
            </p>
            <p>
              If remote code, remote configuration, cloud synchronization, or a remote
              service is introduced in the future, it must be reviewed for Chrome Web
              Store compliance, disclosed in the Developer Dashboard, and reflected in
              the Privacy Policy before release.
            </p>

            <H2>9. External project links</H2>
            <p>The Extension may include a link to the project website:</p>
            <p>
              <Link
                href={ATABS.paths.home}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {ATABS.urls.home}
              </Link>
            </p>
            <p>
              If a user voluntarily contacts support by email or submits information
              through an external website, that information is handled separately from
              the local operation of the Extension and only for the purpose for which the
              user submitted it.
            </p>

            <H2>10. Public URLs</H2>
            <ul>
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
                Data Handling Statement:{" "}
                <Link
                  href={ATABS.paths.dataHandling}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.urls.dataHandling}
                </Link>
              </li>
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
                Support email:{" "}
                <a
                  href={`mailto:${ATABS.contact.supportEmail}`}
                  className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
                >
                  {ATABS.contact.supportEmail}
                </a>
              </li>
            </ul>
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

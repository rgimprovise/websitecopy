import Link from "next/link";
import { Container } from "../ui/Container";
import { ATABS } from "@/lib/atabs";

/**
 * Информационный контент главной страницы /a-tabs/ (= /a-tabs/support/).
 *
 * Структура соответствует брифу A-TABS_Brief_v2:
 *   1. Название расширения      (в hero — ATabsHero)
 *   2. Короткое описание        (Description block)
 *   3. 3-5 ключевых функций      (Main features)
 *   4. Privacy-first блок        (Privacy)
 *   5. Legal links              (Documentation)
 *   6. Publisher notice         (Publisher / hosting)
 *
 * Никаких коммерческих CTA: партнёр на статусе Non-trader, и любой lead-gen
 * на странице A-TABS может сорвать модерацию Chrome Web Store.
 */
export function ATabsOverview() {
  return (
    <section className="bg-white py-14 text-brand-dark sm:py-16 md:py-20">
      <Container className="max-w-[920px]">
        {/* 2. Короткое описание */}
        <div className="space-y-5">
          <p className="text-base leading-relaxed sm:text-lg">{ATABS.description}</p>
          <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
            {ATABS.descriptionExtra}
          </p>
        </div>

        {/* Slides — реальные скриншоты расширения */}
        <div
          aria-label="A-TABS screenshots"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {ATABS.slides.map((slide) => (
            <figure
              key={slide.file}
              className="flex flex-col gap-3 overflow-hidden rounded-lg border border-brand-gray bg-[#0e0e0e]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#0e0e0e]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/a-tabs/${slide.file}`}
                  alt={slide.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-4 pb-4 text-sm leading-relaxed text-white/85">
                {slide.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 3. Ключевые функции */}
        <Block title="Main features">
          <ul className="legal-prose">
            {ATABS.features.map((feature) => (
              <li key={feature}>{feature}.</li>
            ))}
          </ul>
        </Block>

        {/* 4. Privacy-first */}
        <Block title="Privacy">
          <p className="text-base leading-relaxed sm:text-[17px]">
            A-TABS: Links Organizer is built with a local-first privacy approach. The
            extension itself does not collect or transmit user data to developer-controlled
            servers or third parties. Saved tabs, links, collections, and settings are
            stored locally on your device.
          </p>
          <ul className="legal-prose mt-4">
            {ATABS.privacyPoints.map((point) => (
              <li key={point}>{point}.</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            If the extension introduces account features, cloud synchronization, analytics,
            paid functionality, advertising, or related commercial products in the future,
            users will be informed, and the Privacy Policy and Chrome Web Store disclosures
            will be updated before such features are released.
          </p>
        </Block>

        {/* 5. Legal documentation */}
        <Block title="Documentation">
          <ul className="legal-prose">
            <li>
              <DocLink href={ATABS.paths.privacyPolicy} label="Privacy Policy" />
            </li>
            <li>
              <DocLink href={ATABS.paths.termsOfUse} label="Terms of Use" />
            </li>
            <li>
              <DocLink href={ATABS.paths.dataHandling} label="Data Handling Statement" />
            </li>
            <li>
              <DocLink href={ATABS.paths.support} label="Support" />
            </li>
            <li>
              <DocLink href={ATABS.paths.openSourceNotices} label="Open Source Notices" />
            </li>
          </ul>
          <p className="mt-3 text-sm text-brand-muted">
            Last updated: {ATABS.legalEdition}.
          </p>
        </Block>

        {/* Нейтральный CTA (без коммерции) — install + support, как в брифе */}
        <div className="mt-12 rounded-xl border border-brand-gray bg-[#f6f7f9] p-6">
          <h2 className="text-xl font-medium tracking-tight sm:text-2xl">Get the extension</h2>
          {ATABS.urls.chromeWebStore ? (
            <p className="mt-3 text-base leading-relaxed">
              <a
                href={ATABS.urls.chromeWebStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Install from the Chrome Web Store →
              </a>
            </p>
          ) : (
            <p className="mt-3 text-base leading-relaxed text-brand-muted">
              The Chrome Web Store listing will be linked here after publication.
            </p>
          )}
          <p className="mt-4 text-base leading-relaxed">
            Need help or want to report a bug? Email{" "}
            <a
              href={`mailto:${ATABS.contact.supportEmail}`}
              className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
            >
              {ATABS.contact.supportEmail}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            Please read the{" "}
            <Link
              href={ATABS.paths.privacyPolicy}
              className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
            >
              Privacy Policy
            </Link>{" "}
            before installing.
          </p>
        </div>

        {/* 6. Publisher / hosting notice */}
        <Block title="Publisher">
          <p className="text-base leading-relaxed sm:text-[17px]">
            <strong>Chrome Web Store publisher name:</strong> {ATABS.publisher.displayName}
            <br />
            <strong>Responsible publisher / provider:</strong> {ATABS.publisher.responsible}
            <br />
            <strong>Country:</strong> {ATABS.publisher.country}
            <br />
            <strong>Trader status:</strong> {ATABS.publisher.traderStatus}
            <br />
            <strong>Legal email:</strong>{" "}
            <a
              href={`mailto:${ATABS.contact.legalEmail}`}
              className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
            >
              {ATABS.contact.legalEmail}
            </a>
            <br />
            <strong>Support email:</strong>{" "}
            <a
              href={`mailto:${ATABS.contact.supportEmail}`}
              className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
            >
              {ATABS.contact.supportEmail}
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            {ATABS.hostingNotice}
          </p>
        </Block>
      </Container>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-medium tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
    >
      {label}
    </Link>
  );
}

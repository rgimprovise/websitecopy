import Link from "next/link";
import { Container } from "../ui/Container";
import { ATABS } from "@/lib/atabs";

interface ATabsHeroProps {
  /**
   * Подзаголовок: либо стандартный tagline (для главной/support),
   * либо короткое имя документа ("Privacy Policy", "Terms of Use",
   * "Data Handling") — для документов первый экран должен сразу нести
   * название расширения и publisher.
   */
  documentTitle?: string;
  /** Подпись под заголовком документа (например, дата редакции). */
  documentSubtitle?: string;
}

/**
 * Шапка для всех страниц /a-tabs/*. Делает первым видимым экраном
 * название расширения и publisher (Alexander Khrushch) — это требование
 * для модерации в Google Chrome Web Store.
 */
export function ATabsHero({ documentTitle, documentSubtitle }: ATabsHeroProps = {}) {
  const isDocument = Boolean(documentTitle);

  return (
    <section className="relative overflow-hidden bg-brand-dark pb-12 pt-32 text-white sm:pt-36 md:pb-16 md:pt-40">
      <Container>
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60 sm:text-sm">
            chrome extension
          </p>
          <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {ATABS.name}
          </h1>
          <p className="text-lg font-light text-white/80 sm:text-xl">
            by <span className="font-medium text-white">{ATABS.publisher}</span>
          </p>

          {isDocument ? (
            <div className="mt-6 border-t border-white/15 pt-6">
              <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                {documentTitle}
              </h2>
              {documentSubtitle ? (
                <p className="mt-2 text-sm text-white/60">{documentSubtitle}</p>
              ) : null}
            </div>
          ) : (
            <p className="mt-2 max-w-[720px] text-base leading-relaxed text-white/80 sm:text-lg">
              {ATABS.tagline}
            </p>
          )}

          <nav
            aria-label="A-TABS документация"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
          >
            <Link
              href={ATABS.paths.home}
              className="transition-colors hover:text-white"
            >
              о расширении.
            </Link>
            <Link
              href={ATABS.paths.support}
              className="transition-colors hover:text-white"
            >
              поддержка.
            </Link>
            <Link
              href={ATABS.paths.privacyPolicy}
              className="transition-colors hover:text-white"
            >
              privacy policy.
            </Link>
            <Link
              href={ATABS.paths.termsOfUse}
              className="transition-colors hover:text-white"
            >
              terms of use.
            </Link>
            <Link
              href={ATABS.paths.dataHandling}
              className="transition-colors hover:text-white"
            >
              data handling.
            </Link>
          </nav>
        </div>
      </Container>
    </section>
  );
}

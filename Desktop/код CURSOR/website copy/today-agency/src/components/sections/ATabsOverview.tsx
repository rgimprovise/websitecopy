import { Container } from "../ui/Container";
import { ATABS } from "@/lib/atabs";

/**
 * Содержимое главной страницы /a-tabs/ и страницы /a-tabs/support/.
 * Включает: краткое описание, плейсхолдер под слайды (партнёр пришлёт
 * скриншоты позже), функции, аудиторию, конфиденциальность, тестирование.
 *
 * CTA рендерится отдельно через <ContactCTA /> в самой странице.
 */
export function ATabsOverview() {
  return (
    <section className="bg-white py-14 text-brand-dark sm:py-16 md:py-20">
      <Container className="max-w-[920px]">
        {/* Краткое описание */}
        <div className="space-y-5">
          <p className="text-base leading-relaxed sm:text-lg">{ATABS.description}</p>
          <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
            {ATABS.descriptionExtra}
          </p>
        </div>

        {/* Слайды. Файлы лежат в public/images/a-tabs/. Если файл отсутствует,
            рисуется dashed-плейсхолдер с подсказкой имени — это безопасно
            работает в статическом экспорте без 404 в консоли. */}
        <div
          aria-label="Скриншоты расширения A-TABS"
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
        <p className="mt-3 text-xs text-brand-muted">
          Файлы слайдов: <code className="font-mono">public/images/a-tabs/{`{`}
          {ATABS.slides.map((s) => s.file).join(", ")}
          {`}`}</code>
        </p>

        {/* Основные функции */}
        <Block title="Основные функции">
          <ul className="legal-prose">
            {ATABS.features.map((f) => (
              <li key={f}>{f};</li>
            ))}
          </ul>
        </Block>

        {/* Для кого */}
        <Block title="Для кого">
          <ul className="legal-prose">
            {ATABS.audience.map((a) => (
              <li key={a}>{a};</li>
            ))}
          </ul>
        </Block>

        {/* Конфиденциальность */}
        <Block title="Конфиденциальность">
          <p className="text-base leading-relaxed sm:text-[17px]">{ATABS.privacy}</p>
        </Block>

        {/* Примечание */}
        <Block title="Примечание">
          <p className="text-base leading-relaxed sm:text-[17px]">{ATABS.pricingNote}</p>
          <p className="mt-3 text-base leading-relaxed sm:text-[17px]">{ATABS.authNote}</p>
        </Block>

        {/* Тестирование */}
        <Block title="Чтобы протестировать расширение">
          <ol className="legal-prose mt-2 list-decimal pl-5">
            {ATABS.testSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            {ATABS.testFootnote}
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

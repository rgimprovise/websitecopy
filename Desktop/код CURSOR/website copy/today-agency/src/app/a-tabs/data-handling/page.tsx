import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Data Handling — ${ATABS.name} — ${ATABS.publisher}`,
  description: `Данные, которые обрабатывает расширение ${ATABS.name}, и принципы их обработки.`,
  openGraph: {
    title: `Data Handling — ${ATABS.name} — ${ATABS.publisher}`,
    description: `Данные, которые обрабатывает расширение ${ATABS.name}, и принципы их обработки.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.dataHandling}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsDataHandlingPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Data Handling / Обработка данных"
        documentSubtitle={ATABS.legalEdition}
      />

      <section className="bg-white pb-20 pt-12 text-brand-dark md:pt-16">
        <Container className="max-w-[920px]">
          <div className="rounded-xl border border-brand-gray bg-[#f6f7f9] p-5 text-sm leading-relaxed">
            <p>
              <strong>Расширение:</strong> {ATABS.name}
            </p>
            <p className="mt-2">
              <strong>Publisher:</strong> {ATABS.publisher}
            </p>
            <p className="mt-2">
              <strong>Контакты:</strong> {CONTACT.email}
            </p>
          </div>

          <article className="legal-prose mt-12">
            <H2>1. Зачем нужен этот документ</H2>
            <p>
              Документ описывает, какие данные обрабатывает расширение{" "}
              <strong>{ATABS.name}</strong> в соответствии с требованиями Google Chrome Web
              Store (Developer Program Policies) и принципами Limited Use. Документ
              дополняет{" "}
              <Link
                href={ATABS.paths.privacyPolicy}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Privacy Policy
              </Link>{" "}
              и{" "}
              <Link
                href={ATABS.paths.termsOfUse}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Terms of Use
              </Link>{" "}
              расширения.
            </p>

            <H2>2. Какие данные собираются</H2>
            <div className="-mx-5 overflow-x-auto px-5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-brand-gray bg-[#f6f7f9] p-3 text-left font-medium">
                      Категория данных
                    </th>
                    <th className="border border-brand-gray bg-[#f6f7f9] p-3 text-left font-medium">
                      Цель
                    </th>
                    <th className="border border-brand-gray bg-[#f6f7f9] p-3 text-left font-medium">
                      Где хранятся
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-brand-gray p-3 align-top">
                      URL и заголовки вкладок, которые пользователь явно сохраняет в
                      коллекцию
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      обеспечение ключевой функции — сохранение и повторное открытие
                      коллекций ссылок
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      локально на устройстве пользователя (chrome.storage)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-brand-gray p-3 align-top">
                      Пользовательские названия коллекций, метки, порядок элементов
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      организация и поиск ранее сохранённых ссылок
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      локально на устройстве пользователя (chrome.storage)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-brand-gray p-3 align-top">
                      Пользовательские настройки интерфейса Расширения
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      сохранение предпочтений пользователя между сеансами
                    </td>
                    <td className="border border-brand-gray p-3 align-top">
                      локально на устройстве пользователя (chrome.storage)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H2>3. Какие данные НЕ собираются</H2>
            <ul>
              <li>история просмотров пользователя;</li>
              <li>содержимое веб-страниц, которые пользователь явно не сохранил в коллекцию;</li>
              <li>персональная идентифицирующая информация (имя, email, телефон, адрес);</li>
              <li>финансовые, медицинские, биометрические и иные чувствительные данные;</li>
              <li>геолокация, сведения с камеры, микрофона, контакты, переписка;</li>
              <li>данные cookies сторонних сайтов;</li>
              <li>данные авторизации в сторонних сервисах.</li>
            </ul>

            <H2>4. Передача данных</H2>
            <p>
              Расширение не передаёт пользовательские данные на удалённые серверы Publisher
              или третьим лицам. Расширение не использует рекламные или аналитические сети.
            </p>
            <p>
              Если в будущем появятся функции, предполагающие передачу данных (например,
              синхронизация между устройствами), они будут опциональными, отдельно
              отмечаемыми в интерфейсе, и до их включения настоящий документ будет обновлён.
            </p>

            <H2>5. Соответствие политикам Google Chrome Web Store</H2>
            <p>Publisher подтверждает, что расширение {ATABS.name}:</p>
            <ul>
              <li>не продаёт пользовательские данные третьим лицам;</li>
              <li>
                не использует пользовательские данные и не передаёт их в целях, не связанных с
                основной заявленной функциональностью Расширения;
              </li>
              <li>
                не использует пользовательские данные для определения кредитоспособности или
                в иных аналогичных целях;
              </li>
              <li>
                не передаёт пользовательские данные сторонним рекламным сетям или брокерам
                данных.
              </li>
            </ul>

            <H2>6. Удаление данных</H2>
            <p>
              Пользователь может в любой момент удалить любую сохранённую коллекцию или
              отдельную ссылку через интерфейс Расширения. При удалении Расширения из браузера
              связанные локальные данные (chrome.storage) удаляются стандартными средствами
              браузера.
            </p>

            <H2>7. Изменения документа</H2>
            <p>
              Publisher вправе обновлять настоящий документ при изменении функциональности
              Расширения или применимых требований. Актуальная редакция размещается по адресу{" "}
              <Link
                href={ATABS.paths.dataHandling}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                alarcev.n8nrgimprovise.space{ATABS.paths.dataHandling}
              </Link>
              .
            </p>

            <H2>8. Контакты</H2>
            <p>
              По вопросам обработки данных Расширением можно написать на{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {CONTACT.email}
              </a>{" "}
              или связаться с Publisher через{" "}
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Telegram
              </a>
              .
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

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Use — ${ATABS.name} — ${ATABS.publisher}`,
  description: `Условия использования расширения ${ATABS.name}, ${ATABS.publisher}.`,
  openGraph: {
    title: `Terms of Use — ${ATABS.name} — ${ATABS.publisher}`,
    description: `Условия использования расширения ${ATABS.name}, ${ATABS.publisher}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.termsOfUse}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsTermsOfUsePage() {
  return (
    <>
      <ATabsHero
        documentTitle="Terms of Use / Условия использования"
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
            <H2>1. Принятие условий</H2>
            <p>
              Настоящие Условия использования (далее — <strong>Условия</strong>) регулируют
              порядок использования расширения <strong>{ATABS.name}</strong> (далее —
              <strong> Расширение</strong>) для браузера Google Chrome, publisher которого —
              <strong> {ATABS.publisher}</strong>. Установка и/или использование Расширения
              означают, что пользователь ознакомился с настоящими Условиями и принимает их в
              полном объёме. Если пользователь не согласен с Условиями, он должен прекратить
              использование Расширения и удалить его из браузера.
            </p>

            <H2>2. Назначение Расширения</H2>
            <p>
              Расширение предоставляет пользователю простые локальные инструменты для
              сохранения вкладок и ссылок в коллекции и для их повторного открытия. Расширение
              предоставляется «как есть» (as is) и предназначено исключительно для личного и
              профессионального использования в браузере Google Chrome.
            </p>

            <H2>3. Допустимое использование</H2>
            <p>Пользователь вправе использовать Расширение исключительно законными способами, в том числе для:</p>
            <ul>
              <li>сохранения вкладок и ссылок в локальные коллекции;</li>
              <li>организации собственных рабочих или учебных материалов;</li>
              <li>повторного открытия ранее сохранённых сессий и подборок ссылок.</li>
            </ul>
            <p>Пользователю запрещается:</p>
            <ul>
              <li>использовать Расширение способами, нарушающими применимое законодательство;</li>
              <li>
                предпринимать действия, направленные на нарушение работоспособности Расширения,
                обход технических ограничений, получение несанкционированного доступа к коду
                или данным;
              </li>
              <li>
                декомпилировать, дизассемблировать или иным образом пытаться получить исходный
                код Расширения, кроме случаев, прямо допускаемых законом;
              </li>
              <li>
                использовать Расширение для автоматизированного сбора материалов с веб-сайтов
                с нарушением условий таких сайтов;
              </li>
              <li>
                распространять, перепродавать или передавать сборки Расширения третьим лицам в
                изменённом виде без явного письменного согласия Publisher.
              </li>
            </ul>

            <H2>4. Локальное хранение данных</H2>
            <p>
              Все сохранённые пользователем коллекции, ссылки и пользовательские настройки
              хранятся локально на устройстве пользователя средствами браузера Google Chrome.
              Расширение не загружает эти данные на удалённые серверы. Подробнее — в{" "}
              <Link
                href={ATABS.paths.privacyPolicy}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Privacy Policy
              </Link>{" "}
              и{" "}
              <Link
                href={ATABS.paths.dataHandling}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Data Handling
              </Link>
              .
            </p>

            <H2>5. Стоимость и возможные изменения</H2>
            <p>
              На момент публикации настоящих Условий Расширение распространяется бесплатно. В
              будущем могут появиться платные функции, облачные возможности или сопутствующие
              коммерческие продукты. О любых таких изменениях пользователи будут уведомлены
              заранее, а соответствующие документы (Privacy Policy, Terms of Use, Data
              Handling) будут обновлены.
            </p>

            <H2>6. Интеллектуальная собственность</H2>
            <p>
              Все права на Расширение, включая его исходный код, интерфейс, графику,
              торговое название и связанные материалы, принадлежат Publisher{" "}
              <strong>{ATABS.publisher}</strong> либо используются Publisher на законном
              основании. Использование материалов Расширения за пределами, прямо допускаемых
              настоящими Условиями и применимым законодательством, не разрешается.
            </p>

            <H2>7. Сторонние сервисы</H2>
            <p>
              Расширение работает в среде браузера Google Chrome и может взаимодействовать с
              его стандартными API. Условия использования Google Chrome и Chrome Web Store
              регулируются соответствующими политиками Google. Publisher не несёт
              ответственности за работу сторонних сервисов, веб-сайтов и инструментов, ссылки
              на которые могут быть сохранены пользователем в Расширении.
            </p>

            <H2>8. Ограничение ответственности</H2>
            <p>
              Расширение предоставляется «как есть», без каких-либо явных или подразумеваемых
              гарантий. Publisher принимает разумные меры для корректной работы Расширения,
              однако не гарантирует, что:
            </p>
            <ul>
              <li>Расширение будет работать непрерывно, без ошибок и технических сбоев;</li>
              <li>Расширение будет полностью совместимо с любыми устройствами, версиями браузера и операционных систем;</li>
              <li>сохранённые пользователем данные не будут потеряны в результате внешних факторов (сбой устройства, действия других программ, сброс настроек браузера и т. п.).</li>
            </ul>
            <p>
              В максимально допустимой применимым законодательством степени Publisher не
              несёт ответственности за любые прямые или косвенные убытки, возникшие в связи с
              использованием или невозможностью использования Расширения, включая утрату
              данных, упущенную выгоду и любой ущерб репутации.
            </p>

            <H2>9. Изменения Условий</H2>
            <p>
              Publisher вправе в любое время изменять настоящие Условия. Актуальная редакция
              размещается по адресу{" "}
              <Link
                href={ATABS.paths.termsOfUse}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                alarcev.n8nrgimprovise.space{ATABS.paths.termsOfUse}
              </Link>
              . Продолжение использования Расширения после публикации новой редакции означает
              согласие пользователя с такими изменениями.
            </p>

            <H2>10. Контакты</H2>
            <p>
              По вопросам, связанным с настоящими Условиями, пользователь может написать на
              адрес{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {CONTACT.email}
              </a>{" "}
              либо связаться с Publisher через{" "}
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

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATABS } from "@/lib/atabs";
import { LEGAL, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy — ${ATABS.name} — ${ATABS.publisher}`,
  description: `Политика конфиденциальности расширения ${ATABS.name}, ${ATABS.publisher}.`,
  openGraph: {
    title: `Privacy Policy — ${ATABS.name} — ${ATABS.publisher}`,
    description: `Политика конфиденциальности расширения ${ATABS.name}, ${ATABS.publisher}.`,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.privacyPolicy}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsPrivacyPolicyPage() {
  return (
    <>
      <ATabsHero
        documentTitle="Privacy Policy / Политика конфиденциальности"
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
              <strong>Сайт продукта:</strong>{" "}
              <Link
                href={ATABS.paths.home}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                alarcev.n8nrgimprovise.space{ATABS.paths.home}
              </Link>
            </p>
            <p className="mt-2">
              <strong>Оператор сайта-носителя документации:</strong> {LEGAL.name}, ИНН{" "}
              {LEGAL.inn}, ОГРНИП {LEGAL.ogrnip}
            </p>
            <p className="mt-2">
              <strong>Контакты для обращений:</strong> {CONTACT.email}, {CONTACT.phone}
            </p>
          </div>

          <article className="legal-prose mt-12">
            <H2>1. Общие положения</H2>
            <p>
              Настоящая Политика конфиденциальности (далее — <strong>Политика</strong>)
              определяет порядок обработки и защиты сведений пользователей расширения{" "}
              <strong>{ATABS.name}</strong> (далее — <strong>Расширение</strong>), publisher
              которого — <strong>{ATABS.publisher}</strong>, а также сведения о сайте, на
              котором размещена документация Расширения.
            </p>
            <p>
              Расширение разработано как локальный инструмент для организации вкладок и
              ссылок. Использование Расширения означает, что пользователь ознакомился с
              условиями настоящей Политики и принимает их.
            </p>

            <H2>2. Принципы конфиденциальности</H2>
            <ul>
              <li>
                Расширение не собирает историю просмотров и не отслеживает посещённые
                пользователем веб-сайты.
              </li>
              <li>Расширение не использует рекламные трекеры и не показывает рекламу.</li>
              <li>
                Расширение не передаёт сохранённые вкладки, коллекции или иные пользовательские
                данные третьим лицам.
              </li>
              <li>
                Сохранённые в Расширении данные хранятся локально на устройстве пользователя,
                если в интерфейсе Расширения явно не указано иное.
              </li>
              <li>Учётная запись или вход в систему для использования Расширения не требуются.</li>
            </ul>

            <H2>3. Какие данные обрабатывает Расширение</H2>
            <p>
              Расширение обрабатывает только те данные, которые необходимы для его основной
              функции — сохранения вкладок и ссылок в локальные коллекции и их повторного
              открытия:
            </p>
            <ul>
              <li>URL-адреса и заголовки вкладок, которые пользователь явно сохраняет в коллекцию;</li>
              <li>пользовательские названия и группировки коллекций;</li>
              <li>
                пользовательские настройки интерфейса Расширения (например, выбранный режим
                отображения).
              </li>
            </ul>
            <p>
              Указанные данные сохраняются локально с использованием стандартных механизмов
              хранения данных расширений Google Chrome (chrome.storage и аналогичные API).
              Расширение не загружает эти данные на удалённые серверы.
            </p>

            <H2>4. Какие данные Расширение НЕ обрабатывает</H2>
            <ul>
              <li>история просмотров пользователя;</li>
              <li>содержимое посещаемых веб-страниц, не сохранённых пользователем явно;</li>
              <li>данные cookies сторонних сайтов;</li>
              <li>персональные данные финансового, медицинского или иного чувствительного характера;</li>
              <li>данные геолокации, контактов, переписки или мультимедиа.</li>
            </ul>

            <H2>5. Сайт-носитель документации</H2>
            <p>
              Документация Расширения размещена на сайте <strong>alarcev.n8nrgimprovise.space</strong>,
              оператором которого является {LEGAL.name} (ИНН {LEGAL.inn}, ОГРНИП {LEGAL.ogrnip}).
              Использование самого сайта (просмотр документации, форма обратной связи) регулируется
              отдельной{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                Политикой конфиденциальности сайта ALARCEV
              </Link>
              .
            </p>

            <H2>6. Передача данных третьим лицам</H2>
            <p>
              Расширение не передаёт сохранённые пользовательские данные третьим лицам.
              Передача каких-либо сведений может быть произведена только в случае, если этого
              прямо требует применимое законодательство, и только в объёме, необходимом для
              исполнения такого требования.
            </p>

            <H2>7. Безопасность</H2>
            <p>
              Publisher принимает разумные технические и организационные меры для защиты
              пользовательских данных, обрабатываемых Расширением. При этом пользователь
              понимает и соглашается, что абсолютная безопасность данных в среде стороннего
              браузера и операционной системы не может быть гарантирована.
            </p>

            <H2>8. Бесплатное использование и возможные изменения</H2>
            <p>
              На момент публикации настоящей Политики Расширение распространяется бесплатно и
              не содержит платных функций, рекламы или скрытой монетизации. Если в будущем
              появятся платные функции, облачные возможности или сопутствующие коммерческие
              продукты, пользователи будут об этом заранее уведомлены, а настоящая Политика
              будет обновлена соответствующим образом.
            </p>

            <H2>9. Права пользователя</H2>
            <p>Пользователь Расширения вправе:</p>
            <ul>
              <li>в любой момент удалить любую сохранённую коллекцию или отдельную ссылку;</li>
              <li>удалить Расширение из браузера, что приводит к удалению связанных локальных данных;</li>
              <li>обратиться к Publisher по контактам, указанным в настоящей Политике, по любым вопросам обработки данных.</li>
            </ul>

            <H2>10. Изменения Политики</H2>
            <p>
              Publisher вправе изменять настоящую Политику. Актуальная редакция публикуется по
              адресу{" "}
              <Link
                href={ATABS.paths.privacyPolicy}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                alarcev.n8nrgimprovise.space{ATABS.paths.privacyPolicy}
              </Link>{" "}
              и вступает в силу с момента её размещения.
            </p>

            <H2>11. Контакты</H2>
            <p>
              По любым вопросам, связанным с обработкой данных в Расширении{" "}
              <strong>{ATABS.name}</strong>, можно написать на адрес{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-brand-blue underline underline-offset-2 transition-colors hover:text-brand-blue-hover"
              >
                {CONTACT.email}
              </a>{" "}
              или связаться через{" "}
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

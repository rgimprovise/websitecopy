import Link from "next/link";
import { Container } from "../ui/Container";
import { ContactLink } from "../ui/ContactLink";
import { BRAND, FOOTER_NAV, CONTACT, LEGAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark py-10 text-white sm:py-12 md:py-16">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="mb-8 block text-xl font-medium tracking-tight">
            {BRAND.fullName}
          </Link>
          <nav className="flex flex-col gap-3">
            {FOOTER_NAV.map((link) => (
              <ContactLink key={link.href} href={link.href}>
                {link.label}.
              </ContactLink>
            ))}
            <ContactLink href="/privacy-policy" className="mt-4 text-white/40">
              Политика конфиденциальности.
            </ContactLink>
            <ContactLink href="/user-agreement" className="text-white/40">
              Пользовательское соглашение.
            </ContactLink>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="text-lg font-medium transition-colors hover:text-brand-blue"
          >
            {CONTACT.phone}
          </a>
          <ContactLink href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </ContactLink>
          <ContactLink
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <TelegramIcon />
            написать в Telegram
          </ContactLink>
        </div>

        <div className="flex flex-col gap-4 text-sm leading-relaxed text-white/40">
          <p>{LEGAL.name}</p>
          <p>ИНН {LEGAL.inn}</p>
          <p>ОГРНИП {LEGAL.ogrnip}</p>
        </div>
      </Container>

      <Container className="mt-12 border-t border-white/10 pt-6">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} {BRAND.fullName}
        </p>
      </Container>
    </footer>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

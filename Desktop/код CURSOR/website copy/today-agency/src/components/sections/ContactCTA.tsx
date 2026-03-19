"use client";

import { Container } from "../ui/Container";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function ContactCTA() {
  return (
    <>
      <section
        aria-hidden="true"
        className="h-[306px] bg-brand-gray bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/tild6366-3234-4338-b566-613831366539__gradient-transparent.png')",
        }}
      />

      <section
        id="contacts"
        className="relative h-[640px] overflow-hidden bg-[#E61D63] text-white max-[960px]:h-[560px] max-[640px]:h-[440px]"
      >
        <Container className="relative h-full">
          <Reveal
            as="div"
            className="absolute left-0 top-[112px] z-10 max-w-[660px] max-[640px]:top-[72px] max-[640px]:max-w-[420px]"
          >
            <h2 className="font-[400] leading-[56px] text-[64px] text-[#eaeaea] max-[640px]:text-[32px] max-[640px]:leading-[34px]">
              давайте обсудим
              <br />
              ваш проект.
            </h2>
          </Reveal>

          <Reveal as="div" delayMs={120}>
            <div className="absolute left-0 top-[428px] z-10 flex flex-col gap-4 max-[640px]:top-[300px] max-[640px]:gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[28px] font-[400] leading-[34px] text-white max-[640px]:text-[18px] max-[640px]:leading-[22px]"
              >
                {CONTACT.email}
              </a>

              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[66px] w-[382px] max-w-full items-center justify-center bg-white text-[28px] font-[400] leading-[1.1] tracking-[-0.5px] text-[#1e1e1e] transition-colors hover:bg-[#f2f2f2] max-[640px]:h-[42px] max-[640px]:w-[210px] max-[640px]:text-[14px] max-[640px]:tracking-[0]"
              >
                написать в telegram.
              </a>
            </div>
          </Reveal>

          <img
            src="/images/tild3134-6132-4434-a232-343266343761__marat_pavel.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-[-90px] z-0 h-auto w-[728px] max-w-none max-[960px]:right-[-120px] max-[960px]:w-[606px] max-[640px]:hidden"
          />
        </Container>
      </section>
    </>
  );
}

"use client";

import { Container } from "../ui/Container";
import { OpenLeadModalButton } from "../ui/OpenLeadModalButton";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function ContactCTA() {
  return (
    <>
      <section
        aria-hidden="true"
        className="h-[160px] sm:h-[220px] md:h-[306px]"
        style={{
          background: "linear-gradient(to bottom, #EAEAEA, #FF150E)",
        }}
      />

      <section
        id="contacts"
        className="relative overflow-hidden bg-[#FF150E] py-[80px] text-white max-[640px]:py-[50px]"
      >
        <Container>
          <Reveal as="div">
            <h2 className="max-w-[900px] font-[400] leading-[1] text-[52px] text-[#eaeaea] max-[960px]:text-[42px] max-[640px]:text-[28px] max-[640px]:leading-[1.15]">
              если вам нужна управляемая система роста — давайте обсудим проект.
            </h2>
          </Reveal>

          <Reveal as="div" delayMs={120} className="mt-12 flex flex-col gap-4 max-[640px]:mt-8 max-[640px]:gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[24px] font-[400] leading-[30px] text-white max-[640px]:text-[18px] max-[640px]:leading-[22px]"
            >
              {CONTACT.email}
            </a>

            <OpenLeadModalButton className="inline-flex h-[66px] w-[382px] max-w-full items-center justify-center bg-white text-[28px] font-[400] leading-[1.1] tracking-[-0.5px] text-[#1e1e1e] transition-colors hover:bg-[#f2f2f2] max-[640px]:h-[42px] max-[640px]:w-[210px] max-[640px]:text-[14px] max-[640px]:tracking-[0]">
              оставить заявку.
            </OpenLeadModalButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

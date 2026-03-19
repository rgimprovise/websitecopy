import Image from "next/image";
import { Section } from "../ui/Section";
import { CLIENT_LOGOS } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function Clients() {
  return (
    <>
      {/* Tilda rec815221851 (record-type=248): header */}
      <Section bg="gray" paddingClassName="pt-[60px] pb-[15px]">
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">клиенты</SectionLabel>
          </h2>
          <p className="font-[300] leading-[0.88] text-[32px] min-[900px]:text-[64px] min-[900px]:leading-[0.88]">
            нам доверяют.
          </p>
        </Reveal>
      </Section>

      {/* Tilda rec815231984 (record-type=537): grid */}
      <Section bg="gray" paddingClassName="pt-0 pb-[60px]">
        <Reveal as="div" delayMs={120}>
          <ul role="list" className="flex flex-wrap">
            {CLIENT_LOGOS.map((logo, idx) => {
              const desktopFirstRow = idx < 4; // nth-child(-n+4)
              const tabletFirstRow = idx < 2; // first two items have mt=0 on <=960
              const isSecondItem = idx === 1; // nth-child(2) gets mt=45 on <=480

              const parityIsOddChild = (idx + 1) % 2 === 1; // nth-child(odd)

              const mtBase = desktopFirstRow ? "mt-0" : "mt-[90px]";
              const mtTablet = tabletFirstRow
                ? "max-[960px]:mt-0"
                : "max-[960px]:mt-[40px]";
              const mtMobileSecond = isSecondItem
                ? "max-[480px]:mt-[45px]"
                : "";

              return (
                <li
                  key={logo.name}
                  className={[
                    // 4 cols desktop, 2 cols <=960, 1 col <=480
                    "w-1/4 max-[960px]:w-1/2 max-[480px]:w-full",
                    mtBase,
                    mtTablet,
                    "max-[960px]:mt-[40px]",
                    mtMobileSecond,
                    // mobile left/right padding from Tilda CSS
                    parityIsOddChild
                      ? "max-[640px]:pl-[40px] max-[480px]:pl-[20px]"
                      : "max-[640px]:pr-[40px] max-[480px]:pr-[20px]",
                  ].join(" ")}
                >
                  <div className="mx-auto w-full max-w-[220px] max-[480px]:max-w-[460px]">
                    <div className="mb-[20px] flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={260}
                        height={260}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}

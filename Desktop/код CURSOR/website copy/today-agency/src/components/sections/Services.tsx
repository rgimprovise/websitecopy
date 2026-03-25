import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";
import { SERVICE_DESCRIPTIONS, SERVICES, SERVICES_SECTION } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function Services() {
  return (
    <>
      {/* Tilda record-type=248: [ что мы делаем ] + paragraph */}
      <Section
        bg="gray"
        paddingClassName="pt-[60px] pb-[60px] max-[480px]:pb-[30px]"
      >
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">{SERVICES_SECTION.label}</SectionLabel>
          </h2>
          <p className="max-w-[980px] font-[300] leading-[1.05] text-[22px] sm:text-[26px] sm:leading-[0.92] min-[900px]:text-[44px]">
            {SERVICES_SECTION.lead}
          </p>
        </Reveal>
      </Section>

      {/* Tilda record-type=846: list */}
      <Section
        id="services"
        bg="gray"
        paddingClassName="pt-[10px] pb-[20px] sm:pt-[16px] sm:pb-[28px]"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service} as="div" delayMs={i * 160}>
              <Card className="pt-4 pb-5">
                <p className="text-[18px] font-[500] leading-[1.15] text-brand-dark">
                  {service}
                </p>
                <p className="mt-3 text-[15px] leading-[1.4] text-brand-dark/80">
                  {SERVICE_DESCRIPTIONS[i]}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delayMs={220}>
          <a
            href="#contacts"
            className="mt-8 inline-flex items-center gap-3 bg-brand-blue px-6 py-4 text-sm font-light text-white transition-colors hover:bg-brand-blue-hover"
          >
            <img
              src="/images/tild3039-3764-4233-a135-323164323633__corner-down-right.svg"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 brightness-0 invert"
            />
            обсудить проект
          </a>
        </Reveal>
      </Section>
    </>
  );
}

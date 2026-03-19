import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";
import { SERVICES } from "@/lib/constants";
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
            <SectionLabel className="font-[500]">
              что мы делаем
            </SectionLabel>
          </h2>
          <p className="max-w-[980px] font-[300] leading-[0.88] text-[32px] min-[900px]:text-[58px]">
            можем заменить целый отдел, усилить команду или взять
            отдельные задачи по маркетингу или продажам.
          </p>
        </Reveal>
      </Section>

      {/* Tilda record-type=846: list */}
      <Section
        id="services"
        bg="gray"
        paddingClassName="pt-[10px] pb-[20px] sm:pt-[16px] sm:pb-[28px]"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4 md:gap-x-8 md:gap-y-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service} as="div" delayMs={i * 160}>
              <Card compact className="pt-[9px] pb-0">
                <p className="text-[13px] font-[500] uppercase leading-[1.15] tracking-[0.02em]">
                  ◼ {service}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

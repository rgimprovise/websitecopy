import { Section } from "../ui/Section";
import { AUDIENCE } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function Clients() {
  return (
    <>
      {/* Tilda rec815221851 (record-type=248): header */}
      <Section bg="gray" paddingClassName="pt-[60px] pb-[15px]">
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">для кого</SectionLabel>
          </h2>
          <p className="font-[300] leading-[1.05] text-[22px] sm:text-[26px] sm:leading-[0.92] min-[900px]:text-[46px] min-[900px]:leading-[0.92]">
            мы работаем с компаниями, которым уже недостаточно «просто подрядчика».
          </p>
        </Reveal>
      </Section>

      <Section bg="gray" paddingClassName="pt-0 pb-[60px]">
        <Reveal as="div" delayMs={120}>
          <ul role="list" className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-brand-dark/20 pt-3 text-[15px] leading-[1.4] text-brand-dark/85">
                <span aria-hidden="true" className="mt-[7px] block h-[4px] w-[4px] bg-brand-dark" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}

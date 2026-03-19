import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { APPROACH_PRINCIPLES } from "@/lib/constants";

export function Intro() {
  return (
    <Section bg="gray" paddingClassName="pt-[30px] pb-[30px]">
      <Reveal as="p">
        <span className="block max-w-[980px] font-[300] leading-[0.88] text-[32px] min-[900px]:text-[58px]">
          это окупается, но дорого, потому что результат нашей
          работы&nbsp;&mdash; рост выручки клиентов.
        </span>
      </Reveal>

      <div className="mt-8 space-y-0 md:mt-10">
        {APPROACH_PRINCIPLES.map((title, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <div key={title} className="py-2">
              <Reveal as="div" delayMs={i * 120}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 pt-1">
                    <SectionLabel className="font-[500]">{num}</SectionLabel>
                  </div>
                  <div className="col-span-10">
                    <p className="font-[300] leading-[1] text-[24px] min-[900px]:text-[40px] min-[900px]:leading-[1.2]">
                      {title}
                    </p>
                  </div>
                </div>
              </Reveal>
              {i !== APPROACH_PRINCIPLES.length - 1 && (
                <div className="mt-4 h-px bg-brand-dark/10" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

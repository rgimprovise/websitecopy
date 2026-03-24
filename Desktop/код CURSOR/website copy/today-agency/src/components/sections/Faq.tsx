import { FAQ_ITEMS } from "@/lib/constants";
import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";

export function Faq() {
  return (
    <Section id="faq" bg="gray" paddingClassName="pt-[30px] pb-[45px]">
      <Reveal as="div">
        <h2 className="mb-4">
          <SectionLabel className="font-[500]">faq</SectionLabel>
        </h2>
      </Reveal>
      <div className="space-y-5">
        {FAQ_ITEMS.map((item, i) => (
          <Reveal key={item.q} as="div" delayMs={i * 80}>
            <div className="border-t border-brand-dark/20 pt-4">
              <h3 className="text-[20px] font-[300] leading-[1.15] text-brand-dark">
                {item.q}
              </h3>
              <p className="mt-3 max-w-[920px] text-[15px] leading-[1.45] text-brand-dark/80">
                {item.a}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

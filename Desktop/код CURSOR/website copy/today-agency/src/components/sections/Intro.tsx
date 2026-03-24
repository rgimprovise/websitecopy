import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { INTRO_CONTENT } from "@/lib/constants";

export function Intro() {
  return (
    <Section bg="gray" paddingClassName="pt-[30px] pb-[30px]">
      <Reveal as="div">
        <h2 className="mb-4">
          <SectionLabel className="font-[500]">{INTRO_CONTENT.title}</SectionLabel>
        </h2>
        <span className="block max-w-[980px] font-[300] leading-[0.92] text-[26px] min-[900px]:text-[44px]">
          {INTRO_CONTENT.statement}
        </span>
      </Reveal>
      <Reveal as="p" delayMs={120} className="mt-8 max-w-[980px] text-[15px] leading-[1.45] text-brand-dark/80 sm:text-[18px]">
        {INTRO_CONTENT.details}
      </Reveal>
    </Section>
  );
}

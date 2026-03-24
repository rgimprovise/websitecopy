import { EFFECT_BULLETS, PROBLEM_BULLETS, SOLUTION_TEXT } from "@/lib/constants";
import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";

export function ProblemSolution() {
  return (
    <Section bg="gray" paddingClassName="pt-[30px] pb-[30px]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">проблема</SectionLabel>
          </h2>
          <p className="max-w-[560px] text-[16px] leading-[1.45] text-brand-dark/85">
            данные есть, сотрудники есть, реклама есть, инструкции есть — а целостной
            системы нет.
          </p>
          <ul className="mt-6 space-y-3">
            {PROBLEM_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.4] text-brand-dark/80">
                <span aria-hidden="true" className="mt-[6px] block h-[4px] w-[4px] bg-brand-dark" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delayMs={120}>
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">решение</SectionLabel>
          </h2>
          <div className="space-y-4">
            {SOLUTION_TEXT.map((item) => (
              <p key={item} className="text-[15px] leading-[1.45] text-brand-dark/85">
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">интеграции и автоматизация</SectionLabel>
          </h2>
          <p className="max-w-[560px] text-[15px] leading-[1.45] text-brand-dark/85">
            там, где это уместно, используем собственные и интегрированные решения для
            более удобной работы с обучением, аналитикой, продажами и внутренними
            процессами. инструмент для нас не самоцель — важно, чтобы им реально
            пользовалась команда.
          </p>
        </Reveal>

        <Reveal as="div" delayMs={120}>
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">эффект для бизнеса</SectionLabel>
          </h2>
          <ul className="space-y-3">
            {EFFECT_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.4] text-brand-dark/80">
                <span aria-hidden="true" className="mt-[6px] block h-[4px] w-[4px] bg-brand-dark" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

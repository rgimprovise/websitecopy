import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { APPROACH_ITEMS } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function Approach() {
  const approachImages: Record<string, string> = {
    "01": "/images/tild6131-3734-4032-a636-333961343336__01.svg",
    "02": "/images/tild3930-3065-4439-a362-333036656438__02.svg",
    "03": "/images/tild3065-6364-4133-b439-356163376634__03.svg",
  };

  return (
    <>
      {/* Tilda record-type=248: [ наш подход ] + subtitle */}
      <Section
        bg="gray"
        paddingClassName="pt-[60px] pb-[15px] max-[480px]:pb-0"
      >
        <Reveal as="div">
          <h2 className="mb-4">
            <SectionLabel className="font-[500]">наш подход</SectionLabel>
          </h2>
          <p className="max-w-3xl font-[300] leading-[0.88] text-[32px] min-[900px]:text-[64px]">
            как мы достигаем результатов.
          </p>
        </Reveal>
      </Section>

      {/* Tilda record-type=513: timeline + methodology cards */}
      <Section id="approach" bg="gray" paddingClassName="pt-0 pb-[90px]">
        <Reveal as="div" delayMs={160}>
          <div className="border-t border-brand-dark/10">
            {APPROACH_ITEMS.map((item) => (
              <div
                key={item.number}
                className={[
                  "border-b border-brand-dark/10",
                  item.number === "03" ? "border-b-0" : "",
                  "py-10 md:py-12",
                ].join(" ")}
              >
                <div className="grid grid-cols-12 gap-x-8 gap-y-8 md:gap-x-10 lg:gap-x-14">
                  <div className="col-span-12 md:col-span-4">
                    <SectionLabel className="font-[500]">
                      {item.number}
                    </SectionLabel>

                    <h3 className="mt-3 max-w-[320px] text-[24px] font-[300] leading-[1.08] min-[900px]:text-[28px]">
                      {item.title}
                    </h3>

                    {approachImages[item.number] && (
                      <img
                        src={approachImages[item.number]}
                        alt=""
                        aria-hidden="true"
                        className="mt-10 h-auto w-[190px] max-w-full"
                      />
                    )}
                  </div>

                  <div className="col-span-12 md:col-span-8">
                    <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 lg:gap-x-10">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[12px] leading-[1.35] text-brand-dark/80"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[6px] block h-[4px] w-[4px] bg-brand-dark"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

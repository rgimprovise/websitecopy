import { Reveal } from "../ui/Reveal";

export function Hero() {
  return (
    <section
      className={[
        "relative overflow-hidden bg-brand-blue",
        "h-[860px]",
        "max-[959px]:h-[660px]",
        "max-[639px]:h-[540px]",
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/video/MAIN7s.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            className="flex flex-col items-start"
            style={{ fontSize: "18px", lineHeight: "30px" }}
          >
            <Reveal as="h1" className="w-full max-w-[980px] text-left">
              <span className="block text-[clamp(40px,7.5vw,96px)] font-[400] leading-[0.96] tracking-[-0.04em] text-white">
                растим показатели в&nbsp;маркетинге и&nbsp;продажах.
              </span>
            </Reveal>

            <Reveal delayMs={150} as="div" className="mt-10">
              <a
                href="https://t.me/shigabetdinov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-light text-brand-blue sm:px-7 sm:py-4"
              >
                <img
                  src="/images/tild3036-6466-4534-b034-363463323036__icon_tg_blue.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                обсудить проект.
              </a>
            </Reveal>
          </div>
        </div>

        {/* Original divider asset: full-width and flush under content */}
        <div className="absolute bottom-0 left-0 h-[139px] w-full shrink-0 overflow-hidden bg-brand-blue">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-divider.png')" }}
          />
        </div>
      </div>
    </section>
  );
}

import { OrganicDecor, BlobAccent } from "./organic-decor";
import { WhatsAppButton } from "./whatsapp-button";
import { Reveal } from "./reveal";
import { SparkleIcon, ScissorsIcon, HeartIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden paper-texture pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-24"
    >
      <OrganicDecor variant="trio" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <div className="lg:col-span-6 lg:pr-4">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-brand ring-1 ring-purple-brand/15 backdrop-blur">
              <SparkleIcon className="h-3.5 w-3.5 text-fuchsia-brand" />
              Clases personalizadas en Constitución
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-5 font-display text-[2.5rem] leading-[1.08] font-semibold text-foreground sm:text-6xl lg:text-[4.2rem]">
              Aprende a coser{" "}
              <span className="relative inline-block">
                <span className="italic text-fuchsia-brand">a tu ritmo,</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C40 3 120 3 198 7"
                    stroke="#ee6c2b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br className="hidden sm:block" />a tu manera.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              En Constitución, clases solo para ti. Uno a uno, a tu ritmo, con más de{" "}
              <strong className="font-semibold text-foreground">28 años de oficio</strong>.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-orange-brand/10 px-4 py-2 text-sm font-semibold text-orange-brand ring-1 ring-orange-brand/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-brand opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-brand" />
              </span>
              Cupos limitados · máximo 15 horas de clases a la semana
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg">
                Escríbeme por WhatsApp
              </WhatsAppButton>
              <a
                href="#clases"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-fuchsia-brand"
              >
                Mira cómo funcionan
                <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden />
              Te respondo yo misma · Sin compromiso
            </p>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Profesional en Vestuario</span>
              <span className="h-1 w-1 rounded-full bg-fuchsia-brand" />
              <span>+28 años de experiencia</span>
              <span className="h-1 w-1 rounded-full bg-turquoise-brand" />
              <span>Constitución</span>
            </div>
          </Reveal>
        </div>

        {/* Image column */}
        <div className="relative lg:col-span-6">
          <Reveal delay={2}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative ring blobs behind */}
              <BlobAccent
                color="fuchsia"
                className="h-72 w-72 -top-6 -left-6"
              />
              <BlobAccent
                color="turquoise"
                className="h-64 w-64 -bottom-8 -right-6"
              />

              {/* Main hero image in organic blob mask — original illustration */}
              <div className="relative">
                <div className="overflow-hidden blob-mask-1 shadow-2xl shadow-purple-brand/20 ring-1 ring-white/40">
                  <img
                    src="/images/woman-fashion-1.png"
                    alt="Ilustración a mano alzada de mujer con cinta de medir, clases de costura personalizadas en Constitución"
                    className="h-full w-full object-cover aspect-[4/5] sm:aspect-[5/6]"
                    loading="eager"
                    width={768}
                    height={1344}
                  />
                </div>

                {/* Complement: real photo of Mony, overlapping bottom-right corner */}
                <div className="absolute -bottom-6 -right-4 w-28 overflow-hidden blob-mask-3 shadow-xl ring-2 ring-white/70 sm:-right-6 sm:w-36 lg:w-44 animate-float-slower">
                  <img
                    src="/images/photos/mony-portrait-1.jpg"
                    alt="Mony, profesora de costura, en su taller en Constitución"
                    className="h-full w-full object-cover aspect-[3/4]"
                    loading="eager"
                    width={440}
                    height={587}
                  />
                </div>

                {/* Floating credential chips */}
                <div className="absolute -left-3 top-10 rotate-[-6deg] rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-left-6 animate-float-slow">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-brand/10 text-fuchsia-brand">
                      <HeartIcon className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-base font-bold text-foreground">+28 años</p>
                      <p className="text-[0.7rem] text-muted-foreground">de experiencia</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 bottom-16 rotate-[5deg] rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-right-5 animate-float-slower">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-turquoise-brand/10 text-turquoise-brand">
                      <ScissorsIcon className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-base font-bold text-foreground">1 a 1</p>
                      <p className="text-[0.7rem] text-muted-foreground">clases individuales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Wave transition */}
      <div className="pointer-events-none absolute -bottom-1 inset-x-0" aria-hidden>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="h-[60px] w-full sm:h-[90px]"
        >
          <path
            d="M0 60C180 110 360 110 540 80C720 50 900 -10 1080 10C1260 30 1380 70 1440 80V120H0V60Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

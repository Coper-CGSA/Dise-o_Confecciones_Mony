import { Reveal } from "./reveal";
import { SITE } from "@/lib/site-data";

/**
 * Full-width banner that sits between the fixed nav and the hero.
 *
 * Two-column layout on lg+: text on the left ("Coser es un oficio que se
 * aprende de cerca, mano a mano.") and the fashion illustration on the right,
 * masked with an organic blob shape that matches the rest of the site.
 *
 * On mobile: stacks vertically with the illustration on top.
 *
 * The fashion illustration was retouched to remove the original "CONFECCIONES
 * mony" circle in the bottom-right and to harmonize with the brand palette
 * (warm color balance + duotone + cream wash).
 */
export function PhotoHeader() {
  return (
    <section
      aria-label="Bienvenida"
      className="relative isolate -mt-px overflow-hidden bg-gradient-to-br from-cream-brand via-background to-secondary/40"
    >
      {/* Subtle fuchsia/turquoise tint stripes for brand cohesion */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-50 bg-[linear-gradient(110deg,rgba(224,33,138,0.10)_0%,transparent_45%,rgba(0,167,181,0.10)_100%)]"
      />
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-turquoise-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-brand ring-1 ring-purple-brand/20 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-brand" />
                {SITE.brandFull} · {SITE.city}
              </span>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-5 font-display text-[2rem] font-semibold leading-[1.12] text-foreground sm:text-4xl lg:text-[2.8rem] text-balance">
                Coser es un oficio que se aprende{" "}
                <span className="italic text-fuchsia-brand">de cerca, mano a mano.</span>
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 text-pretty sm:text-lg">
                Clases personalizadas en Constitución. Más de 28 años enseñando
                este oficio, una alumna a la vez.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Profesional en Vestuario</span>
                <span className="h-1 w-1 rounded-full bg-fuchsia-brand" />
                <span>+28 años</span>
                <span className="h-1 w-1 rounded-full bg-turquoise-brand" />
                <span>{SITE.city}</span>
              </div>
            </Reveal>
          </div>

          {/* Image column — fashion illustration */}
          <div className="lg:col-span-5">
            <Reveal delay={2}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Decorative blobs behind the image */}
                <div
                  aria-hidden
                  className="absolute -top-6 -left-6 h-44 w-44 rounded-full bg-fuchsia-brand/20 blur-2xl"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-6 -right-6 h-44 w-44 rounded-full bg-turquoise-brand/20 blur-2xl"
                />

                {/* Fashion illustration in organic blob mask */}
                <div className="relative">
                  <div className="overflow-hidden blob-mask-1 shadow-2xl shadow-purple-brand/25 ring-2 ring-white/60">
                    <img
                      src="/images/photos/mony-fashion-full.jpg"
                      alt="Ilustración fashion de mujer elegante con bolso rojo y café, estilo Confecciones Mony"
                      className="h-full w-full object-cover aspect-[4/5] sm:aspect-[5/5]"
                      loading="eager"
                      width={768}
                      height={960}
                    />
                  </div>

                  {/* Floating credential chip — founder name */}
                  <div className="absolute -bottom-4 left-4 rotate-[-3deg] rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:left-6">
                    <p className="font-script text-lg leading-none text-fuchsia-brand">Mónica</p>
                    <p className="mt-1 text-[0.65rem] font-sans font-semibold uppercase tracking-[0.18em] text-purple-brand">
                      Aguayo Varas
                    </p>
                  </div>

                  {/* Floating credential chip — 1 a 1 */}
                  <div className="absolute -top-3 right-3 rotate-[5deg] rounded-2xl bg-white/95 px-3.5 py-2 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-top-4 sm:right-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-turquoise-brand/15 text-turquoise-brand">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs font-bold text-foreground">1 a 1</p>
                        <p className="text-[0.65rem] text-muted-foreground">clases solo para ti</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Soft wave transition into Hero */}
      <div className="pointer-events-none absolute -bottom-1 inset-x-0" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="h-[40px] w-full sm:h-[60px]"
        >
          <path
            d="M0 40C240 70 480 70 720 50C960 30 1200 10 1440 30V80H0V40Z"
            fill="#fdf8f0"
          />
        </svg>
      </div>
    </section>
  );
}

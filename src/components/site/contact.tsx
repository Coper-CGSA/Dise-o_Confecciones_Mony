import { Reveal } from "./reveal";
import { WhatsAppButton } from "./whatsapp-button";
import { SITE, waLink, SOCIAL_PROOF, ACHIEVEMENTS } from "@/lib/site-data";
import { BlobAccent } from "./organic-decor";
import { FacebookIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "./icons";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background — retouched human photo + cream overlay for brand cohesion */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/images/photos/mony-scene-2.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/95" />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-soft-light opacity-40 bg-[linear-gradient(135deg,rgba(224,33,138,0.25)_0%,transparent_50%,rgba(0,167,181,0.25)_100%)]"
        />
      </div>

      <BlobAccent color="fuchsia" className="h-72 w-72 -top-16 -left-16 opacity-70" />
      <BlobAccent color="orange" className="h-72 w-72 -bottom-16 -right-16 opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Two-column layout: contact (left) + what you'll achieve (right) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Contact & CTA */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-brand ring-1 ring-fuchsia-brand/15 backdrop-blur">
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Contacto
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Cuéntame{" "}
                <span className="italic text-fuchsia-brand">qué quieres aprender</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Un solo camino: escríbeme por WhatsApp y coordinamos tu primera clase. Sin
                compromisos, primero conversamos.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8 flex flex-col items-start gap-4">
                <WhatsAppButton
                  size="lg"
                  className="px-10 py-5 text-lg"
                  message="¡Hola Mony! Quiero coordinar mi primera clase de costura (la clase de diagnóstico). ¿Qué disponibilidad tienes esta semana?"
                >
                  Coordinar mi primera clase
                </WhatsAppButton>
                <p className="text-sm font-medium text-foreground/70">
                  {SITE.whatsappNumber}
                </p>
              </div>
            </Reveal>

            {/* Secondary channels — organic pills, not cards */}
            <Reveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-border backdrop-blur transition-all hover:-translate-y-0.5 hover:text-turquoise-brand hover:ring-turquoise-brand/40"
                >
                  <MailIcon className="h-4 w-4 text-turquoise-brand" />
                  {SITE.email}
                </a>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-border backdrop-blur transition-all hover:-translate-y-0.5 hover:text-purple-brand hover:ring-purple-brand/40"
                >
                  <FacebookIcon className="h-4 w-4 text-purple-brand" />
                  {SITE.facebookLabel}
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-semibold text-foreground ring-1 ring-border backdrop-blur transition-all hover:-translate-y-0.5 hover:text-fuchsia-brand hover:ring-fuchsia-brand/40"
                >
                  <WhatsAppIcon className="h-4 w-4 text-fuchsia-brand" />
                  {SITE.whatsappNumber}
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — What you'll be able to do with your hands */}
          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Lo que vas a poder hacer{" "}
                <span className="italic text-turquoise-brand">con tus manos</span>
              </h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                No es solo aprender costura — es soltarte con la máquina y confeccionar lo
                que se te ocurra, partiendo desde donde estés hoy.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <ul className="mt-6 flex flex-col gap-1">
                {ACHIEVEMENTS.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-baseline gap-4 border-b border-dashed border-orange-brand/25 py-3 transition-colors hover:bg-white/40"
                  >
                    <span className="font-display text-base font-bold text-fuchsia-brand/70 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-foreground transition-transform group-hover:translate-x-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Diagnosis reinforcement — connects with the classes section */}
            <Reveal delay={3}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
                Y empezamos con un{" "}
                <strong className="font-semibold text-foreground">
                  diagnóstico personalizado en tu primera clase
                </strong>
                , donde armamos juntas un plan a tu medida.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Honest social proof — organic stats, no fabricated testimonials */}
        <Reveal delay={3}>
          <div className="mx-auto mt-16 flex max-w-md items-stretch justify-center gap-2 sm:gap-4">
            {SOCIAL_PROOF.map((s) => (
              <div key={s.label} className="flex-1 text-center">
                <p className="font-display text-3xl font-bold text-fuchsia-brand sm:text-4xl">
                  {s.stat}
                </p>
                <p className="mt-1 text-xs font-medium leading-tight text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Location & availability */}
        <Reveal delay={4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
              <MapPinIcon className="h-5 w-5 text-orange-brand" />
              {SITE.city}, {SITE.region}
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <p className="text-sm text-muted-foreground">
              Consulta disponibilidad por interno o WhatsApp
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
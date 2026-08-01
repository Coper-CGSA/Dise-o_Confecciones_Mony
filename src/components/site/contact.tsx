import { Reveal } from "./reveal";
import { WhatsAppButton } from "./whatsapp-button";
import { SITE, waLink, SOCIAL_PROOF } from "@/lib/site-data";
import { BlobAccent } from "./organic-decor";
import { FacebookIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "./icons";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Decorative watercolor background */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/images/decorative-blobs.png"
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      </div>

      <BlobAccent color="fuchsia" className="h-72 w-72 -top-16 -left-16 opacity-70" />
      <BlobAccent color="orange" className="h-72 w-72 -bottom-16 -right-16 opacity-70" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-brand ring-1 ring-fuchsia-brand/15 backdrop-blur">
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Contacto
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Cuéntame{" "}
            <span className="italic text-fuchsia-brand">qué quieres aprender</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Un solo camino: escríbeme por WhatsApp y coordinamos tu primera clase. Sin
            compromisos, primero conversamos.
          </p>
        </Reveal>

        {/* Honest social proof — organic stats, no fabricated testimonials */}
        <Reveal delay={3}>
          <div className="mx-auto mt-10 flex max-w-md items-stretch justify-center gap-2 sm:gap-4">
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

        <Reveal delay={4}>
          <div className="mt-10 flex flex-col items-center gap-4">
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
        <Reveal delay={5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

        {/* Location & availability */}
        <Reveal delay={6}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
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

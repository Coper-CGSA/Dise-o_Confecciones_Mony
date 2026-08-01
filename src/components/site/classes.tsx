import { Reveal } from "./reveal";
import { WhatsAppButton } from "./whatsapp-button";
import { CLASS_EXAMPLES, SITE } from "@/lib/site-data";
import { BlobAccent } from "./organic-decor";
import {
  ScissorsIcon,
  NeedleIcon,
  SparkleIcon,
  MapPinIcon,
} from "./icons";

const DETAILS = [
  {
    icon: MapPinIcon,
    color: "fuchsia",
    title: "Presencial, en Constitución",
    text: "En mi taller o a domicilio tuyo. Tú eliges.",
  },
  {
    icon: NeedleIcon,
    color: "turquoise",
    title: "Solo para ti",
    text: "Clases individuales de 1 o 2 horas. Varios días a la semana si quieres.",
  },
  {
    icon: SparkleIcon,
    color: "purple",
    title: "Yo pongo los materiales",
    text: "Tú solo trae las ganas. Yo me encargo del resto.",
  },
  {
    icon: ScissorsIcon,
    color: "orange",
    title: "La primera clase es para conocernos",
    text: "Vemos juntas tu nivel y armamos un plan a tu medida. No necesitas saber qué pedir.",
  },
] as const;

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  fuchsia: {
    bg: "bg-fuchsia-brand/10",
    text: "text-fuchsia-brand",
    ring: "ring-fuchsia-brand/20",
  },
  turquoise: {
    bg: "bg-turquoise-brand/10",
    text: "text-turquoise-brand",
    ring: "ring-turquoise-brand/20",
  },
  purple: {
    bg: "bg-purple-brand/10",
    text: "text-purple-brand",
    ring: "ring-purple-brand/20",
  },
  orange: {
    bg: "bg-orange-brand/10",
    text: "text-orange-brand",
    ring: "ring-orange-brand/20",
  },
};

export function Classes() {
  return (
    <section
      id="clases"
      className="relative overflow-hidden paper-texture pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <BlobAccent color="fuchsia" className="h-96 w-96 top-20 -left-32 opacity-50" />
      <BlobAccent color="turquoise" className="h-80 w-80 bottom-40 -right-24 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-brand">
              <ScissorsIcon className="h-3.5 w-3.5" />
              Las clases
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Todo se adapta a{" "}
              <span className="italic text-fuchsia-brand">lo que tú necesitas</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              No hay programa fijo. Da igual si nunca has cosido o si quieres perfeccionarte y
              emprender: conversamos y armamos juntas tu camino.
            </p>
          </Reveal>
        </div>

        {/* Big image banner — real photo of atelier for humanity */}
        <Reveal delay={1}>
          <figure className="relative mt-14">
            <div className="overflow-hidden blob-mask-3 shadow-2xl shadow-purple-brand/20 ring-1 ring-white/40">
              <img
                src="/images/real-atelier.jpg"
                alt="Costurera trabajando en máquina de coser en taller luminoso, clases de costura en Constitución"
                className="h-full w-full object-cover aspect-[16/9] sm:aspect-[2/1]"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            {/* Dark gradient overlay for caption legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
            />
            <figcaption className="pointer-events-none absolute inset-0 flex items-end justify-center p-6 sm:p-10">
              <p className="font-display text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-4xl text-center max-w-2xl">
                Clases 100% adaptadas a ti
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Class examples — flowing, not cards */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Algunos ejemplos de lo que puedes aprender
              </h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                Desde principiantes hasta avanzadas. Una lista abierta — si tienes otra idea, cuéntamela.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <ul className="flex flex-col gap-1">
                {CLASS_EXAMPLES.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-baseline gap-4 border-b border-dashed border-orange-brand/25 py-3.5 transition-colors hover:bg-white/40"
                  >
                    <span className="font-display text-lg font-bold text-fuchsia-brand/70 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium text-foreground transition-transform group-hover:translate-x-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Image triptych — illustration + real photo + illustration, aligned */}
        <Reveal>
          <div className="mt-16 grid grid-cols-2 items-start gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            <figure className="relative">
              <div className="overflow-hidden blob-mask-1 shadow-xl ring-1 ring-white/40">
                <img
                  src="/images/woman-fashion-3.png"
                  alt="Ilustración a mano alzada de alumna aprendiendo a coser en máquina, clases en Constitución"
                  className="h-full w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  width={768}
                  height={1344}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-purple-brand">
                Aprender, desde cero
              </figcaption>
            </figure>
            <figure className="relative">
              <div className="overflow-hidden blob-mask-2 shadow-xl ring-1 ring-white/40">
                <img
                  src="/images/real-hands-closeup.jpg"
                  alt="Manos cosiendo tela con aguja e hilo de cerca, detalle de costura personalizada en Constitución"
                  className="h-full w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  width={1600}
                  height={1000}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-turquoise-brand">
                Mano a mano con cada detalle
              </figcaption>
            </figure>
            <figure className="relative col-span-2 lg:col-span-1">
              <div className="overflow-hidden blob-mask-3 shadow-xl ring-1 ring-white/40">
                <img
                  src="/images/woman-fashion-2.png"
                  alt="Ilustración a mano alzada de profesora de costura enseñando, clases personalizadas en Constitución"
                  className="h-full w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  width={864}
                  height={1152}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-orange-brand">
                Cerca de ti, siempre
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* How classes work — flowing editorial blocks, no cards */}
        <div className="mt-24">
          <Reveal>
            <h3 className="text-center font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Cómo funcionan las clases
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-x-16">
            {DETAILS.map((d, i) => {
              const c = colorMap[d.color];
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={i}>
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.text} ring-1 ${c.ring}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {d.title}
                      </h4>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground text-pretty">
                        {d.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Highlighted callout — no machine needed */}
          <Reveal delay={2}>
            <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-turquoise-brand to-purple-brand p-8 text-white shadow-xl sm:p-12">
              <div className="absolute -right-8 -top-8 h-40 w-40 blob-mask-2 bg-white/15 blur-2xl" />
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <ScissorsIcon className="h-8 w-8" />
                </span>
                <div className="flex-1">
                  <h4 className="font-display text-2xl font-semibold sm:text-3xl">
                    ¿No tienes máquina de coser? No hay problema.
                  </h4>
                  <p className="mt-2 text-white/90 leading-relaxed text-pretty">
                    Es la duda que más frena al partir. Si tienes máquina, tráela; y si no,{" "}
                    <strong className="font-semibold text-white">yo la facilito</strong>. Lo
                    importante es empezar.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Logistics: prices, location, schedule */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          <Reveal>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-brand">
                Valores
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                A conversar
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Se definen según lo que necesites.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turquoise-brand">
                Dónde
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                {SITE.city}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                En mi taller o a domicilio.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-brand">
                Cuándo
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                A coordinar
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Consulta disponibilidad por WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <WhatsAppButton
              size="lg"
              message="¡Hola Mony! Quiero coordinar mi primera clase de costura (la clase de diagnóstico). ¿Qué disponibilidad tienes esta semana?"
            >
              Coordinar mi primera clase
            </WhatsAppButton>
            <p className="text-sm text-muted-foreground">
              Cupos limitados · máximo 15 horas de clases a la semana
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

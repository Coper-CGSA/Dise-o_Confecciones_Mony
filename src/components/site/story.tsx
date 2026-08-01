import { Reveal } from "./reveal";
import { CREDENTIALS, SITE } from "@/lib/site-data";
import { BlobAccent } from "./organic-decor";
import { SparkleIcon } from "./icons";

export function Story() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-white pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      <BlobAccent
        color="purple"
        className="h-80 w-80 -top-20 -right-24 opacity-60"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image — real photo of hands stitching for humanity */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden blob-mask-2 shadow-2xl shadow-orange-brand/15 ring-1 ring-white/40">
              <img
                src="/images/real-hands-stitching.jpg"
                alt="Manos cosiendo a mano con aguja e hilo en clases de costura en Constitución"
                className="h-full w-full object-cover aspect-square"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            {/* signature tag */}
            <div className="absolute -bottom-5 left-6 rotate-[-3deg] rounded-full bg-fuchsia-brand px-5 py-2.5 text-white shadow-xl">
              <p className="font-script text-2xl leading-none">Mony</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-brand">
              <SparkleIcon className="h-3.5 w-3.5" />
              Mi historia
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Empecé como tú,{" "}
              <span className="italic text-turquoise-brand">con ganas de aprender</span>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                Desde chica empecé <strong className="font-semibold text-foreground">confeccionando mi propia ropa</strong>.
                Me gustó tanto que decidí estudiar esto: me fui a Santiago, me titulé con
                máxima excelencia y volví con una idea fija: enseñar.
              </p>
              <p>
                Fui profesora jefe de vestuario en el{" "}
                <strong className="font-semibold text-foreground">Instituto Politécnico</strong>,
                di cursos por todo el país y diseñé para desfiles. Hoy hago lo que más me gusta:
                enseñar de cerca, una a una.
              </p>
            </div>
          </Reveal>

          {/* Credentials as flowing organic badges — no cards */}
          <Reveal delay={3}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {CREDENTIALS.map((c) => (
                <li
                  key={c.title}
                  className="group inline-flex items-center gap-2 rounded-full bg-cream-brand px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-orange-brand/15 transition-colors hover:bg-fuchsia-brand hover:text-white hover:ring-fuchsia-brand"
                  title={c.detail}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-brand transition-colors group-hover:bg-white" />
                  {c.title}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={4}>
            <p className="mt-6 font-display text-xl italic text-purple-brand">
              &ldquo;Enseño de cerca, a tu ritmo y al de cada persona.&rdquo;
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              — {SITE.brandShort}, {SITE.professionShort.toLowerCase()} en {SITE.city}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

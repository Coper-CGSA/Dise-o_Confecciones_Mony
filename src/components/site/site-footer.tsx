import { BrandLogo } from "./brand-logo";
import { SITE, waLink } from "@/lib/site-data";
import { FacebookIcon, MailIcon, WhatsAppIcon } from "./icons";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clases", label: "Clases" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 pb-24 sm:px-6 sm:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <BrandLogo size="md" variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Clases de costura personalizadas en {SITE.city}. Más de 28 años de experiencia
              enseñando a tu ritmo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm font-medium text-background/80 transition-colors hover:text-fuchsia-brand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-fuchsia-brand"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  {SITE.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-turquoise-brand"
                >
                  <MailIcon className="h-4 w-4 text-turquoise-brand" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-background/80 transition-colors hover:text-purple-brand"
                >
                  <FacebookIcon className="h-4 w-4 text-purple-brand" />
                  {SITE.facebookLabel}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm font-medium text-background/80">
                <span className="text-orange-brand">●</span>
                {SITE.city}, {SITE.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-background/60">
            © {year} {SITE.brandFull}. Todos los derechos reservados.
          </p>
          <p className="font-script text-lg text-fuchsia-brand">
            Hecho con cariño en {SITE.city}
          </p>
        </div>
      </div>
    </footer>
  );
}

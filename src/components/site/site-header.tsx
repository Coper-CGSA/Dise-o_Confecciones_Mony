"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { WhatsAppButton } from "./whatsapp-button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clases", label: "Clases" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Notify other components (e.g. floating WhatsApp button) of menu state
    window.dispatchEvent(
      new CustomEvent("mony:menu-toggle", { detail: { open } })
    );
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_8px_30px_rgba(62,39,35,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#inicio"
          aria-label="Confecciones Mony — inicio"
          className="shrink-0"
        >
          <BrandLogo size="md" showLockup />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-foreground/80 transition-colors hover:text-fuchsia-brand"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-fuchsia-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="px-5 py-2.5 text-sm">
            WhatsApp
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground ring-1 ring-border bg-white/70 backdrop-blur md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out bg-background/95 backdrop-blur-md",
          open ? "max-h-96 opacity-100 border-t border-border" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground/85 transition-colors hover:bg-secondary hover:text-fuchsia-brand"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton
            className="mt-2 w-full"
            message="¡Hola Mony! Vi tu sitio y quiero información sobre las clases de costura."
          >
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { waLink, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp button — always visible while navigating the site.
 * Appears after a small scroll for a cleaner hero, pulses gently.
 * Hides when the mobile menu is open to avoid double-CTA overlap.
 */
export function WhatsAppFloat() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMenu = (e: Event) => {
      const detail = (e as CustomEvent<{ open: boolean }>).detail;
      if (detail) setMenuOpen(detail.open);
    };
    window.addEventListener("mony:menu-toggle", onMenu as EventListener);
    return () =>
      window.removeEventListener("mony:menu-toggle", onMenu as EventListener);
  }, []);

  const visible = scrolled && !menuOpen;

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbeme por WhatsApp al ${SITE.whatsappNumber}`}
      className={cn(
        "group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500",
        "right-5 sm:right-6",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      )}
    >
      <span className="hidden sm:inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-lg ring-1 ring-black/5 transition-transform group-hover:scale-105">
        ¿Hablamos? 👋
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-white/60 animate-wa-pulse transition-transform group-hover:scale-110">
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden
        >
          <path d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 2.05.54 4.05 1.57 5.81L4.5 28l7.3-1.91a11.06 11.06 0 0 0 4.24.84h.01c6.11 0 11.06-4.95 11.06-11.06 0-2.95-1.15-5.73-3.24-7.82A10.98 10.98 0 0 0 16.04 4zm0 20.13h-.01c-1.35 0-2.67-.36-3.82-1.04l-.27-.16-4.33 1.13 1.16-4.22-.18-.28a9.04 9.04 0 0 1-1.39-4.83c0-5 4.07-9.07 9.07-9.07 2.42 0 4.7.94 6.41 2.66a9 9 0 0 1 2.65 6.41c0 5-4.07 9.07-9.07 9.07zm4.97-6.78c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
        </svg>
      </span>
    </a>
  );
}

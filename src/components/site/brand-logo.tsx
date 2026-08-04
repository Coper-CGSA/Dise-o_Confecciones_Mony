import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  /** size of the logo lockup */
  size?: "sm" | "md" | "lg";
  /** text color theme */
  variant?: "default" | "light";
  showTagline?: boolean;
  /** show the woman illustration next to the wordmark (proper logo lockup) */
  showLockup?: boolean;
}

const sizeMap = {
  sm: {
    confecciones: "text-[0.6rem]",
    mony: "text-2xl",
    tag: "text-[0.6rem]",
    // Woman illustration height — matches the visual height of the wordmark
    womanHeight: "h-9",
    // Gap between woman and wordmark
    gap: "gap-2",
    // Padding inside the lockup "pill"
    pad: "px-2.5 py-1",
  },
  md: {
    confecciones: "text-xs",
    mony: "text-3xl",
    tag: "text-[0.65rem]",
    womanHeight: "h-11",
    gap: "gap-2.5",
    pad: "px-3 py-1.5",
  },
  lg: {
    confecciones: "text-sm",
    mony: "text-5xl",
    tag: "text-xs",
    womanHeight: "h-16",
    gap: "gap-3.5",
    pad: "px-4 py-2",
  },
} as const;

/**
 * Brand logo for Confecciones Mony.
 *
 * Two modes:
 *  - `showLockup` (default for header): displays a proper logo lockup with
 *    the woman illustration on the left + the "CONFECCIONES Mony" wordmark
 *    on the right. The illustration is a transparent PNG extracted from the
 *    original brand sticker, sized to match the wordmark's visual height.
 *    The whole lockup sits inside a soft cream pill with a hairline border,
 *    so it reads as a designed brand mark — not a sticker slapped on a page.
 *  - Wordmark-only mode: just "CONFECCIONES" + "Mony" script text — used in
 *    places where a horizontal lockup doesn't fit (footer stacks, etc).
 */
export function BrandLogo({
  className,
  size = "md",
  variant = "default",
  showTagline = false,
  showLockup = false,
}: BrandLogoProps) {
  const s = sizeMap[size];
  const confeccionesColor =
    variant === "light" ? "text-white/80" : "text-purple-brand";
  const monyColor = variant === "light" ? "text-white" : "text-fuchsia-brand";
  const tagColor = variant === "light" ? "text-white/70" : "text-muted-foreground";

  if (showLockup) {
    // Header mode: the horizontal brand logo (woman + CONFECCIONES Mony text)
    // as a single transparent PNG. Source is foto 2 with cream background
    // removed and trimmed to content bounding box. Sized at h-12 (48px) —
    // matches typical header logo proportions, scales cleanly on retina.
    return (
      <span className={cn("inline-flex items-center", className)}>
        <img
          src="/images/brand-logo-header.png"
          alt="Confecciones Mony"
          className={cn(
            "w-auto h-12 sm:h-14 object-contain shrink-0 drop-shadow-sm",
            className
          )}
          loading="eager"
          width={170}
          height={64}
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-sans font-semibold uppercase tracking-[0.35em]",
          s.confecciones,
          confeccionesColor
        )}
      >
        Confecciones
      </span>
      <span
        className={cn(
          "font-script font-bold leading-[0.95] -mt-1",
          s.mony,
          monyColor
        )}
        style={{ textShadow: "0 1px 0 rgba(0,0,0,0.04)" }}
      >
        Mony
      </span>
      {showTagline && (
        <span
          className={cn(
            "font-sans uppercase tracking-[0.25em] mt-1",
            s.tag,
            tagColor
          )}
        >
          Clases de Costura
        </span>
      )}
    </span>
  );
}

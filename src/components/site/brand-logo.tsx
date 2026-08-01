import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  /** size of the wordmark */
  size?: "sm" | "md" | "lg";
  /** text color theme */
  variant?: "default" | "light";
  showTagline?: boolean;
}

const sizeMap = {
  sm: { confecciones: "text-[0.6rem]", mony: "text-2xl", tag: "text-[0.6rem]" },
  md: { confecciones: "text-xs", mony: "text-3xl", tag: "text-[0.65rem]" },
  lg: { confecciones: "text-sm", mony: "text-5xl", tag: "text-xs" },
} as const;

/**
 * Brand wordmark for Confecciones Mony.
 * Captures the logo essence: "CONFECCIONES" in spaced uppercase,
 * "Mony" in a handwritten-style script — used ONLY here per brand rules.
 * Original contact data from the source logo is intentionally omitted.
 */
export function BrandLogo({
  className,
  size = "md",
  variant = "default",
  showTagline = false,
}: BrandLogoProps) {
  const s = sizeMap[size];
  const confeccionesColor =
    variant === "light" ? "text-white/80" : "text-purple-brand";
  const monyColor = variant === "light" ? "text-white" : "text-fuchsia-brand";
  const tagColor = variant === "light" ? "text-white/70" : "text-muted-foreground";

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

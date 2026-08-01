import { cn } from "@/lib/utils";

/**
 * Soft organic color blobs for decorative backgrounds.
 * Uses brand palette at low opacity with blur for an artisanal, watercolor feel.
 */
interface OrganicDecorProps {
  className?: string;
  variant?: "trio" | "duo" | "single";
}

export function OrganicDecor({ className, variant = "trio" }: OrganicDecorProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -top-24 -left-16 h-72 w-72 blob-mask-1 bg-fuchsia-brand/25 blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 blob-mask-2 bg-turquoise-brand/25 blur-3xl animate-float-slow" />
      {variant !== "single" && (
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 blob-mask-3 bg-orange-brand/20 blur-3xl animate-float-slower" />
      )}
      {variant === "trio" && (
        <div className="absolute top-10 right-1/4 h-56 w-56 blob-mask-4 bg-purple-brand/20 blur-3xl animate-drift" />
      )}
    </div>
  );
}

/** A single static blob accent for subtle section transitions */
export function BlobAccent({
  className,
  color = "fuchsia",
}: {
  className?: string;
  color?: "fuchsia" | "turquoise" | "orange" | "purple" | "coral";
}) {
  const colorMap = {
    fuchsia: "bg-fuchsia-brand/30",
    turquoise: "bg-turquoise-brand/30",
    orange: "bg-orange-brand/30",
    purple: "bg-purple-brand/30",
    coral: "bg-coral-brand/30",
  };
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute blob-mask-1 blur-3xl",
        colorMap[color],
        className
      )}
    />
  );
}

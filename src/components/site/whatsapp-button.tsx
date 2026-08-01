import { waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

interface WhatsAppButtonProps {
  message?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "light";
  size?: "default" | "lg";
}

export function WhatsAppButton({
  message,
  children,
  className,
  variant = "primary",
  size = "default",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-brand/30 disabled:opacity-50 active:scale-[0.98]";
  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-fuchsia-brand text-white shadow-lg shadow-fuchsia-brand/25 hover:bg-[#c01474] hover:shadow-xl hover:shadow-fuchsia-brand/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-fuchsia-brand text-fuchsia-brand bg-transparent hover:bg-fuchsia-brand hover:text-white",
    light:
      "bg-white text-fuchsia-brand shadow-lg hover:bg-white/90 hover:-translate-y-0.5",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

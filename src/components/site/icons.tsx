import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 2.05.54 4.05 1.57 5.81L4.5 28l7.3-1.91a11.06 11.06 0 0 0 4.24.84h.01c6.11 0 11.06-4.95 11.06-11.06 0-2.95-1.15-5.73-3.24-7.82A10.98 10.98 0 0 0 16.04 4zm0 20.13h-.01c-1.35 0-2.67-.36-3.82-1.04l-.27-.16-4.33 1.13 1.16-4.22-.18-.28a9.04 9.04 0 0 1-1.39-4.83c0-5 4.07-9.07 9.07-9.07 2.42 0 4.7.94 6.41 2.66a9 9 0 0 1 2.65 6.41c0 5-4.07 9.07-9.07 9.07zm4.97-6.78c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M12 2c.3 4.5 2.5 6.7 7 7-4.5.3-6.7 2.5-7 7-.3-4.5-2.5-6.7-7-7 4.5-.3 6.7-2.5 7-7Z" />
    </svg>
  );
}

export function NeedleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M2 22 16 8" />
      <path d="M16 8a4 4 0 0 0 4-4 2 2 0 0 1 2-2" />
      <circle cx="16" cy="8" r="1.5" />
    </svg>
  );
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M12 21s-6.7-4.35-9.5-8.5C.5 9 2 5 5.5 5c2 0 3.5 1.5 4.5 3 1-1.5 2.5-3 4.5-3C18 5 19.5 9 17.5 12.5 14.7 16.65 12 21 12 21Z" />
    </svg>
  );
}

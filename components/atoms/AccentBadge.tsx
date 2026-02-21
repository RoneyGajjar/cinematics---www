import { cn } from "@/lib/utils";

interface AccentBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small accent-coloured bordered badge used for spec callouts.
 * e.g. "< 20 dB at full speed"
 */
export default function AccentBadge({ children, className }: AccentBadgeProps) {
  return (
    <span
      className={cn(
        "font-sans text-[0.55rem] tracking-[0.18em] uppercase",
        "text-accent border border-accent-border px-3 py-1 inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}

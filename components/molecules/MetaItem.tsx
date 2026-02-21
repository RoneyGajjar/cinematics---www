import { cn } from "@/lib/utils";

interface MetaItemProps {
  label: string;
  value: string;
  className?: string;
}

/**
 * Label / value pair with top border divider.
 * Used in mission statement sidebar, footer about block, etc.
 */
export default function MetaItem({ label, value, className }: MetaItemProps) {
  return (
    <div
      className={cn(
        "border-t border-border pt-4",
        className
      )}
    >
      <p className="font-sans text-[0.52rem] tracking-[0.22em] uppercase text-fg-faint mb-1">
        {label}
      </p>
      <p className="font-sans text-[0.78rem] tracking-[0.02em] text-fg-muted">
        {value}
      </p>
    </div>
  );
}

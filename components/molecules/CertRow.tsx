import { cn } from "@/lib/utils";

interface CertRowProps {
  year: string;
  title: string;
  body: string;
  detail: string;
  className?: string;
}

/**
 * Single certification row in the Recognition table.
 */
export default function CertRow({ year, title, body, detail, className }: CertRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[60px_1fr_1fr] items-center gap-4 py-5 border-b border-border-faint",
        className
      )}
    >
      {/* Year */}
      <p className="font-sans text-[0.7rem] tracking-[0.05em] text-fg-faint">
        {year}
      </p>

      {/* Title + body */}
      <div>
        <p className="font-sans font-medium text-[0.78rem] tracking-[0.04em] text-fg-muted mb-0.5">
          {title}
        </p>
        <p className="font-sans text-[0.62rem] tracking-[0.06em] uppercase text-fg-faint">
          {body}
        </p>
      </div>

      {/* Detail */}
      <p className="font-sans text-[0.62rem] tracking-[0.04em] text-fg-faint">
        {detail}
      </p>
    </div>
  );
}

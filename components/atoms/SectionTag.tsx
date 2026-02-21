import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small bracketed uppercase label used at the top of every section.
 * e.g. [Our Mission]
 */
export default function SectionTag({ children, className }: SectionTagProps) {
  return (
    <p
      className={cn(
        "font-sans text-[0.6rem] tracking-[0.28em] uppercase text-accent mb-6",
        className
      )}
    >
      {children}
    </p>
  );
}

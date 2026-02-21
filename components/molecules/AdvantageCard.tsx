import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";

interface AdvantageCardProps {
  tag: string;
  title: string;
  desc: string;
  className?: string;
}

/**
 * Single advantage card in the "Why EGC" section.
 * bg-bg-subtle fills the grid cell so gap-px bg-border creates visible dividers.
 */
export default function AdvantageCard({
  tag,
  title,
  desc,
  className,
}: AdvantageCardProps) {
  return (
    <div className={cn("bg-bg-subtle px-site py-10 md:py-14", className)}>
      <p className="font-sans text-[0.55rem] tracking-[0.20em] text-accent mb-10">
        {tag}
      </p>
      <Typography variant="card-title-sm" as="h3" textColor="muted" className="mb-4">
        {title}
      </Typography>
      <p className="font-sans text-[0.70rem] text-fg-faint leading-[1.8]">
        {desc}
      </p>
    </div>
  );
}

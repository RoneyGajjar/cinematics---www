import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";

interface ProcessStepCardProps {
  num: string;
  title: string;
  desc: string;
  className?: string;
}

/**
 * Single numbered step card used in the Process section.
 * bg-bg-base fills the grid cell so gap-px bg-border creates visible dividers.
 */
export default function ProcessStepCard({
  num,
  title,
  desc,
  className,
}: ProcessStepCardProps) {
  return (
    <div className={cn("bg-bg-base px-site py-10 md:py-14", className)}>
      <p className="font-display text-[2.5rem] text-fg-ghost leading-none mb-8">
        {num}
      </p>
      <Typography variant="card-title" as="h3" textColor="muted" className="mb-4">
        {title}
      </Typography>
      <p className="font-sans text-[0.70rem] text-fg-faint leading-[1.8]">
        {desc}
      </p>
    </div>
  );
}

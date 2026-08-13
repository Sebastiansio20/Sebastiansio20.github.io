import { cn } from "@/lib/cn";

type EyebrowProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ index, children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-muted",
        className,
      )}
    >
      {index && <span className="text-accent">{index}</span>}
      <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

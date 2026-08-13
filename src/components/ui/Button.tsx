import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-accent text-background hover:bg-accent-bright"
          : "border border-line text-foreground hover:border-accent/60",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}

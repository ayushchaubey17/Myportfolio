import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-ink-950 font-medium hover:bg-accent-dim border border-accent",
  secondary:
    "border border-line-strong bg-ink-850/60 text-mist hover:border-accent/50 hover:text-accent",
  ghost:
    "border border-transparent text-mist-dim hover:text-mist hover:border-line-strong",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-sm",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizeClasses;
  external?: boolean;
  className?: string;
  download?: boolean;
  icon?: React.ReactNode;
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  size = "md",
  external,
  className,
  download,
  icon,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const isExternal = external ?? href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        download={download}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}

export function ExternalArrow({ className }: { className?: string }) {
  return (
    <ArrowUpRight
      className={cn("h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", className)}
      aria-hidden="true"
    />
  );
}

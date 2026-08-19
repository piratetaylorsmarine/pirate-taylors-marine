import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-500";

const variants: Record<Variant, string> = {
  primary: "bg-brass-500 text-navy-950 hover:bg-brass-400",
  secondary:
    "border border-cream-100/40 text-cream-100 hover:border-cream-100 hover:bg-cream-100/5",
  ghost: "text-navy-900 hover:text-teak-600",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}

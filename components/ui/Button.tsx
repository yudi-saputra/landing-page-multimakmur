import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "outlineLight";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "bg-primary-600 text-white shadow-md shadow-primary-600/25 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/40",
    secondary:
      "border border-neutral-200 text-primary-600 bg-white hover:border-primary-100 hover:bg-primary-50",
    white:
      "bg-white text-primary-700 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20",
    outlineLight:
      "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-600/10 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/0 to-sky-400/0 opacity-0 transition-opacity duration-300 group-hover:from-primary-50 group-hover:to-sky-400/5 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

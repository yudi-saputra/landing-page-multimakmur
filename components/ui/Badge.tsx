import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-500/10 px-3 py-1 text-sm font-medium text-accent-500">
      {children}
    </span>
  );
}

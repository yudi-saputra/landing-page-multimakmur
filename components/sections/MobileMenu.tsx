"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ctaHref, navLinks } from "@/lib/content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Tutup menu" : "Buka menu"}
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-50"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={`absolute inset-x-0 top-full origin-top border-b border-neutral-200 bg-white px-4 py-4 shadow-lg transition-all duration-200 ${
          open
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-sky-400 px-4 py-2.5 text-sm font-medium text-white shadow-md"
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </div>
  );
}

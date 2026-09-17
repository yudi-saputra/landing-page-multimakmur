import Link from "next/link";
import Image from "next/image";
import { ctaHref, navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/sections/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/logo-mark.svg"
            alt=""
            width={32}
            height={43}
            priority
            className="h-9 w-auto"
          />
          <span className="font-heading text-base font-bold text-neutral-900 md:text-lg">
            Multi Makmur Indonesia
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={ctaHref} className="px-4 py-2 text-sm">
            Hubungi Kami
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

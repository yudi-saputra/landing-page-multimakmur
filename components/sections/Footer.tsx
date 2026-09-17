import Link from "next/link";
import Image from "next/image";
import { company, navLinks, produk } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-white text-neutral-500">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="#" className="inline-flex items-center gap-3">
              <Image
                src="/logo-mark.svg"
                alt=""
                width={32}
                height={43}
                className="h-10 w-auto"
              />
              <span className="font-heading text-lg font-bold text-neutral-900">
                Multi Makmur Indonesia
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Agregator pulsa, paket data, voucher game, PPOB, dan e-wallet
              sejak {company.foundedYear}. Melayani mitra B2B, B2C, dan Partner
              H2H di seluruh Indonesia.
            </p>
          </div>

          <FooterColumn title="Navigasi" className="lg:col-span-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Produk" className="lg:col-span-3">
            {produk.map((item) => (
              <li key={item.title}>
                <Link href="#produk" className="transition-colors hover:text-primary-600">
                  {item.title}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs sm:flex-row">
          <p>
            © {company.foundedYear}–{new Date().getFullYear()} {company.name}.
            Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

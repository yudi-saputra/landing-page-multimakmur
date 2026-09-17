import { ArrowRight, BadgeCheck, ShieldCheck, Zap, Headset } from "lucide-react";
import { ctaHref } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const perks = [
  { icon: ShieldCheck, label: "Terpercaya sejak 2013" },
  { icon: Zap, label: "Transaksi real-time" },
  { icon: Headset, label: "Dukungan mitra" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="bg-grid-animated absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />
      <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary-100/60 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600">
              <BadgeCheck size={16} className="text-primary-600" />
              Agregator Digital Terpercaya
            </span>
          </div>

          <h1
            className="animate-fade-up font-heading text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Agregator Pulsa & PPOB
            <span className="block">
              untuk <span className="text-primary-600">Bisnis Anda</span>
            </span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-neutral-500 md:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Distribusi Pulsa, Paket Data, Voucher Game, dan layanan PPOB dengan
            sistem andal untuk mitra B2B, B2C, hingga H2H.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Button href={ctaHref} variant="primary">
              Hubungi Kami
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button href="#produk" variant="secondary">
              Lihat Produk
            </Button>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500"
            style={{ animationDelay: "400ms" }}
          >
            {perks.map((perk) => (
              <span key={perk.label} className="inline-flex items-center gap-2">
                <perk.icon size={16} className="text-primary-600" />
                {perk.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

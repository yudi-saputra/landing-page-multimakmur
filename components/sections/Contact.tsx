import { ArrowRight, ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { company, ctaHref } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: ctaHref,
    external: false,
  },
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: company.address,
    href: company.mapsUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin – Jumat, 09.00 – 17.00 WIB",
    href: null,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="kontak" className="relative scroll-mt-20 overflow-hidden bg-primary-700 py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-700 to-primary-600" />
      <div
        className="bg-grid-animated-dark absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
      />
      <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-sky-400/25 blur-[120px]" />
      <div className="absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary-500/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Kontak
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              Siap Bermitra
              <span className="block">
                dengan <span className="text-sky-300">Kami?</span>
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Baik Anda perusahaan, reseller, maupun platform yang butuh
              integrasi H2H, tim kami siap membantu menentukan skema yang
              paling sesuai.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={ctaHref} variant="white">
                Hubungi Kami
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button href="#cara-kerja" variant="outlineLight">
                Lihat Cara Kerja
              </Button>
            </div>
          </Reveal>

          <div className="space-y-4">
            {contactItems.map((item, index) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary-600">
                    <item.icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white md:text-base">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={18}
                      className="flex-shrink-0 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  )}
                </>
              );

              const cardClass =
                "group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-300";

              return (
                <Reveal key={item.label} delay={index * 100}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`${cardClass} hover:-translate-y-1 hover:border-white/30 hover:bg-white/15`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { produk } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon, type IconName } from "@/lib/icons";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

export function Produk() {
  return (
    <section id="produk" className="relative scroll-mt-20 bg-white pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Produk & Layanan"
          title="Semua Kebutuhan Digital dalam Satu Sistem"
          description="Layanan lengkap untuk kebutuhan digital Anda, mulai dari pulsa hingga PPOB."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produk.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Card className="h-full">
                <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-primary-600 to-sky-400 p-3 shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon
                    name={item.icon as IconName}
                    className="text-white"
                    size={24}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={200}>
          <LogoMarquee theme="light" />
        </Reveal>
      </div>
    </section>
  );
}

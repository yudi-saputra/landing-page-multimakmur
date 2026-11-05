import { ArrowUpRight } from "lucide-react";
import { businessUnits, ctaHref } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon, type IconName } from "@/lib/icons";

export function UnitUsaha() {
  return (
    <section id="unit-usaha" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Unit Usaha"
          title="Solusi untuk Setiap Segmen Bisnis"
          description="Melayani berbagai segmen bisnis dengan solusi yang disesuaikan."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {businessUnits.map((unit, index) => (
            <Reveal key={unit.title} delay={index * 120}>
              <a
                href={ctaHref}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-600/10"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-primary-600 to-sky-400 p-3 shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon
                      name={unit.icon as IconName}
                      className="text-white"
                      size={26}
                    />
                  </div>
                  <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {unit.subtitle}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-neutral-900">
                  {unit.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
                  {unit.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 border-t border-neutral-100 pt-5 text-sm font-semibold text-primary-600 transition-colors duration-300 group-hover:text-primary-700">
                  {unit.ctaLabel}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
import { company, whyUs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/lib/icons";

export function TentangKami() {
  return (
    <section
      id="tentang"
      className="scroll-mt-20 bg-dots relative overflow-hidden bg-neutral-50 py-16 md:py-24"
    >
      <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
              Tentang Kami
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Lebih dari Satu Dekade{" "}
              <span className="text-gradient">Melayani Mitra</span> di
              Seluruh Indonesia
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">
              {company.name} berdiri sejak {company.foundedYear}, bergerak di
              bidang telekomunikasi sebagai agregator pulsa, paket data, dan
              PPOB. Selama lebih dari satu dekade, kami melayani ribuan mitra
              di seluruh Indonesia.
            </p>

            <ul className="mt-6 space-y-3">
              {["Pulsa & Paket Data", "Voucher Game", "PPOB", "E-Wallet & Transfer"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-neutral-700"
                  >
                    <CheckCircle2 size={18} className="text-success-500" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-600/10">
                  <div className="mb-4 inline-flex rounded-xl bg-accent-500/10 p-3 transition-colors duration-300 group-hover:bg-accent-500 ">
                    <Icon
                      name={item.icon as IconName}
                      className="text-accent-500 transition-colors duration-300 group-hover:text-white"
                      size={22}
                    />
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

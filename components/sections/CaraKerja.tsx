import { steps } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CaraKerja() {
  return (
    <section
      id="cara-kerja"
      className="scroll-mt-20 bg-dots relative overflow-hidden bg-neutral-50 py-16 md:py-24"
    >
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Cara Kerja"
          title="Mulai dalam 4 Langkah Mudah"
          description="Proses mudah untuk mulai bergabung sebagai mitra."
        />

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 opacity-30 lg:block" />

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 150} className="relative">
              <div className="group text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-sky-400 font-heading text-lg font-bold text-white shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {step.number}
                  <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

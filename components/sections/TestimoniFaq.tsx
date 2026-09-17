import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export function TestimoniFaq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Testimoni"
          title="Kata Mitra Kami"
          description="Kata mitra kami tentang layanan dan dukungan yang mereka terima."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <Card className="h-full">
                <Quote
                  size={28}
                  className="mb-4 text-primary-100 transition-colors duration-300 group-hover:text-primary-500"
                />
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="leading-relaxed text-neutral-700">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-sky-400 font-heading text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban untuk pertanyaan umum seputar kemitraan dan layanan kami."
          />
          <Reveal className="mt-10" delay={100}>
            <FaqAccordion />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

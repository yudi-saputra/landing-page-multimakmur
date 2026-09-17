import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          light
            ? "bg-white/15 text-white"
            : "bg-primary-50 text-primary-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-heading text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 ${light ? "text-white/85" : "text-neutral-500"}`}>
        {description}
      </p>
    </Reveal>
  );
}

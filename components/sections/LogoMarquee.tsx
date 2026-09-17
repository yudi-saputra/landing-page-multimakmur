import Image from "next/image";
import { partnerLogos } from "@/lib/content";

export function LogoMarquee({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <div
      className="marquee-container overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <Image
            key={`${logo.file}-${index}`}
            src={`/mitra/${logo.file}`}
            alt={logo.name}
            width={128}
            height={128}
            className={`h-20 w-20 flex-shrink-0 object-contain transition-transform duration-300 hover:scale-110 md:h-24 md:w-24 ${
              theme === "dark"
                ? "drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

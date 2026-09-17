import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Produk } from "@/components/sections/Produk";
import { TentangKami } from "@/components/sections/TentangKami";
import { UnitUsaha } from "@/components/sections/UnitUsaha";
import { CaraKerja } from "@/components/sections/CaraKerja";
import { TestimoniFaq } from "@/components/sections/TestimoniFaq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Produk />
        <TentangKami />
        <UnitUsaha />
        <CaraKerja />
        <TestimoniFaq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

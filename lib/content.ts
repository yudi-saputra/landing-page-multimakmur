export const company = {
  name: "PT Multi Makmur Indonesia",
  tagline: "Agregator Pulsa & PPOB",
  foundedYear: 2013,
  email: "info@multimakmur.id",
  address:
    "Ruko, Jl. Villa Taman Bandara No.18 Blok N 10, Dadap, Kec. Kosambi, Kabupaten Tangerang, Banten 15211",
  mapsUrl: "https://maps.app.goo.gl/uHH3fAEKRjVFi2e96",
};

// CTA placeholder — ganti ke WA link atau form saat sudah final (lihat docs/PRD.md §6)
export const ctaHref = `mailto:${company.email}`;

// Placeholder link form pendaftaran Hero — ganti ke URL form pendaftaran asli saat sudah siap
export const daftarHref = "#";

export const navLinks = [
  { label: "Produk", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Unit Usaha", href: "#unit-usaha" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export const partnerLogos = [
  { name: "Telkomsel", file: "telkomsel.svg" },
  { name: "Indosat", file: "indosat.png" },
  { name: "XL Axiata", file: "xl.svg" },
  { name: "Axis", file: "axis.svg" },
  { name: "Tri", file: "tri.svg" },
  { name: "Smartfren", file: "Smartfren_logo.svg" },
  { name: "by.U", file: "by.u.png" },
  { name: "DANA", file: "dana.webp" },
  { name: "OVO", file: "ovo.svg" },
  { name: "GoPay", file: "gopay.svg" },
  { name: "LinkAja", file: "link-aja.png" },
  { name: "Grab", file: "grab.png" },
  { name: "Maxim", file: "logo-maxim.png" },
  { name: "Listrik Pintar", file: "listrik-pintar.png" },
  { name: "Mobile Legends", file: "mobile-legend.png" },
];

export const produk = [
  {
    icon: "Smartphone",
    title: "Pulsa & Paket Data",
    description:
      "Isi ulang pulsa dan kuota data seluruh operator, real-time.",
  },
  {
    icon: "Gamepad2",
    title: "Voucher Game",
    description: "Top-up voucher game populer untuk reseller dan gamer.",
  },
  {
    icon: "Receipt",
    title: "PPOB",
    description:
      "Pembayaran listrik, PDAM, BPJS, dan tagihan lain dalam satu sistem.",
  },
  {
    icon: "Wallet",
    title: "E-Wallet & Transfer",
    description:
      "Top-up e-wallet dan layanan transfer antar bank/dompet digital.",
  },
];

export const whyUs = [
  {
    icon: "Award",
    title: "Berpengalaman",
    description: "Lebih dari 10 tahun di industri agregasi pulsa & PPOB.",
  },
  {
    icon: "Zap",
    title: "Sistem Andal",
    description:
      "Transaksi cepat dan stabil untuk kebutuhan bisnis skala besar.",
  },
  {
    icon: "Headset",
    title: "Dukungan Penuh",
    description: "Tim support siap membantu mitra B2B, B2C, dan H2H.",
  },
  {
    icon: "Network",
    title: "Jangkauan Luas",
    description: "Produk lengkap untuk semua kebutuhan digital.",
  },
];

export const businessUnits = [
  {
    icon: "Building2",
    title: "B2B",
    subtitle: "Business to Business",
    description:
      "Solusi distribusi pulsa & PPOB skala perusahaan/instansi, volume besar dengan harga kompetitif.",
    ctaLabel: "Integrasi API",
  },
  {
    icon: "Users",
    title: "B2C",
    subtitle: "Business to Customer",
    description:
      "Peluang usaha reseller pulsa, paket data, dan PPOB untuk individu.",
    ctaLabel: "Daftar Reseller",
  },
  {
    icon: "Plug",
    title: "Partner / H2H",
    subtitle: "Host to Host",
    description:
      "Integrasi sistem langsung (API to API) untuk platform/aplikasi mitra.",
    ctaLabel: "Gabung Channel",
  },
];

export const steps = [
  {
    number: "01",
    title: "Hubungi Kami",
    description: "Ajukan minat lewat kontak yang tersedia.",
  },
  {
    number: "02",
    title: "Diskusi Kebutuhan",
    description: "Tim kami bantu tentukan skema B2B/B2C/H2H yang cocok.",
  },
  {
    number: "03",
    title: "Aktivasi Akun/Integrasi",
    description: "Setup akun mitra atau integrasi API (untuk H2H).",
  },
  {
    number: "04",
    title: "Mulai Bertransaksi",
    description: "Nikmati layanan pulsa, PPOB, dan lainnya.",
  },
];

export const testimonials = [
  {
    quote:
      "Sistem transaksinya stabil, cocok untuk kebutuhan reseller harian kami.",
    name: "Mitra Reseller",
    role: "B2C Partner",
  },
  {
    quote: "Integrasi H2H berjalan lancar, tim support responsif.",
    name: "Mitra Integrasi",
    role: "H2H Partner",
  },
  {
    quote: "Harga kompetitif untuk kebutuhan distribusi skala perusahaan.",
    name: "Mitra Korporat",
    role: "B2B Partner",
  },
];

export const faqs = [
  {
    question: "Bagaimana cara jadi mitra reseller?",
    answer:
      "Hubungi kami melalui kontak yang tersedia, tim kami akan membantu proses aktivasi akun mitra B2C.",
  },
  {
    question: "Apakah tersedia integrasi API untuk H2H?",
    answer:
      "Ya, kami menyediakan integrasi Host to Host (API to API) untuk platform atau aplikasi mitra.",
  },
  {
    question: "Produk apa saja yang tersedia?",
    answer:
      "Pulsa & Paket Data, Voucher Game, PPOB, serta E-Wallet & Transfer.",
  },
  {
    question: "Bagaimana cara menghubungi tim support?",
    answer: `Kirim email ke ${company.email} atau melalui kontak di halaman ini.`,
  },
];

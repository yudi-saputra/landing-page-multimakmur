# Tech Spec — Landing Page PT Multi Makmur Indonesia

## 1. Stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Fonts:** next/font/google (Inter + Sora)
- **Deployment target:** Vercel (asumsi standar Next.js — konfirmasi ke user bila beda)

## 2. Folder Structure

```
landing-page-multimakmur/
├── docs/                     # PRD, StyleGuide, ContentMap, TechSpec (dokumen ini)
├── app/
│   ├── layout.tsx            # root layout, font, metadata SEO
│   ├── page.tsx              # assembly semua section
│   └── globals.css           # tailwind base + custom tokens
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Produk.tsx
│   │   ├── TentangKami.tsx
│   │   ├── UnitUsaha.tsx
│   │   ├── CaraKerja.tsx
│   │   ├── TestimoniFaq.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/
│   └── content.ts            # data statis (produk, unit usaha, faq) — single source of truth dari ContentMap.md
├── public/
│   └── (logo, favicon, ilustrasi)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 3. Component Breakdown

- Setiap section di `components/sections/` menerima data dari `lib/content.ts` (bukan hardcode teks di komponen) — supaya update copy tidak sentuh JSX.
- `components/ui/` isi elemen reusable sesuai StyleGuide (Button variant primary/secondary, Card, Badge).
- `app/page.tsx` hanya assembly: import semua section, render berurutan sesuai ContentMap.

## 4. Design Tokens (Tailwind Config)

Extend `tailwind.config.ts` `theme.extend`:
- `colors.primary` (50–900 scale, base dari `#4F46E5`)
- `colors.accent` (base `#06B6D4`)
- `fontFamily.heading` (Sora), `fontFamily.body` (Inter)
- `borderRadius.xl/2xl` sesuai StyleGuide

## 5. SEO & Metadata

- `app/layout.tsx` metadata: title "PT Multi Makmur Indonesia — Agregator Pulsa & PPOB", description dari tagline, OG image placeholder.
- Semantic HTML: `<section>` per block, heading hierarchy H1 (hero) → H2 (tiap section title) → H3 (card title).

## 6. Accessibility & Responsive Checklist

- Kontras warna teks vs bg minimal AA (cek gradient area — teks putih di atas gradient primary→accent aman).
- Semua CTA button punya focus state jelas.
- Nav mobile: hamburger menu dengan aria-label.
- Image pakai `next/image` dengan `alt` text deskriptif.
- Test breakpoint: 375px, 768px, 1440px.

## 7. CTA Wiring (placeholder → final)

`lib/content.ts` expose 1 konstanta `ctaHref` (default: `mailto:info@multimakmur.id` atau `#contact`) dipakai di semua CTA button — supaya saat user tentukan CTA final (WA/form), cukup ubah 1 tempat.

## 8. Verification Steps

1. `npm run dev` → cek tiap section render sesuai urutan ContentMap, tanpa console error.
2. Cek responsive di 3 breakpoint (mobile/tablet/desktop).
3. Cross-check semua data kontak (email, alamat, maps link) sama persis dengan PRD §1 — no typo.
4. Lighthouse quick audit (performance + accessibility) sebelum handoff ke user.

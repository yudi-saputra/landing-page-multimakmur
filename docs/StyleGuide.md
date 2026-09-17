# Style Guide — Modern Fintech/Tech

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary-600` | #0776BD | Brand biru (dari logo), tombol primary, link aktif |
| `primary-500` | #1E8FD6 | Hover state, blob |
| `primary-700` | #065E96 | Gradient start, text on light bg |
| `accent-500` | #ED2D27 | Brand merah (dari logo) — highlight kecil: eyebrow, subtitle, icon tint. Jangan dipakai untuk area besar |
| `sky-400` | #38BDF8 (Tailwind built-in) | Gradient end untuk area besar (hero, CTA, icon box) — biru ke biru muda, hindari biru ke merah |
| `gradient` | linear-gradient(135deg, #0776BD 0%, #38BDF8 100%) | Hero background, CTA button |
| `neutral-900` | #0F172A | Heading text, dark section bg |
| `neutral-700` | #334155 | Body text |
| `neutral-500` | #64748B | Secondary text, placeholder |
| `neutral-200` | #E2E8F0 | Border, divider |
| `neutral-50` | #F8FAFC | Section bg alternate |
| `success-500` | #22C55E | Badge "aktif", checklist icon |
| `white` | #FFFFFF | Base bg, text on dark |

Gunakan gradient primary→accent secara terbatas (hero bg, CTA button, section divider) — jangan overuse supaya tetap terasa "corporate trust", bukan hanya flashy.

## 2. Typography

- **Heading font:** Inter atau Sora (bold, tech feel) — load via `next/font/google`.
- **Body font:** Inter (regular/medium).

| Level | Size (mobile / desktop) | Weight |
|---|---|---|
| H1 | 32px / 56px | 700–800 |
| H2 | 26px / 40px | 700 |
| H3 | 20px / 28px | 600 |
| Body | 16px / 18px | 400 |
| Small/Caption | 13px / 14px | 400–500 |

Line-height: heading 1.2, body 1.6.

## 3. Spacing & Layout

- Base unit 4px (Tailwind default spacing scale).
- Section vertical padding: `py-16` mobile, `py-24` desktop.
- Container max-width: `1280px` (`max-w-7xl`), horizontal padding `px-4 md:px-8`.
- Grid: 1 kolom mobile → 2–3 kolom desktop untuk card produk/unit usaha.

## 4. Border Radius & Shadow

- Card/button radius: `rounded-xl` (12px), hero highlight box `rounded-2xl` (16px).
- Shadow: `shadow-md` untuk card default, `shadow-lg` untuk card hover/elevated CTA.

## 5. Components

- **Button Primary:** gradient bg, white text, `rounded-xl`, padding `px-6 py-3`, shadow-md, hover: scale/opacity shift.
- **Button Secondary:** border `neutral-200`, text `primary-600`, transparent bg, hover bg `neutral-50`.
- **Card:** white bg, border `neutral-200`, `rounded-xl`, padding `p-6`, shadow-sm → shadow-md on hover.
- **Badge:** pill shape, small text, bg `accent-500/10`, text `accent-500`.
- **Navbar:** sticky top, white/blur bg on scroll, logo kiri, nav links tengah/kanan, CTA button kanan.

## 6. Breakpoints (Tailwind default)

`sm:640px` `md:768px` `lg:1024px` `xl:1280px` `2xl:1536px` — desain mobile-first, breakpoint utama `md` (tablet) dan `lg` (desktop).

## 7. Iconography

Gunakan **lucide-react** (outline style, stroke 1.5–2px) — konsisten dengan vibe fintech modern, ringan di-bundle.

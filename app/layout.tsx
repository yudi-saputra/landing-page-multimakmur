import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteUrl = "https://multimakmur.id";
const title = "Multi Makmur Indonesia - Agregator Pulsa & PPOB";
const description =
  "PT Multi Makmur Indonesia, agregator Pulsa, Paket Data, Voucher Game, PPOB, dan E-Wallet sejak 2013. Melayani mitra B2B, B2C, dan Partner H2H di seluruh Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "agregator pulsa",
    "PPOB",
    "voucher game",
    "paket data",
    "e-wallet",
    "reseller pulsa",
    "H2H",
    "Multi Makmur Indonesia",
  ],
  authors: [{ name: company.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: company.name,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0776BD",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.svg`,
  foundingDate: String(company.foundedYear),
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressCountry: "ID",
  },
  description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}

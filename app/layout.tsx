import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://rv2.inf.br";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RV2",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/rv2-logo.png`,
    description:
      "Consultoria TOTVS Moda, BI, integrações e soluções tecnológicas para empresas da indústria têxtil e da moda.",
    sameAs: [
      "https://www.instagram.com/rv2assessoria/",
      "https://www.linkedin.com/company/rv2assessoria/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RV2",
    url: SITE_URL,
  },
];

export const metadata: Metadata = {
  title: "RV2 | Consultoria e BI para TOTVS Moda",
  description:
    "Consultoria TOTVS Moda, BI, integrações e soluções para empresas da indústria têxtil e da moda. Conheça a RV2 e evolua seus processos e resultados.",
  keywords: [
    "consultoria TOTVS Moda",
    "BI TOTVS Moda",
    "especialista TOTVS Moda",
    "integração TOTVS Moda",
    "implantação TOTVS Moda",
  ],
  authors: [{ name: "RV2" }],
  creator: "RV2",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "RV2 | Consultoria e BI para TOTVS Moda",
    description:
      "Consultoria TOTVS Moda, BI, integrações e soluções para empresas da indústria têxtil e da moda.",
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "RV2",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE_URL}/logos/rv2-logo-transparent.png`,
        width: 512,
        height: 512,
        alt: "RV2 – Consultoria e Tecnologia para TOTVS Moda",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RV2 | Consultoria e BI para TOTVS Moda",
    description:
      "Consultoria TOTVS Moda, BI, integrações e soluções para empresas da indústria têxtil e da moda.",
    images: [`${SITE_URL}/logos/rv2-logo-transparent.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

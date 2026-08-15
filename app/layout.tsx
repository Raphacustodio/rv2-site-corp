import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RV2 Assessoria + Tecnologia para a indústria têxtil",
  description: "Assessoria especializada em TOTVS Moda e soluções tecnológicas que impulsionam a gestão da cadeia têxtil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

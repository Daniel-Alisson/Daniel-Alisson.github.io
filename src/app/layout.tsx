import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/commons/Header";

// FONTE 1 - PRECISO MUDAR
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// FONTE 2
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TITULO E DESCRICAO QUE APARECE NA PESQUISA DO GOOGLE - MELHORAR DPS
export const metadata: Metadata = {
  title: "Portfolio - DA",
  description: "Portfolio desenvolvido por Daniel Alisson",
};

// BASE - CRIAR UM COMPONENT LAYOUT.TSC PARA JUNTAR O HEADER, BODY E FOOTER. E ESSE COMPONENT VAI SER ENFIADO NO BODY
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

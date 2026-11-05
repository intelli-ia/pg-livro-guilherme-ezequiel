import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "O Preço da Liderança | Guilherme Ezequiel",
  description:
    "Livro físico com frete grátis e workshop de bônus. Aprenda a desenvolver pessoas, delegar responsabilidades e enfrentar decisões difíceis com mais segurança.",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#161D26",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

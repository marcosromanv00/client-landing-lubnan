import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lubnan - Experiencia Culinaria Libanesa de Alta Lujo",
  description: "Descubre los sabores auténticos del Líbano en el corazón de Costa Rica. Una fusión perfecta entre tradición milenaria y sofisticación moderna.",
  keywords: ["Lubnan", "Restaurante Libanés", "Comida Libanesa Costa Rica", "Alta Gastronomía", "Lujo", "Paseo Colón", "Catering Líbano"],
  authors: [{ name: "Lubnan Costa Rica" }],
  openGraph: {
    title: "Lubnan - Experiencia Culinaria Libanesa de Alta Lujo",
    description: "Descubre los sabores auténticos del Líbano en el corazón de Costa Rica.",
    url: "https://lubnan.cr",
    siteName: "Lubnan",
    images: [
      {
        url: "/assets/Foto-2-1-1-e1564518936394.jpg",
        width: 1200,
        height: 630,
        alt: "Lubnan Restaurant Interior",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lubnan - Experiencia Culinaria Libanesa de Alta Lujo",
    description: "Alta gastronomía libanesa en el corazón de San José.",
    images: ["/assets/Foto-2-1-1-e1564518936394.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body bg-limestone text-obsidian relative">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

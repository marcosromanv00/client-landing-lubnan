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
  title: "Lubnan - Alta Gastronomía Libanesa | 100% Sin Gluten",
  description: "El primer restaurante libanés de alta gama 100% libre de gluten en Costa Rica. Tradición milenaria, pureza absoluta y una experiencia sensorial de gala.",
  keywords: ["Lubnan", "Restaurante Libanés", "Sin Gluten", "Gluten Free Costa Rica", "Comida Libanesa", "Alta Gastronomía", "Paseo Colón", "Mario Zaghloul"],
  authors: [{ name: "Lubnan Costa Rica" }],
  openGraph: {
    title: "Lubnan - Alta Gastronomía Libanesa | 100% Sin Gluten",
    description: "Descubre la pureza de la cocina libanesa 100% libre de gluten en el corazón de San José.",
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
    title: "Lubnan - Alta Gastronomía Libanesa | 100% Sin Gluten",
    description: "Alta gastronomía libanesa 100% libre de gluten en el corazón de San José.",
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

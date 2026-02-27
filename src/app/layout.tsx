import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "DIPANDU DUNIA ASMARA — Stand Up Comedy Show by Pandu Dunia",
  description:
    "DIPANDU DUNIA ASMARA, stand up comedy show terbaru dari Pandu Dunia. Satu malam, seribu tawa, satu cerita tentang cinta. Coming Soon 2026!",
  keywords: [
    "Pandu Dunia",
    "stand up comedy",
    "DIPANDU DUNIA ASMARA",
    "comedy show Indonesia",
    "tiket stand up comedy",
    "pandudunia",
  ],
  openGraph: {
    title: "DIPANDU DUNIA ASMARA — Stand Up Comedy Show",
    description:
      "Stand up comedy show terbaru dari Pandu Dunia. Satu malam, seribu tawa, satu cerita tentang cinta.",
    type: "website",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

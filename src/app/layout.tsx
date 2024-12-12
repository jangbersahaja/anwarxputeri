import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Majlis Perkahwinan Anwar & Puteri",
  description: "14 Disember 2024 | Palace of The Golden Horses",
  openGraph: {
    title: "Majlis Perkahwinan Anwar & Puteri",
    description: "14 Disember 2024 | Palace of The Golden Horses",
    url: "https://anwarxputeri.vercel.app/",
    images: [
      {
        url: "/crest.png",
        width: 630,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

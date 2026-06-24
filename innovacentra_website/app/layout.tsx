import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PopupContact from "@/components/PopupContact";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://innovacentra.com'),
  title: "InnovaCentra Technologies - Innovative IT Solutions",
  description: "InnovaCentra Technologies is a modern IT solutions company helping startups, businesses, and enterprises transform ideas into powerful digital products.",
  keywords: "IT Solutions Company, Software Development Company, Web Development Company, Mobile App Development Company, AI Development Services, IT Company in Chennai",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "InnovaCentra Technologies - Innovative IT Solutions",
    description: "InnovaCentra Technologies is a modern IT solutions company helping startups, businesses, and enterprises transform ideas into powerful digital products.",
    url: "https://innovacentra.com",
    siteName: "InnovaCentra Technologies",
    images: [
      {
        url: "/image/logo%201.png",
        width: 1200,
        height: 630,
        alt: "InnovaCentra Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovaCentra Technologies",
    description: "Transforming ideas into powerful digital products.",
    images: ["/image/logo%201.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <PopupContact />
      </body>
    </html>
  );
}

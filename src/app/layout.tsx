import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akhil Promoters | Premium Real Estate Developers",
  description: "Akhil Promoters is a premium real estate developer committed to excellence, innovation, and customer satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="/original.css" />
      </head>
      <body className="nohemi_574cbbcc-module__7M8Y2a__variable inter_fe8b9d92-module__LINzvG__variable min-h-full flex flex-col font-sans antialiased bg-pure-white text-charcoal">
        <LenisWrapper>
          <Header />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}

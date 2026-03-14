import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wholesale Tuna",
  description: "Official website of Wholesale Tuna, featuring lyrics and album cover art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-black text-white antialiased selection:bg-white selection:text-black min-h-screen flex flex-col overflow-x-hidden`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black"></div>
        <main className="grow flex flex-col">
          {children}
        </main>

        <footer className="w-full border-t border-white/5 bg-black/50 backdrop-blur-md text-zinc-500 text-sm py-8 px-4 text-center mt-auto font-sans uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {site.author}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

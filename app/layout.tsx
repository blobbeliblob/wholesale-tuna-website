import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
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
    <html lang="en">
      <body className={`${lato.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>

        <footer className="site-footer border-t border-zinc-800 text-zinc-400 text-sm py-6 px-4 text-center">
          © {new Date().getFullYear()} {site.author}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

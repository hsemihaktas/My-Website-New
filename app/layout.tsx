import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { LangProvider } from "../context/LangContext";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasan Semih Aktaş | Full-Stack Developer Portfolio",
  description: "Welcome to the personal portfolio of Hasan Semih Aktaş. Explore projects, experience, and educational background in web development and software engineering.",
  keywords: [
    "Hasan Semih Aktaş", "Hasan Semih Aktas", "hasan semih aktaş", "hasan semih aktas", "HASAN SEMİH AKTAŞ", "HASAN SEMİH AKTAS", "H. S. Aktaş", "H. S. Aktas"
  ],
  authors: [{ name: "Hasan Semih Aktaş" }],
  robots: "index, follow",
  themeColor: "#000000",
  other: {
    "google-site-verification": "RIHQYNOqayD5Y5TpWlG4qkDvQzg9eKkZxcPx2z-DD6g"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LangProvider>
          <Header />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}

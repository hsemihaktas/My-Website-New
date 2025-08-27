
"use client";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import { useState } from "react";

const navLabels = {
  tr: [
    { href: "/", label: "Anasayfa" },
    { href: "/#about", label: "Hakkımda" },
    { href: "/#projects", label: "Projeler" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
  ],
};

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-transparent">
      <div className="font-bold text-xl tracking-wider">Hasan Semih Aktaş</div>
      {/* Masaüstü navigasyon */}
      <nav className="hidden md:flex gap-8 items-center">
        {navLabels[lang].map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-blue-400 transition font-bold" style={{ fontFamily: 'Orbitron, sans-serif', fontOpticalSizing: 'auto', fontStyle: 'normal' }}>
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Dil butonları masaüstü */}
      <div className="hidden md:flex items-center gap-2">
        <button
          className={`px-3 py-1 font-extrabold rounded-md border ${lang === "tr" ? "border-blue-400 text-blue-400" : "border-gray-400 text-gray-400"} hover:bg-blue-500 hover:text-white transition text-sm`}
          type="button"
          onClick={() => setLang("tr")}
        >
          TR
        </button>
        <button
          className={`px-3 py-1 font-extrabold rounded-md border ${lang === "en" ? "border-blue-400 text-blue-400" : "border-gray-400 text-gray-400"} hover:bg-blue-500 hover:text-white transition text-sm`}
          type="button"
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
      {/* Mobil hamburger menü ikonu */}
      <div className="md:hidden flex items-center gap-2">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span className={`block w-6 h-0.5 bg-blue-400 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-400 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobil açılır menü */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden flex flex-col">
          {/* Sağ üstte kapatma butonu */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü Kapat"
          >
            &times;
          </button>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            <nav className="flex flex-col gap-6 items-center">
              {navLabels[lang].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-2xl font-bold hover:text-blue-400 transition"
                  style={{ fontFamily: 'Orbitron, sans-serif', fontOpticalSizing: 'auto', fontStyle: 'normal' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Dil butonları menü içinde */}
            <div className="flex items-center gap-4 mt-6">
              <button
                className={`px-3 py-1 font-extrabold rounded-md border ${lang === "tr" ? "border-blue-400 text-blue-400" : "border-gray-400 text-gray-400"} hover:bg-blue-500 hover:text-white transition text-base`}
                type="button"
                onClick={() => setLang("tr")}
              >
                TR
              </button>
              <button
                className={`px-3 py-1 font-extrabold rounded-md border ${lang === "en" ? "border-blue-400 text-blue-400" : "border-gray-400 text-gray-400"} hover:bg-blue-500 hover:text-white transition text-base`}
                type="button"
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

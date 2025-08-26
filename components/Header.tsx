
"use client";
import Link from "next/link";
import { useLang } from "../context/LangContext";

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
  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-transparent">
      <div className="font-bold text-xl tracking-wider">Hasan Semih Aktaş</div>
      <nav className="flex gap-8 items-center">
        {navLabels[lang].map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-blue-400 transition font-bold">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
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
    </header>
  );
}

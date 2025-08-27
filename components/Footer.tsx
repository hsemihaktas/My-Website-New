"use client";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const footerContent = {
    tr: {
      mail: "hsemihaktas@gmail.com",
      copyright: "© 2025 Hasan Semih Aktaş. Tüm hakları saklıdır."
    },
    en: {
      mail: "hsemihaktas@gmail.com",
      copyright: "© 2025 Hasan Semih Aktaş. All rights reserved."
    }
  };

  const { lang } = useLang();
  const c = footerContent[lang as 'tr' | 'en'];
  return (
    <footer className="w-full py-6 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800 mt-16 px-4 md:px-12 bg-transparent relative">
      <div className="flex gap-4 mb-4 md:mb-0">
        <a href="https://www.linkedin.com/in/hsemihaktas/" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedin size={22} /></a>
        <a href="https://www.instagram.com/hsemihaktas/" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram size={22} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition"><FaTwitter size={22} /></a>
      </div>
      <div className="flex items-center gap-2">
        <a href={`mailto:${c.mail}`} className="border px-4 py-2 rounded-md bg-neutral-900 text-gray-200 hover:bg-blue-500 hover:text-white transition text-sm flex items-center gap-2">
          {c.mail}
        </a>
      </div>
      <div className="w-full text-center text-xs text-gray-500 mt-4 md:mt-0 md:absolute md:bottom-2 md:left-0 md:right-0">
        {c.copyright}
      </div>
    </footer>
  );
}

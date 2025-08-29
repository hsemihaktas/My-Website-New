"use client";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLang } from "../context/LangContext";
import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

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
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(c.mail);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <footer className="w-full py-6 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800 mt-16 px-4 md:px-12 bg-transparent relative">
      <div className="flex gap-4 mb-4 md:mb-0">
        <a href="https://www.linkedin.com/in/hsemihaktas/" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedin size={22} /></a>
        <a href="https://www.instagram.com/hsemihaktas/" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram size={22} /></a>
  <a href="https://x.com/hsemihaktas" aria-label="X" className="hover:text-blue-300 transition"><FaXTwitter size={22} /></a>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${c.mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded-md bg-neutral-900 text-gray-200 text-sm select-text cursor-pointer hover:bg-blue-500 hover:text-white transition"
            aria-label="E-posta gönder"
            style={{ userSelect: 'text' }}
          >
            {c.mail}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-1 flex items-center justify-center rounded bg-neutral-800 text-gray-300 hover:bg-blue-500 hover:text-white transition border"
            style={{ width: 38, height: 38 }}
            aria-label="E-posta adresini kopyala"
          >
            {copied ? <FaCheck size={16} /> : <FaRegCopy size={16} />}
          </button>
        </div>
       
      </div>
      <div className="w-full text-center text-xs text-gray-500 mt-4 md:mt-0 md:absolute md:bottom-2 md:left-0 md:right-0">
        {c.copyright}
      </div>
    </footer>
  );
}

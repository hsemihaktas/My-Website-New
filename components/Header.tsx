"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-transparent">
  <div className="font-bold text-xl tracking-wider">Hasan Semih Aktaş</div>
      <nav className="flex gap-8 items-center">
  <Link href="/#home" className="hover:text-blue-400 transition">Anasayfa</Link>
  <Link href="/#about" className="hover:text-blue-400 transition">Hakkımda</Link>
  <Link href="/#projects" className="hover:text-blue-400 transition">Projeler</Link>
  <Link href="/#services" className="hover:text-blue-400 transition">Yetenekler</Link>
  <Link href="/#resume" className="hover:text-blue-400 transition">CV</Link>
      </nav>
  <Link href="/#contact" className="border px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-sm">İletişim</Link>
    </header>
  );
}

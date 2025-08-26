"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-8 bg-transparent">
      <div className="font-bold text-xl tracking-wider">Georgy</div>
      <nav className="flex gap-8 items-center">
        <Link href="#home" className="hover:text-blue-400 transition">Home</Link>
        <Link href="#about" className="hover:text-blue-400 transition">About</Link>
        <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link href="#services" className="hover:text-blue-400 transition">Services</Link>
        <Link href="#resume" className="hover:text-blue-400 transition">Resume</Link>
      </nav>
      <Link href="#contact" className="border px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-sm">Contact Me</Link>
    </header>
  );
}

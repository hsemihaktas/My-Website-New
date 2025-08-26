import { FaLinkedin, FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800 mt-16 px-4 md:px-12 bg-transparent relative">
      <div className="flex gap-4 mb-4 md:mb-0">
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedin size={22} /></a>
        <a href="#" aria-label="Dribbble" className="hover:text-pink-400 transition"><FaDribbble size={22} /></a>
        <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebook size={22} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram size={22} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition"><FaTwitter size={22} /></a>
      </div>
      <div className="flex items-center gap-2">
        <a href="mailto:semihaktas.dev@gmail.com" className="border px-4 py-2 rounded-md bg-neutral-900 text-gray-200 hover:bg-blue-500 hover:text-white transition text-sm flex items-center gap-2">
          semihaktas.dev@gmail.com
        </a>
      </div>
      <div className="w-full text-center text-xs text-gray-500 mt-4 md:mt-0 md:absolute md:bottom-2 md:left-0 md:right-0">
        © 2025 Hasan Semih Aktaş. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

"use client";
import { useLang } from "../context/LangContext";

export default function AboutMe() {
  const aboutContent = {
    tr: {
      title: "Hakkımda",
      subtitle: "Kısaca Ben",
      p1: "Merhaba! Ben Hasan Semih Aktaş. Frontend geliştirme alanında uzmanlaşmış, kullanıcı deneyimini ön planda tutan bir yazılımcıyım. React, Next.js, TypeScript ve modern web teknolojileriyle ölçeklenebilir ve performanslı arayüzler geliştiriyorum.",
      p2: "Takım çalışmasına yatkın, iletişimi güçlü ve çözüm odaklı biriyim. Yeni teknolojileri takip etmeyi ve kendimi sürekli geliştirmeyi seviyorum. Kod kalitesine, sürdürülebilirliğe ve temiz mimariye önem veririm.",
      p3: "Hedefim; kullanıcı dostu, erişilebilir ve yenilikçi web uygulamaları geliştirmek. Detaycı ve titiz çalışırım. Birlikte harika projelere imza atmak için iletişime geçebilirsiniz!",
      cv: "CV'yi İndir",
    },
    en: {
      title: "About Me",
      subtitle: "Short Bio",
      p1: "Hi! I'm Hasan Semih Aktaş. I'm a frontend developer focused on user experience, building scalable and high-performance interfaces with React, Next.js, TypeScript, and modern web technologies.",
      p2: "I'm a team player, strong communicator, and solution-oriented. I love following new technologies and constantly improving myself. I care about code quality, sustainability, and clean architecture.",
      p3: "My goal is to develop user-friendly, accessible, and innovative web applications. I work with attention to detail. Feel free to contact me for great projects!",
      cv: "Download CV",
    },
  };

  const { lang } = useLang();
  const c = aboutContent[lang as "tr" | "en"];
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center py-8 md:py-0 border-b border-neutral-800 w-full px-6 md:px-0"
    >
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{c.title}</h2>
        <span className="text-xs text-blue-400 mb-4">{c.subtitle}</span>
        <p className="text-gray-300 mb-4">{c.p1}</p>
        <p className="text-gray-400 mb-4">{c.p2}</p>
        <p className="text-gray-400 mb-6">{c.p3}</p>
        <a
          href="/HasanSemihAKTAS-CV.pdf"
          download
          className="border px-6 py-2 rounded-md hover:bg-gray-700 hover:text-white transition text-base"
        >
          {c.cv}
        </a>
      </div>
    </section>
  );
}

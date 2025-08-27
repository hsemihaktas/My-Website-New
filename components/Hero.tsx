"use client";
import { useLang } from "../context/LangContext";
import Image from "next/image";

export default function Hero() {
  const heroContent = {
    tr: {
      name: "Hasan Semih Aktaş",
      title: "Frontend Developer",
      desc: "Yaratıcı ve çözüm odaklı bir Frontend Developer olarak, modern web teknolojileriyle kullanıcı odaklı ve ölçeklenebilir arayüzler geliştiriyorum. React ve Next.js başta olmak üzere, güncel JavaScript ekosistemine hakimim. Takım çalışmasına yatkın, iletişimi güçlü ve öğrenmeye açık biriyim."
    },
    en: {
      name: "Hasan Semih Aktaş",
      title: "Frontend Developer",
      desc: "As a creative and solution-oriented Frontend Developer, I build user-centric and scalable interfaces with modern web technologies. I am proficient in the latest JavaScript ecosystem, especially React and Next.js. I am a team player, strong communicator, and eager to learn."
    }
  };

  const { lang } = useLang();
  const c = heroContent[lang as 'tr' | 'en'];
  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center text-center py-8 md:py-0 border-b border-neutral-800 w-full px-6 md:px-0">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 md:gap-16 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{c.name}</h1>
          <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">{c.title}</h2>
          <p className="max-w-xl text-gray-300 mb-6">{c.desc}</p>
        </div>
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <Image
            src="/images/profilePicture.webp"
            alt="Profile Picture"
            width={320}
            height={320}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

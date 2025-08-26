export default function AboutMe() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col items-center justify-center text-center py-0 -mt-12 border-b border-neutral-800 w-full">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Hakkımda</h2>
        <span className="text-xs text-blue-400 mb-4">Kısaca Ben</span>
        <p className="text-gray-300 mb-4">
          Merhaba! Ben Hasan Semih Aktaş. Frontend geliştirme alanında uzmanlaşmış, kullanıcı deneyimini ön planda tutan bir yazılımcıyım. React, Next.js, TypeScript ve modern web teknolojileriyle ölçeklenebilir ve performanslı arayüzler geliştiriyorum.
        </p>
        <p className="text-gray-400 mb-4">
          Takım çalışmasına yatkın, iletişimi güçlü ve çözüm odaklı biriyim. Yeni teknolojileri takip etmeyi ve kendimi sürekli geliştirmeyi seviyorum. Kod kalitesine, sürdürülebilirliğe ve temiz mimariye önem veririm.
        </p>
        <p className="text-gray-400 mb-6">
          Hedefim; kullanıcı dostu, erişilebilir ve yenilikçi web uygulamaları geliştirmek. Detaycı ve titiz çalışırım. Birlikte harika projelere imza atmak için iletişime geçebilirsiniz!
        </p>
        <a href="/HasanSemihAktas_ÖnYüzGeliştirici.pdf" download className="border px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-base">CV'yi İndir</a>
      </div>
    </section>
  );
}

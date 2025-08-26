export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center py-0 border-b border-neutral-800">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 md:gap-16 w-full max-w-5xl mx-auto px-4">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hasan Semih Aktaş</h1>
          <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">Frontend Developer</h2>
          <p className="max-w-xl text-gray-300 mb-6">
            Yaratıcı ve çözüm odaklı bir Frontend Developer olarak, modern web teknolojileriyle kullanıcı odaklı ve ölçeklenebilir arayüzler geliştiriyorum. React ve Next.js başta olmak üzere, güncel JavaScript ekosistemine hakimim. Takım çalışmasına yatkın, iletişimi güçlü ve öğrenmeye açık biriyim.
          </p>
          <a href="#contact" className="border px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-base">İletişime Geç</a>
        </div>
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/images/profilePicture.png"
            alt="Profile Picture"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

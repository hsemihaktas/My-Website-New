export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-16">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
        {/* Profil görseli buraya eklenebilir */}
        <span className="text-5xl">🧑‍💻</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Georgy Georgy</h1>
      <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">Data Sorcerer ✨</h2>
      <p className="max-w-xl text-gray-300 mb-6">
        As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation
      </p>
      <a href="#contact" className="border px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-base">Contact Me</a>
    </section>
  );
}

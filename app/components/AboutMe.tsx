export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col items-center text-center py-16 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
      <span className="text-xs text-blue-400 mb-4">Get to know me</span>
      <p className="text-gray-300 mb-4">
        Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive modeling, natural language processing, machine learning, and AI chatbots. With a passion for unraveling insights from complex datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in today's data-driven world.
      </p>
      <p className="text-gray-400 mb-4">
        I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication to every project. Whether it's uncovering hidden patterns, predicting future trends, or automating processes with AI, I'm here to help you harness the full potential of your data.
      </p>
      <p className="text-gray-400 mb-6">
        Let's work together to transform your data into actionable insights that drive real results. Get in touch, and let's start unlocking the power of your data today!
      </p>
      <a href="#" className="border px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-base">Download Resume</a>
    </section>
  );
}

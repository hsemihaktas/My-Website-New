import Footer from "../components/Footer";


import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      {/* Diğer componentler buraya eklenecek */}
      <Footer />
    </main>
  );
}

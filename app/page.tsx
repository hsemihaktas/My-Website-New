import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ProjectsClientWrapper from "../components/ProjectsClientWrapper";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
  <ProjectsClientWrapper />
      {/* Diğer componentler buraya eklenecek */}
    </main>
  );
}

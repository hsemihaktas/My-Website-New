import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            className="bg-[#18181b] rounded-lg shadow-md p-6 flex flex-col hover:scale-105 transition border border-[#232329]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-900/40 text-blue-300 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat, i) => (
                <span key={i} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs">
                  {cat}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

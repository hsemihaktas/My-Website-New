import { notFound } from "next/navigation";
import projects from "../../../data/projects.json";

export async function generateStaticParams() {
  return (projects as any[]).map((p) => ({ slug: p.url.split("/").pop() }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = (projects as any[]).find((p) => p.url.endsWith(params.slug));
  if (!project) return notFound();
  const locale = "EN";
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title[locale]}</h1>
      <img
        src={"/" + project.imageFile}
        alt={project.title[locale]}
        className="w-full max-h-96 object-cover rounded mb-6"
      />
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string, i: number) => (
          <span key={i} className="bg-blue-900/40 text-blue-300 px-2 py-1 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-300 whitespace-pre-line mb-8">{project.description[locale]}</p>
      <div className="flex gap-4">
        {project.codeLink && (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-gray-800 text-white text-sm font-medium hover:bg-blue-700 transition">
            Source Code
          </a>
        )}
        {project.projectSite && (
          <a href={project.projectSite} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition">
            Live Site
          </a>
        )}
      </div>
    </main>
  );
}

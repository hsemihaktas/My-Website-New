"use client"
import React from "react";
import { notFound } from "next/navigation";
import projects from "../../../data/projects.json";
import { useLang } from "../../../context/LangContext";



export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params) as { slug: string };
  const project = (projects as any[]).find((p) => p.url.endsWith(slug));
  const { lang } = useLang();
  const locale = lang === "tr" ? "TR" : "EN";
  const labels = {
    tr: {
      source: "Kaynak Kodu",
      live: "Canlı Site"
    },
    en: {
      source: "Source Code",
      live: "Live Site"
    }
  };
  if (!project) return notFound();
  const l = labels[lang];
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
            {l.source}
          </a>
        )}
        {project.projectSite && (
          <a href={project.projectSite} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition">
            {l.live}
          </a>
        )}
      </div>
    </main>
  );
}

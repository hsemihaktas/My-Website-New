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
  // Description: render as bullet points for every '-'
  const descriptionRaw = project.description[locale];
  let descriptionContent;
  if (descriptionRaw.includes('-')) {
    const items = descriptionRaw.split(/-(?!\s)/g).flatMap((part: string) => part.split(/-\s+/g)).map((item: string) => item.trim()).filter((item: string) => item.length > 0);
    descriptionContent = (
      <ul className="list-disc pl-6 text-lg mb-1">
        {items.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  } else {
    descriptionContent = <div className="text-lg mb-1">{descriptionRaw}</div>;
  }
  return (
    <main className="max-w-7xl mx-auto py-16 px-1 md:px-4 flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center w-full justify-center">
        {/* Left: Image */}
        <div className="md:w-2/5 w-full flex-shrink-0 flex justify-center items-center group">
          <img
            src={"/" + project.imageFile}
            alt={project.title[locale]}
            className="w-full max-h-96 object-cover aspect-auto object-top group-hover:object-bottom transition-all duration-1000"
          />
        </div>
        {/* Right: Details */}
        <div className="md:w-3/5 w-full flex flex-col gap-8 items-center md:items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white text-center md:text-left">{project.title[locale]}</h1>
          <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="bg-blue-900/60 text-blue-200 px-4 py-2 rounded-xl text-lg font-semibold shadow">
                {tech}
              </span>
            ))}
          </div>
          <div className="text-gray-200 mb-6 w-full text-center md:text-left">
            {descriptionContent}
          </div>
          <div className="flex gap-6 mt-2 justify-center md:justify-start">
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-white text-lg font-bold hover:bg-blue-700 transition shadow-lg">
                {l.source}
              </a>
            )}
            {project.projectSite && (
              <a href={project.projectSite} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-green-700 text-white text-lg font-bold hover:bg-green-800 transition shadow-lg">
                {l.live}
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

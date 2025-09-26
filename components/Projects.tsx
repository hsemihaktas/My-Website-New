"use client";

import projects from "../data/projects.json";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../context/LangContext";

type Project = {
  title: { EN: string; TR: string };
  description: { EN: string; TR: string };
  shortDescription: { EN: string; TR: string };
  meta: {
    title: { EN: string; TR: string };
    description: { EN: string; TR: string };
  };
  codeLink?: string;
  iconFile?: string;
  imageFiles?: string[];
  videoFile?: string;
  projectSite?: string;
  url: string;
  technologies: string[];
};

const labels = {
  tr: {
    projects: "Projeler",
    viewProject: "Projeyi Gör",
    viewAll: "Tümünü Göster",
    showLess: "Daha Az Göster",
  },
  en: {
    projects: "Projects",
    viewProject: "View Project",
    viewAll: "View All",
    showLess: "Show Less",
  },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLang();
  const locale = lang === "tr" ? "TR" : "EN";
  const allProjects = projects as Project[];
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);
  const l = labels[lang];

  return (
    <section
      id="projects"
      className="py-8 w-full max-w-[1400px] mx-auto px-2 md:px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {l.projects}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.url}
              initial={{ opacity: 0, scaleY: 0.8, y: 60 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0.8, y: 60 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              layout
              style={{ transformOrigin: "top center" }}
              className="bg-[#18181b] rounded-lg shadow-md p-8 flex flex-col hover:scale-[1.03] transition border border-[#232329] min-w-0"
            >
              <div className="w-full h-48 overflow-hidden rounded group flex items-center justify-center bg-transparent">
                {project.iconFile ? (
                  <Image
                    src={"/" + project.iconFile}
                    alt={project.title[locale] + " icon"}
                    width={160}
                    height={192}
                    className="w-1/2 h-full object-cover aspect-auto mx-auto"
                    unoptimized
                  />
                ) : project.imageFiles && project.imageFiles.length > 0 ? (
                  <Image
                    src={"/" + project.imageFiles[0]}
                    alt={project.title[locale]}
                    width={384}
                    height={192}
                    className="w-full h-full object-cover aspect-auto object-top group-hover:object-bottom transition-all duration-1000"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center text-gray-500">
                    No image
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2 mt-4">
                {project.title[locale]}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.shortDescription[locale]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-900/40 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex mt-auto">
                <a
                  href={`/project/${project.url.split("/").pop()}`}
                  className="border px-6 py-2 rounded-md hover:bg-gray-700 hover:text-white transition text-base w-full text-center font-medium"
                >
                  {l.viewProject}
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {allProjects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="border border-gray-600 rounded-full px-8 py-2 text-white text-base font-medium hover:bg-gray-800 transition-all"
          >
            {showAll ? l.showLess : l.viewAll}
          </button>
        </div>
      )}
    </section>
  );
}

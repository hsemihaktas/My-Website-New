"use client";

import projects from "../data/projects.json";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type Project = {
  title: { EN: string; TR: string };
  description: { EN: string; TR: string };
  shortDescription: { EN: string; TR: string };
  meta: { title: { EN: string; TR: string }; description: { EN: string; TR: string } };
  codeLink?: string;
  imageFile: string;
  projectSite?: string;
  url: string;
  technologies: string[];
};

const locale = "TR"; // veya "TR" olarak değiştirilebilir

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const allProjects = projects as Project[];
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-16 w-full max-w-[1400px] mx-auto px-2 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.url}
              initial={{ opacity: 0, scaleY: 0.8, y: 60 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0.8, y: 60 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              layout
              style={{ transformOrigin: "top center" }}
              className="bg-[#18181b] rounded-lg shadow-md p-8 flex flex-col hover:scale-[1.03] transition border border-[#232329] min-w-0"
            >
              <div className="w-full max-h-48 overflow-hidden rounded group">
                <img
                  src={"/" + project.imageFile}
                  alt={project.title[locale]}
                  className="w-full max-h-48 object-cover aspect-auto object-top group-hover:object-bottom transition-all duration-1000"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 mt-4">{project.title[locale]}</h3>
              <p className="text-gray-400 mb-4">{project.shortDescription[locale]}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-900/40 text-blue-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex mt-auto">
                <a
                  href={`/project/${project.url.split('/').pop()}`}
                  className="px-5 py-2 rounded bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition w-full text-center"
                >
                  View Project
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
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
}

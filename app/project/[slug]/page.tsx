"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
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
  // Carousel media array: icon, image, video (if exists)
  // Carousel media array: icon, images, video (if exists)
  const mediaSlides: { type: string; src: string }[] = [];
  if (project.iconFile && project.iconFile.trim() !== "") {
    mediaSlides.push({ type: "icon", src: "/" + project.iconFile });
  }
  if (Array.isArray(project.imageFiles)) {
  project.imageFiles.filter((img: string) => typeof img === "string" && img.trim() !== "").forEach((img: string) => {
      mediaSlides.push({ type: "image", src: "/" + img });
    });
  }
  if (project.videoFile && project.videoFile.trim() !== "") {
    mediaSlides.push({ type: "video", src: "/" + project.videoFile });
  }

  // Swiper ref for slide navigation
  const swiperRef = React.useRef<SwiperCore | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto py-16 px-8 md:px-4 flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 w-full items-start">
          {/* Left: Carousel & thumbnails */}
          <div className="w-full flex flex-col justify-center items-center group mb-8 md:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="w-full max-h-96"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {mediaSlides.length > 0 ? (
                mediaSlides.map((media, idx) => (
                  <SwiperSlide key={idx}>
                    {media.type === "icon" && (
                      <img src={media.src} alt="icon" className="w-32 h-32 object-contain mx-auto" />
                    )}
                    {media.type === "image" && (
                      <img src={media.src} alt={project.title[locale] + " image"} className="w-full max-h-96 object-cover aspect-auto object-top group-hover:object-bottom transition-all duration-1000" />
                    )}
                    {media.type === "video" && (
                      <video
                        src={media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-96 object-contain mx-auto"
                        style={{ objectFit: 'contain', width: '100%', height: '24rem', display: 'block', margin: 'auto' }}
                      />
                    )}
                  </SwiperSlide>
                ))
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-800 text-white">No media available</div>
              )}
            </Swiper>
            {/* Thumbnails below carousel */}
            {mediaSlides.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center w-full">
                {mediaSlides.map((media, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => swiperRef.current?.slideTo(idx)}
                    className="border rounded bg-gray-800 hover:bg-gray-700 p-1 focus:outline-none"
                    style={{ width: 48, height: 48 }}
                  >
                    {media.type === "icon" && (
                      <img src={media.src} alt="icon thumb" className="w-full h-full object-contain" />
                    )}
                    {media.type === "image" && (
                      <img src={media.src} alt="image thumb" className="w-full h-full object-cover" />
                    )}
                    {media.type === "video" && (
                      <span className="flex items-center justify-center w-full h-full">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#222" />
                          <polygon points="12,10 24,16 12,22" fill="#fff" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Right: Details */}
          <div className="w-full flex flex-col gap-8 items-center md:items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white text-center md:text-left">{project.title[locale]}</h1>
            <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="bg-blue-900/60 text-blue-200 px-4 py-2 rounded-xl text-lg font-semibold shadow">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-gray-200 mb-6 w-full text-left">
              {descriptionContent}
            </div>
            <div className="flex gap-6 mt-2 justify-center md:justify-start">
              {project.codeLink && (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-white text-lg font-bold hover:bg-gray-700 transition shadow-lg">
                  {l.source}
                </a>
              )}
              {project.projectSite && (
                <a href={project.projectSite} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-green-700 text-white text-lg font-bold hover:bg-gray-700 transition shadow-lg">
                  {l.live}
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

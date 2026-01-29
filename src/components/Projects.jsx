import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "SkinStric Skin Care Platform",
    description:
      "Professional dermatology web app with patient portal, image upload/processing for skin analysis, and API integrations.",
    liveUrl: "https://skinstricapp-fresh.vercel.app/",
    tech: ["React", "Tailwind", "REST APIs"],
    imageUrl: "/images/skinstric-preview.png",
  },
  {
    title: "CineScope",
    description:
      "Movie and TV browser using the OMDb API with modals, skeleton loaders, and smooth UI interactions.",
    liveUrl: "https://cinescope-project.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript", "OMDb API"],
    imageUrl: "/images/cinescope-preview.png",
  },
  {
    title: "Library Project",
    description:
      "Online library UI where users can browse, filter, and sort books by price or rating.",
    liveUrl: "https://libraryproject-beryl.vercel.app",
    tech: ["React", "CSS3", "JavaScript"],
    imageUrl: "/images/library-screenshot.png",
  },
  {
    title: "Ultraverse NFT Marketplace",
    description:
      "NFT marketplace with dark/light themes, smooth navigation, and a clean React front end.",
    liveUrl: "https://ultraverse-nft-project.vercel.app/",
    tech: ["React", "CSS3", "React Router"],
    imageUrl: "/images/ultraverse-screenshot.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 py-16 bg-black text-white border-t border-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-300 mb-8">
          A few real-world builds you can actually click into.
        </p>

        {/* 4 cards in one row on large screens */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
  key={project.title}
  className="flex flex-col bg-[#020617] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
>
  {/* Image strip – small height cap */}
  <div className="w-full bg-[#020617]">
    <img
      src={project.imageUrl}
      alt={`${project.title} screenshot`}
      className="w-full h-32 object-cover md:h-36"
    />
  </div>

  <div className="flex flex-col p-5 h-full">
    <h3 className="text-lg font-semibold mb-2">
      {project.title}
    </h3>
    <p className="text-sm text-gray-300 leading-relaxed mb-4">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-100 tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="mt-auto pt-3 border-t border-gray-800">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400 hover:text-indigo-300"
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        View live
      </a>
    </div>
  </div>
</article>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

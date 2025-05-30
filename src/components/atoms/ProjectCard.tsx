import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group cursor-pointer border border-slate-700 hover:border-orange-500/30">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-8">
        <h3 className="text-white text-2xl font-display font-bold mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-800 text-orange-400 text-sm font-mono rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

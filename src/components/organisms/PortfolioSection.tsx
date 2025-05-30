import React from "react";
import ProjectCard from "../atoms/ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "/blog-placeholder-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/blog-placeholder-2.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/blog-placeholder-3.jpg",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing creative design and smooth animations, built with performance optimization in mind.",
      image: "/blog-placeholder-4.jpg",
      technologies: ["Astro", "React", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  return (
    <section className="bg-slate-800 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-white text-6xl font-display font-bold mb-6">
            My Portfolio
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

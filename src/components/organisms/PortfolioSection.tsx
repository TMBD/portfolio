import React from "react";
import ProjectCard from "../atoms/ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Moderno",
      description:
        "Uma plataforma de e-commerce moderna construída com React e Node.js, com gerenciamento de inventário em tempo real e processamento seguro de pagamentos.",
      image: "/blog-placeholder-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Um dashboard de analytics colaborativo com atualizações em tempo real, funcionalidade de arrastar e soltar e recursos de colaboração em equipe.",
      image: "/blog-placeholder-2.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "App de Clima Responsivo",
      description:
        "Um dashboard de clima responsivo que fornece previsões detalhadas, mapas interativos e alertas meteorológicos baseados em localização.",
      image: "/blog-placeholder-3.jpg",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Portfólio Pessoal",
      description:
        "Um site de portfólio moderno apresentando design criativo e animações suaves, construído com otimização de performance em mente.",
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
            Meu Portfólio
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Aqui estão alguns dos meus projetos recentes que demonstram minhas
            habilidades e paixão por criar experiências digitais incríveis.
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
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
}

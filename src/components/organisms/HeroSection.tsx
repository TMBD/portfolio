import React from "react";
import Button from "../atoms/Button";
import SkillBadge from "../atoms/SkillBadge";

export default function HeroSection() {
  const skills = [
    "HTML5",
    "CSS",
    "Javascript",
    "Node.js",
    "React",
    "Git",
    "Github",
  ];

  return (
    <section className="bg-slate-900 bg-grid-pattern min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-12">
          <div className="space-y-8">
            {/* Terminal-like greeting */}
            <div className="font-mono text-xs text-gray-400 mb-6">
              <span className="text-emerald-400">$</span> whoami
            </div>

            <div className="border-l-4 border-gradient-to-b from-orange-500 to-cyan-500 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-cyan-500"></div>
              <h2 className="text-white text-2xl font-display font-light tracking-wide">
                Eu sou{" "}
                <span className="font-bold bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                  Jucelito Silva
                </span>
              </h2>
            </div>

            <div className="space-y-4 gap-4">
              <h3 className="text-white text-6xl font-display font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Desenvolvedor
                </span>
                <span className="bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent text-glow">
                  Frontend
                </span>
              </h3>
            </div>

            {/* Code snippet decoration */}
            <div className="font-mono text-lg text-gray-500 mt-8 space-y-2">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">paixao</span> ={" "}
                <span className="text-emerald-400">"programar"</span>;
              </div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">experiencia</span> ={" "}
                <span className="text-orange-400">10</span>;
              </div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">criatividade</span> ={" "}
                <span className="text-emerald-400">"ilimitada"</span>;
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <Button variant="primary">
              <span className="font-display font-semibold text-lg">
                Tem um projeto?
              </span>
            </Button>
            <Button variant="secondary">
              <span className="font-display font-semibold text-lg">
                Meu currículo
              </span>
            </Button>
          </div>

          {/* Skills with modern styling */}
          <div className="pt-12">
            <div className="font-mono text-lg text-gray-400 mb-6">
              <span className="text-emerald-400">$</span> cat habilidades.json
            </div>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <SkillBadge
                    name={skill}
                    className="font-mono text-xl text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer
                              border border-slate-700 hover:border-orange-500/50 px-4 py-3 rounded-lg
                              bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm
                              hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image with modern effects */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative group">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
            </div>

            {/* Orange circle background with glow */}
            <div className="w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full absolute -z-10 top-4 left-4 blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile Image */}
            <div className="w-96 h-96 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center relative z-10 border-2 border-slate-700 group-hover:border-orange-500/50 transition-all duration-500">
              <img
                src="/blog-placeholder-about.jpg"
                alt="Jucelito Silva"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Decorative code elements */}
            <div className="absolute -top-12 -right-12 text-orange-500 text-6xl opacity-60 font-mono animate-bounce">
              &lt;/&gt;
            </div>
            <div className="absolute -bottom-12 -left-12 text-cyan-500 text-6xl opacity-60 font-mono animate-bounce delay-500">
              {}
            </div>
            <div className="absolute top-1/2 -right-16 text-purple-500 text-5xl opacity-60 font-mono animate-pulse">
              [ ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

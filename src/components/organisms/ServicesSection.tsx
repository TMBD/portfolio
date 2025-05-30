import React from "react";
import ServiceCard from "../molecules/ServiceCard";

// Ícones SVG simples para os serviços
const WebsiteIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h8v2H6v-2zm0 4h10v2H6v-2z" />
  </svg>
);

const AppIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm2 2h6v2H9V6zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" />
  </svg>
);

const HostingIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 2v2h16V3H4zm0 6h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 2v2h16v-2H4zm0 6h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 2v2h16v-2H4z" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content - Services */}
        <div className="space-y-12">
          <div className="relative">
            {/* Orange vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-500"></div>

            {/* Orange dots */}
            <div className="absolute left-7 top-12 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute left-7 top-40 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute left-7 top-68 w-3 h-3 bg-orange-500 rounded-full"></div>

            <div className="pl-20 space-y-6">
              <ServiceCard
                icon={<WebsiteIcon />}
                title="Website Development"
                isActive={true}
              />
              <ServiceCard icon={<AppIcon />} title="App Development" />
              <ServiceCard icon={<HostingIcon />} title="Website Hosting" />
            </div>
          </div>
        </div>

        {/* Right Content - About Me */}
        <div className="space-y-10">
          <h2 className="text-white text-6xl font-display font-bold">
            About me
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed">
            I started my software journey from photography. Through that, I
            learned to love the process of creating from scratch. Since then,
            this has led me to software development as it fulfills my love for
            learning and building things.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-10 pt-12">
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-white mb-3">
                120 <span className="text-orange-500">+</span>
              </div>
              <div className="text-gray-400 text-lg">Completed</div>
              <div className="text-gray-400 text-lg">Projects</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-display font-bold text-white mb-3">
                95 <span className="text-orange-500">%</span>
              </div>
              <div className="text-gray-400 text-lg">Client</div>
              <div className="text-gray-400 text-lg">satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-display font-bold text-white mb-3">
                10 <span className="text-orange-500">+</span>
              </div>
              <div className="text-gray-400 text-lg">Years of</div>
              <div className="text-gray-400 text-lg">experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

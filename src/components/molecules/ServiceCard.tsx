import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  isActive = false,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`flex items-center gap-6 p-6 rounded-lg transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                        : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                    }`}
    >
      <div
        className={`p-4 rounded-lg ${
          isActive ? "bg-white/20" : "bg-slate-800"
        }`}
      >
        {icon}
      </div>
      <span className="text-xl font-display font-semibold">{title}</span>
    </div>
  );
}

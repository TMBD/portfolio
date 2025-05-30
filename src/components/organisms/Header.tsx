import React from "react";
import NavigationLink from "../molecules/NavigationLink";

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = "/" }: HeaderProps) {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50 px-6 py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-display font-bold tracking-tight">
          <a
            href="/"
            className="hover:text-orange-500 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-orange-500 font-mono text-lg">&lt;</span>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Jucelito Silva
            </span>
            <span className="text-orange-500 font-mono text-lg">/&gt;</span>
          </a>
        </div>

        <nav className="flex items-center gap-10">
          <NavigationLink href="/" isActive={currentPath === "/"}>
            <span className="font-mono text-lg text-cyan-400">[</span>
            <span className="font-sans text-lg">Home</span>
            <span className="font-mono text-lg text-cyan-400">]</span>
          </NavigationLink>
          <NavigationLink href="/about" isActive={currentPath === "/about"}>
            <span className="font-mono text-lg text-purple-400">[</span>
            <span className="font-sans text-lg">About</span>
            <span className="font-mono text-lg text-purple-400">]</span>
          </NavigationLink>
          <NavigationLink href="/blog" isActive={currentPath === "/blog"}>
            <span className="font-mono text-lg text-emerald-400">[</span>
            <span className="font-sans text-lg">Blog</span>
            <span className="font-mono text-lg text-emerald-400">]</span>
          </NavigationLink>
        </nav>
      </div>
    </header>
  );
}

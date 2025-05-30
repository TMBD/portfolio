import React, { useState } from "react";
import NavigationLink from "../molecules/NavigationLink";

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavigationLink href="/" isActive={currentPath === "/"}>
            <span className="font-mono text-lg text-cyan-400">[</span>
            <span className="font-sans text-lg">Início</span>
            <span className="font-mono text-lg text-cyan-400">]</span>
          </NavigationLink>
          <NavigationLink href="/about" isActive={currentPath === "/about"}>
            <span className="font-mono text-lg text-purple-400">[</span>
            <span className="font-sans text-lg">Sobre</span>
            <span className="font-mono text-lg text-purple-400">]</span>
          </NavigationLink>
          <NavigationLink href="/blog" isActive={currentPath === "/blog"}>
            <span className="font-mono text-lg text-emerald-400">[</span>
            <span className="font-sans text-lg">Blog</span>
            <span className="font-mono text-lg text-emerald-400">]</span>
          </NavigationLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-orange-500 transition-colors duration-300 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800/50 mt-6 pt-6">
          <nav className="flex flex-col space-y-6">
            <NavigationLink
              href="/"
              isActive={currentPath === "/"}
              className="block py-2"
            >
              <span className="font-mono text-lg text-cyan-400">[</span>
              <span className="font-sans text-lg mx-2">Início</span>
              <span className="font-mono text-lg text-cyan-400">]</span>
            </NavigationLink>
            <NavigationLink
              href="/about"
              isActive={currentPath === "/about"}
              className="block py-2"
            >
              <span className="font-mono text-lg text-purple-400">[</span>
              <span className="font-sans text-lg mx-2">Sobre</span>
              <span className="font-mono text-lg text-purple-400">]</span>
            </NavigationLink>
            <NavigationLink
              href="/blog"
              isActive={currentPath === "/blog"}
              className="block py-2"
            >
              <span className="font-mono text-lg text-emerald-400">[</span>
              <span className="font-sans text-lg mx-2">Blog</span>
              <span className="font-mono text-lg text-emerald-400">]</span>
            </NavigationLink>
          </nav>
        </div>
      )}
    </header>
  );
}

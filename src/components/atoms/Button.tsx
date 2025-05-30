import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-10 py-5 font-display font-semibold text-lg transition-all duration-300 cursor-pointer relative overflow-hidden group";

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
      text-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-500/25 
      border border-orange-500/20 hover:border-orange-400/40
      hover:scale-105 active:scale-95
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent 
      before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
    `,
    secondary: `
      border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white 
      rounded-lg backdrop-blur-sm bg-slate-900/50 hover:bg-orange-500
      shadow-lg hover:shadow-xl hover:shadow-orange-500/25
      hover:scale-105 active:scale-95
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/20 before:to-transparent 
      before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
    `,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-3">
        {variant === "primary" && (
          <span className="font-mono text-lg opacity-80">&gt;</span>
        )}
        {children}
        {variant === "secondary" && (
          <span className="font-mono text-lg opacity-80">_</span>
        )}
      </span>
    </button>
  );
}

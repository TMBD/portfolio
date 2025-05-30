import React from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export default function NavigationLink({
  href,
  children,
  isActive = false,
  className = "",
}: NavigationLinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-300 hover:text-white transition-colors duration-300 ${
        isActive ? "text-white" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}

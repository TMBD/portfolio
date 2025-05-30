import React from "react";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export default function SkillBadge({ name, className = "" }: SkillBadgeProps) {
  const defaultClasses = "text-gray-400 text-lg font-mono font-medium";

  return <div className={className || defaultClasses}>{name}</div>;
}

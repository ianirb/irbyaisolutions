import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export default function IndustryCard({ name, description, icon: Icon }: IndustryCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
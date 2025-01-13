import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-black to-purple-900/20 border border-purple-500/20 hover:border-purple-500 transition-all duration-300 group">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
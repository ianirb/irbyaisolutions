import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description,
  onClick 
}: ServiceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
    >
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
}
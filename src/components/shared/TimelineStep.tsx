import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function TimelineStep({ step, title, description, icon: Icon, isLast }: TimelineStepProps) {
  return (
    <div className="relative flex items-start gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent" />
      )}
      
      {/* Icon and step number */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-white">
          {step}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
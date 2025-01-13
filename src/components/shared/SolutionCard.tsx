import React, { useState } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  details?: string[];
  onCtaClick: () => void;
}

export default function SolutionCard({ 
  title, 
  description, 
  icon: Icon,
  cta,
  details,
  onCtaClick
}: SolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative">
      <div 
        className={`
          p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black 
          border border-blue-500/20 transition-all duration-300
          hover:border-blue-500/50 h-full flex flex-col
          ${isExpanded ? 'border-blue-500/50' : ''}
        `}
      >
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-500/10">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
        </p>

        {/* Details (shown when expanded) */}
        {isExpanded && details && (
          <ul className="space-y-2 mb-6">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-blue-400">•</span>
                {detail}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button 
            variant="primary"
            className="w-full justify-center !py-2"
            onClick={onCtaClick}
          >
            {cta}
          </Button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Learn More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
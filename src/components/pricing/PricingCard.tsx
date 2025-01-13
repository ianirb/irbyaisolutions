import React from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import Button from '../shared/Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  variant?: 'default' | 'featured';
  isExpanded: boolean;
  onToggle: () => void;
  onAction: () => void;
  serviceName?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  variant = 'default',
  isExpanded,
  onToggle,
  onAction,
  serviceName
}: PricingCardProps) {
  const isFeatured = variant === 'featured';
  
  // Only show the service name for custom plans, otherwise show the standard title
  const displayTitle = title === 'Custom' ? serviceName : title;
  
  return (
    <div 
      className={`
        p-6 rounded-xl transition-all duration-300
        ${isFeatured 
          ? 'bg-gradient-to-br from-purple-900/30 to-black border-2 border-purple-500' 
          : 'bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20'
        }
        ${isExpanded ? 'transform scale-102' : ''}
      `}
    >
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-white mb-2">{displayTitle}</h4>
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
        </div>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="mb-6">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm">
            {isExpanded ? 'Show Less' : 'View Features'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {isExpanded && (
          <ul className="mt-4 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className={`w-5 h-5 mt-0.5 ${isFeatured ? 'text-purple-400' : 'text-blue-400'}`} />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button
        variant={isFeatured ? 'primary' : 'secondary'}
        onClick={onAction}
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </div>
  );
}
import React from 'react';
import { solutions } from '../data/solutions';
import SolutionCard from './shared/SolutionCard';
import TypewriterText from './shared/TypewriterText';

interface SolutionsProps {
  onServiceSelect?: (serviceName: string) => void;
}

export default function Solutions({ onServiceSelect }: SolutionsProps) {
  const handleServiceSelect = (serviceName: string) => {
    // Store the selected service name in sessionStorage
    sessionStorage.setItem('selectedService', serviceName);
    onServiceSelect?.(serviceName);
  };

  return (
    <section id="solutions" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <TypewriterText 
            text="Innovative Solutions for Modern Business"
            className="text-4xl font-bold text-white mb-4"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
              onCtaClick={() => handleServiceSelect(solution.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
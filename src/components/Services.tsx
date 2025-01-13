import React from 'react';
import TypewriterText from './shared/TypewriterText';
import ServiceCard from './shared/ServiceCard';
import { solutions } from '../data/solutions';

interface ServicesProps {
  id?: string;
  onServiceSelect?: (serviceName: string) => void;
}

export default function Services({ id, onServiceSelect }: ServicesProps) {
  const handleServiceSelect = (serviceName: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceName);
    }
  };

  return (
    <section id={id} className="py-12 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <TypewriterText 
            text="Services Built for the Future"
            className="text-4xl font-bold text-white mb-4"
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform your business operations
            and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <ServiceCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description.split('.')[0] + '.'}
              onClick={() => handleServiceSelect(solution.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
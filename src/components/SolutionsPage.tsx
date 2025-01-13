import React, { useEffect, useRef } from 'react';
import TypewriterText from './shared/TypewriterText';
import Button from './shared/Button';
import Solutions from './Solutions';
import TimelineStep from './shared/TimelineStep';
import IndustriesSection from './IndustriesSection';
import { timelineSteps } from '../data/timeline';

interface SolutionsPageProps {
  onGetStarted: () => void;
  onPricing: () => void;
}

export default function SolutionsPage({ onGetStarted, onPricing }: SolutionsPageProps) {
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService && solutionsRef.current) {
      // Scroll to solutions section
      solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
      // Clear the stored service
      sessionStorage.removeItem('selectedService');
    }
  }, []);

  const handleServiceSelect = (serviceName: string) => {
    onPricing();
    // Store the selected service for the pricing page
    sessionStorage.setItem('selectedService', serviceName);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterText
              text="Innovative AI Solutions for Every Business Challenge"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />
            <p className="text-xl text-gray-300 mb-8">
              Discover how Irby AI Solutions can streamline your operations, boost your ROI, and transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onGetStarted}>
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <div ref={solutionsRef}>
        <Solutions onServiceSelect={handleServiceSelect} />
      </div>

      {/* Rest of the sections remain unchanged */}
      <IndustriesSection onGetStarted={onGetStarted} />
      
      {/* How It Works Section */}
      <section className="py-12">
        {/* ... rest of the component remains the same ... */}
      </section>
    </div>
  );
}
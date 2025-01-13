import React from 'react';
import TypewriterText from '../shared/TypewriterText';

export default function PricingHero() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <TypewriterText 
            text="Simple and Transparent Pricing"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />
          <h2 className="text-2xl text-blue-400 mb-4">
            Flexible Plans for Every Business
          </h2>
          <p className="text-xl text-gray-300">
            Irby AI Solutions offers flexible pricing options tailored to your business needs. 
            Choose a Standard plan for proven solutions or a Custom plan for fully tailored systems. 
            Explore our offerings below.
          </p>
        </div>
      </div>
    </section>
  );
}
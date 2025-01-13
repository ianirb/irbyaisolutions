import React from 'react';
import TypewriterText from '../shared/TypewriterText';

export default function TestimonialsHero() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <TypewriterText 
            text="What Our Clients Say"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />
          <h2 className="text-2xl text-blue-400 mb-4">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-xl text-gray-300">
            Irby AI Solutions has helped businesses from healthcare to home services automate, 
            elevate, and dominate their workflows. Don't just take our word for it—see what 
            our clients have to say!
          </p>
        </div>
      </div>
    </section>
  );
}
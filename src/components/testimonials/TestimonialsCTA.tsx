import React from 'react';
import Button from '../shared/Button';

interface TestimonialsCTAProps {
  onGetStarted?: () => void;
}

export default function TestimonialsCTA({ onGetStarted }: TestimonialsCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our clients' success stories are just the beginning. Contact us today to see how 
            Irby AI Solutions can revolutionize your business operations.
          </p>
          <Button onClick={onGetStarted}>Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
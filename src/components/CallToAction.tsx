import React from 'react';
import { RocketIcon } from 'lucide-react';
import Button from './shared/Button';

interface CallToActionProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export default function CallToAction({ onGetStarted, onExplore }: CallToActionProps) {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Launch Your Business Into the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Join hundreds of businesses already transforming their operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button icon={RocketIcon} onClick={onGetStarted}>
              Book a Free Consultation
            </Button>
            <Button variant="secondary" onClick={onExplore}>
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
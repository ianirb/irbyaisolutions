import React from 'react';
import { RocketIcon } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';
import Button from './shared/Button';

interface HeroProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export default function Hero({ onGetStarted, onExplore }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] bg-black overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black">
        <div className="stars"></div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <TypewriterText 
              text="Your Business. Supercharged with AI."
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
            />
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Automate workflows, elevate performance, and dominate your market.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              icon={RocketIcon} 
              onClick={onGetStarted}
              className="mb-4 md:mb-0"
            >
              Get Started Now
            </Button>
            <Button 
              variant="secondary" 
              onClick={onExplore}
            >
              Why Irby AI?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
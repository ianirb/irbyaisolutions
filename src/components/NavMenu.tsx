import React from 'react';
import { X } from 'lucide-react';
import NavLink from './shared/NavLink';
import Button from './shared/Button';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted?: () => void;
  onSolutions?: () => void;
  onTestimonials?: () => void;
  onPricing?: () => void;
}

export default function NavMenu({ 
  isOpen, 
  onClose, 
  onGetStarted, 
  onSolutions,
  onTestimonials,
  onPricing
}: NavMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex flex-col items-center space-y-8 mt-16">
          <NavLink 
            href="#" 
            onClick={() => {
              onClose();
              onSolutions?.();
            }}
          >
            Solutions
          </NavLink>
          <NavLink 
            href="#" 
            onClick={() => {
              onClose();
              onTestimonials?.();
            }}
          >
            Testimonials
          </NavLink>
          <NavLink 
            href="#" 
            onClick={() => {
              onClose();
              onPricing?.();
            }}
          >
            Pricing
          </NavLink>
          <Button 
            variant="primary"
            onClick={() => {
              onClose();
              onGetStarted?.();
            }}
            className="w-full justify-center"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </div>
  );
}
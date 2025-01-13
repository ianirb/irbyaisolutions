import React from 'react';
import { Menu } from 'lucide-react';
import NavMenu from './NavMenu';
import NavLink from './shared/NavLink';
import { useNavMenu } from '../hooks/useNavMenu';
import Button from './shared/Button';
import Logo from './shared/Logo';

interface HeaderProps {
  onGetStarted?: () => void;
  onSolutions?: () => void;
  onTestimonials?: () => void;
  onPricing?: () => void;
}

export default function Header({ 
  onGetStarted, 
  onSolutions, 
  onTestimonials,
  onPricing 
}: HeaderProps) {
  const { isOpen, toggle } = useNavMenu();

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo onClick={handleLogoClick} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#" onClick={onSolutions}>Solutions</NavLink>
            <NavLink href="#" onClick={onTestimonials}>Testimonials</NavLink>
            <NavLink href="#" onClick={onPricing}>Pricing</NavLink>
            <Button
              variant="primary"
              onClick={onGetStarted}
              className="!py-2"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggle}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <NavMenu 
        isOpen={isOpen} 
        onClose={toggle} 
        onGetStarted={onGetStarted}
        onSolutions={onSolutions}
        onTestimonials={onTestimonials}
        onPricing={onPricing}
      />
    </header>
  );
}
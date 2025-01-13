import React from 'react';
import { Star, TrendingUp, Users, Building } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';
import TestimonialCard from './shared/TestimonialCard';
import MetricCard from './shared/MetricCard';
import Button from './shared/Button';

interface SocialProofProps {
  id?: string;
  onViewMore?: () => void;
}

const metrics = [
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: TrendingUp, value: "45%", label: "Avg. Efficiency Increase" },
  { icon: Star, value: "4.9", label: "Client Rating" },
  { icon: Building, value: "25+", label: "Enterprise Solutions" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "TechFlow Inc",
    testimonial: "Irby AI Solutions transformed our workflow. We've seen a 40% increase in productivity within just two months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateCorp",
    testimonial: "The AI-powered lead generation has been a game-changer. Our conversion rates have doubled since implementation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  }
];

export default function SocialProof({ id, onViewMore }: SocialProofProps) {
  return (
    <section id={id} className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <TypewriterText 
            text="Businesses Are Winning with Irby AI"
            className="text-4xl font-bold text-white mb-3"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            variant="secondary"
            onClick={onViewMore}
            className="mx-auto"
          >
            View More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import TestimonialsHero from './TestimonialsHero';
import TestimonialCarousel from './TestimonialCarousel';
import FeaturedTestimonial from './FeaturedTestimonial';
import TestimonialMetrics from './TestimonialMetrics';
import TestimonialGrid from './TestimonialGrid';
import TestimonialsCTA from './TestimonialsCTA';

interface TestimonialsPageProps {
  onGetStarted?: () => void;
}

export default function TestimonialsPage({ onGetStarted }: TestimonialsPageProps) {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <TestimonialsHero />
      <TestimonialCarousel />
      <TestimonialMetrics />
      <FeaturedTestimonial />
      <TestimonialGrid />
      <TestimonialsCTA onGetStarted={onGetStarted} />
    </div>
  );
}
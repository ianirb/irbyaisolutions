import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  testimonial,
  image 
}: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 relative">
      <Quote className="w-8 h-8 text-purple-400 absolute -top-4 -left-4" />
      <div className="flex items-start gap-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-300 mb-4">{testimonial}</p>
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sm text-gray-400">{role} at {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
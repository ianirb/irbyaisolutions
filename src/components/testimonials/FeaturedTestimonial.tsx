import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function FeaturedTestimonial() {
  const featured = testimonials.find(t => t.featured) || testimonials[0];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20">
            <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-400" />
            <blockquote className="text-xl text-gray-300 mb-6">
              "{featured.quote}"
            </blockquote>
            
            {featured.metrics && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {featured.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-blue-500/10 flex items-center gap-3"
                  >
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              <img
                src={featured.image}
                alt={featured.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">{featured.author}</p>
                <p className="text-gray-400">{featured.role} at {featured.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
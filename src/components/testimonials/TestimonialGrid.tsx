import React from 'react';
import { testimonials } from '../../data/testimonials';
import { TrendingUp } from 'lucide-react';

export default function TestimonialGrid() {
  const groupedTestimonials = testimonials.reduce((acc, testimonial) => {
    if (!acc[testimonial.industry]) {
      acc[testimonial.industry] = [];
    }
    acc[testimonial.industry].push(testimonial);
    return acc;
  }, {} as Record<string, typeof testimonials>);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {Object.entries(groupedTestimonials).map(([industry, industryTestimonials]) => (
            <div key={industry} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">{industry}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industryTestimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20"
                  >
                    <blockquote className="text-gray-300 mb-4">
                      "{testimonial.quote}"
                    </blockquote>

                    {testimonial.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {testimonial.metrics.map((metric, idx) => (
                          <div 
                            key={idx}
                            className="p-2 rounded-lg bg-purple-500/10 flex items-center gap-2"
                          >
                            <TrendingUp className="w-4 h-4 text-purple-400" />
                            <div>
                              <div className="text-sm font-bold text-white">{metric.value}</div>
                              <div className="text-xs text-gray-400">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
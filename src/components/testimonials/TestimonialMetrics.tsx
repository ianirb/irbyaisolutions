import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';
import MetricCard from '../shared/MetricCard';

const metrics = [
  {
    icon: Users,
    value: "100+",
    label: "Businesses Served"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Average Lead Conversion Improvement"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Availability"
  }
];

export default function TestimonialMetrics() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
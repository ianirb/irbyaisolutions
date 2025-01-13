import React from 'react';
import { CheckCircle2, Shield, HeadphonesIcon } from 'lucide-react';

const valueProps = [
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Join hundreds of businesses achieving measurable success with our solutions"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protect your data"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert assistance available around the clock for all clients"
  }
];

export default function PricingValueProps() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 text-center"
            >
              <prop.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Zap, Shield, Cpu, BarChart3, Clock, Workflow } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';

interface FeaturesProps {
  id?: string;
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Process thousands of data points in milliseconds with our optimized AI algorithms."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and security protocols to protect your sensitive data."
  },
  {
    icon: Cpu,
    title: "Advanced AI Models",
    description: "Cutting-edge machine learning models trained on industry-specific data."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor and analyze performance metrics with live dashboards."
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Non-stop automated processes that work while you sleep."
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Tailor automation sequences to your specific business needs."
  }
];

export default function Features({ id }: FeaturesProps) {
  return (
    <section id={id} className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <TypewriterText 
            text="Powered by Advanced Technology"
            className="text-4xl font-bold text-white mb-3"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with enterprise-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/10 to-black border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Check } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';
import Button from './shared/Button';

interface PricingProps {
  id?: string;
}

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "per month",
    description: "Perfect for small businesses starting with AI",
    features: [
      "AI Lead Generation (up to 1000 leads/mo)",
      "Basic Workflow Automation",
      "Email Marketing Integration",
      "5 Custom AI Models",
      "8/5 Support"
    ]
  },
  {
    name: "Growth",
    price: "$999",
    period: "per month",
    description: "Ideal for growing companies",
    features: [
      "AI Lead Generation (up to 5000 leads/mo)",
      "Advanced Workflow Automation",
      "Full CRM Integration",
      "15 Custom AI Models",
      "24/7 Priority Support",
      "Custom Analytics Dashboard"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored solution",
    description: "For large-scale operations",
    features: [
      "Unlimited AI Lead Generation",
      "Enterprise Workflow Automation",
      "Full System Integration",
      "Unlimited Custom AI Models",
      "24/7 Dedicated Support",
      "Custom Development",
      "On-Premise Options"
    ]
  }
];

export default function Pricing({ id }: PricingProps) {
  return (
    <section id={id} className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <TypewriterText 
            text="Transparent Pricing, Powerful Results"
            className="text-4xl font-bold text-white mb-3"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-900/30 to-black border-2 border-purple-500'
                  : 'bg-gradient-to-br from-gray-900/30 to-black border border-gray-700'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
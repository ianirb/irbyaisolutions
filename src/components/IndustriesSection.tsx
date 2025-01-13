import React, { useState } from 'react';
import TypewriterText from './shared/TypewriterText';
import IndustryCard from './shared/IndustryCard';
import IndustryFilter from './shared/IndustryFilter';
import Button from './shared/Button';
import { industries } from '../data/industries';

interface IndustriesSectionProps {
  onGetStarted: () => void;
}

export default function IndustriesSection({ onGetStarted }: IndustriesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const filteredIndustries = selectedIndustry
    ? industries.filter(industry => industry.name === selectedIndustry)
    : industries;

  return (
    <section className="py-12 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <TypewriterText
              text="AI Solutions Tailored to Every Industry"
              className="text-3xl font-bold text-white mb-4"
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No matter your business, our AI-powered tools are designed to help you automate processes, 
              engage customers, and scale effortlessly.
            </p>
          </div>

          <IndustryFilter
            selectedIndustry={selectedIndustry}
            onIndustryChange={setSelectedIndustry}
            industries={industries.map(i => i.name)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredIndustries.map((industry, index) => (
              <IndustryCard
                key={index}
                {...industry}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't See Your Industry Listed?
              </h3>
              <p className="text-gray-300 mb-6">
                We work with businesses of all types. Let's discuss how AI can transform your operations.
              </p>
              <Button onClick={onGetStarted}>
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Button from '../shared/Button';

export default function PricingCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today, and we'll help you choose the perfect solution for your business needs.
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
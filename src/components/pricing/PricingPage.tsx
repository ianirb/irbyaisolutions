import React from 'react';
import PricingHero from './PricingHero';
import PricingValueProps from './PricingValueProps';
import PricingTables from './PricingTables';
import PricingFAQ from './PricingFAQ';
import PricingCTA from './PricingCTA';

interface PricingPageProps {
  onRequestQuote: (serviceName: string, isCustom?: boolean) => void;
}

export default function PricingPage({ onRequestQuote }: PricingPageProps) {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <PricingHero />
      <PricingValueProps />
      <PricingTables onRequestQuote={onRequestQuote} />
      <PricingFAQ />
      <PricingCTA onRequestQuote={() => onRequestQuote('General Inquiry')} />
    </div>
  );
}
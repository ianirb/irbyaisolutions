import React, { useState, useEffect, useRef } from 'react';
import { pricingPlans } from '../../data/pricing';
import PricingCard from './PricingCard';

interface PricingTablesProps {
  onRequestQuote: (serviceName: string, isCustom?: boolean) => void;
}

export default function PricingTables({ onRequestQuote }: PricingTablesProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const initialScrollComplete = useRef(false);

  useEffect(() => {
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService && !initialScrollComplete.current) {
      setTimeout(() => {
        const element = document.getElementById(selectedService.replace(/\s+/g, '-').toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setExpandedService(`${selectedService}-standard`);
          initialScrollComplete.current = true;
        }
        sessionStorage.removeItem('selectedService');
      }, 100);
    }
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {pricingPlans.map((service) => (
            <div 
              key={service.name} 
              id={service.name.replace(/\s+/g, '-').toLowerCase()}
              className="space-y-6 scroll-mt-24"
            >
              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <PricingCard
                  title="Standard"
                  price={service.standard.price}
                  description={service.standard.description}
                  features={service.standard.features}
                  cta="Choose Standard Plan"
                  serviceName={service.name}
                  isExpanded={expandedService === `${service.name}-standard`}
                  onToggle={() => setExpandedService(
                    expandedService === `${service.name}-standard` 
                      ? null 
                      : `${service.name}-standard`
                  )}
                  onAction={() => onRequestQuote(service.name, false)}
                />
                <PricingCard
                  title="Custom"
                  price="Custom"
                  description={service.custom.description}
                  features={service.custom.features}
                  cta="Request Custom Quote"
                  serviceName={service.name}
                  variant="featured"
                  isExpanded={expandedService === `${service.name}-custom`}
                  onToggle={() => setExpandedService(
                    expandedService === `${service.name}-custom` 
                      ? null 
                      : `${service.name}-custom`
                  )}
                  onAction={() => onRequestQuote(service.name, true)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
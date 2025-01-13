import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProblemSolution from './components/ProblemSolution';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ConsultationPage from './components/ConsultationPage';
import SolutionsPage from './components/SolutionsPage';
import TestimonialsPage from './components/testimonials/TestimonialsPage';
import PricingPage from './components/pricing/PricingPage';

export interface SelectedService {
  name: string;
  isCustom?: boolean;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'consultation' | 'solutions' | 'testimonials' | 'pricing'>('home');
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);

  const handleServiceSelect = (serviceName: string) => {
    // Store the selected service for the solutions page
    sessionStorage.setItem('selectedService', serviceName);
    setCurrentPage('solutions');
  };

  const handleRequestQuote = (serviceName: string, isCustom?: boolean) => {
    setSelectedService({ name: serviceName, isCustom });
    setCurrentPage('consultation');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'consultation':
        return (
          <>
            <Header 
              onGetStarted={() => setCurrentPage('consultation')}
              onSolutions={() => setCurrentPage('solutions')}
              onTestimonials={() => setCurrentPage('testimonials')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <ConsultationPage 
              onBack={() => setCurrentPage('home')} 
              selectedService={selectedService}
            />
            <Footer />
          </>
        );
      case 'solutions':
        return (
          <>
            <Header 
              onGetStarted={() => setCurrentPage('consultation')}
              onSolutions={() => setCurrentPage('solutions')}
              onTestimonials={() => setCurrentPage('testimonials')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <SolutionsPage 
              onGetStarted={() => setCurrentPage('consultation')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <Footer />
          </>
        );
      case 'testimonials':
        return (
          <>
            <Header 
              onGetStarted={() => setCurrentPage('consultation')}
              onSolutions={() => setCurrentPage('solutions')}
              onTestimonials={() => setCurrentPage('testimonials')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <TestimonialsPage onGetStarted={() => setCurrentPage('consultation')} />
            <Footer />
          </>
        );
      case 'pricing':
        return (
          <>
            <Header 
              onGetStarted={() => setCurrentPage('consultation')}
              onSolutions={() => setCurrentPage('solutions')}
              onTestimonials={() => setCurrentPage('testimonials')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <PricingPage onRequestQuote={handleRequestQuote} />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <Header 
              onGetStarted={() => setCurrentPage('consultation')}
              onSolutions={() => setCurrentPage('solutions')}
              onTestimonials={() => setCurrentPage('testimonials')}
              onPricing={() => setCurrentPage('pricing')}
            />
            <main className="flex-1">
              <Hero 
                onGetStarted={() => setCurrentPage('consultation')}
                onExplore={() => setCurrentPage('solutions')}
              />
              <div className="space-y-12">
                <Services 
                  id="services" 
                  onServiceSelect={handleServiceSelect}
                />
                <ProblemSolution id="solutions" />
                <SocialProof 
                  id="testimonials" 
                  onViewMore={() => setCurrentPage('testimonials')}
                />
                <CallToAction 
                  onGetStarted={() => setCurrentPage('consultation')}
                  onExplore={() => setCurrentPage('solutions')}
                />
              </div>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {renderPage()}
    </div>
  );
}
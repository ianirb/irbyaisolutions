import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What's included in the Standard Plan?",
    answer: "Standard Plans include essential features for each service, perfect for small to medium businesses. You get core functionality, basic integrations, and 8/5 support to help you get started."
  },
  {
    question: "How do I get a Custom Plan?",
    answer: "Contact our team through the 'Request Custom Quote' button. We'll schedule a consultation to understand your needs and create a tailored solution that perfectly fits your business."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade to a Custom Plan at any time. We'll help migrate your data and ensure a smooth transition to your new plan."
  },
  {
    question: "Do you offer bundle discounts?",
    answer: "Yes, we offer special pricing when you combine multiple services. Contact us to learn about our bundle options and discounts."
  }
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-purple-500/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-purple-500/10 transition-colors"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-purple-500/5 border-t border-purple-500/20">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { RocketIcon, Target, Users, Trophy, CheckCircle2 } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';
import Button from './shared/Button';

interface WhyIrbyAIProps {
  onGetStarted: () => void;
}

const milestones = [
  { value: '100+', label: 'Clients Automated' },
  { value: '50K+', label: 'Leads Captured' },
  { value: '24/7', label: 'Websites Delivered' }
];

const clientBenefits = [
  'Customized AI solutions tailored to your industry',
  'Rapid implementation with measurable results',
  'Dedicated support team available 24/7',
  'Continuous optimization and improvements'
];

export default function WhyIrbyAI({ onGetStarted }: WhyIrbyAIProps) {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TypewriterText
              text="Revolutionizing Business Automation One Solution at a Time"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />
            <p className="text-xl text-gray-300 mb-8">
              At Irby AI Solutions, we combine cutting-edge AI technology with personalized strategies 
              to help your business automate, elevate, and dominate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Our Mission
              </Button>
              <Button
                variant="secondary"
                onClick={onGetStarted}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TypewriterText
                text="Our Mission: To Empower Businesses with the Power of AI"
                className="text-3xl font-bold text-white mb-4"
              />
              <p className="text-xl text-gray-300">
                We believe in making advanced AI accessible to businesses of all sizes, 
                helping them grow and thrive in a competitive world.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{milestone.value}</div>
                  <div className="text-gray-400">{milestone.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-16 relative bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Meet the Innovator Behind Irby AI Solutions
                </h2>
                <p className="text-gray-300 mb-4">
                  With over a decade of experience in AI and data science, our founder saw the 
                  potential to revolutionize how businesses operate through intelligent automation.
                </p>
                <p className="text-gray-300">
                  "When I'm not building cutting-edge AI systems, you'll find me exploring emerging 
                  technologies and envisioning the future of business automation."
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Businesses Trust Irby AI Solutions
              </h2>
            </div>

            <div className="grid gap-6">
              {clientBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                icon={RocketIcon}
                onClick={onGetStarted}
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
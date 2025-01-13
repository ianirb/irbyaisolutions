import React, { useEffect } from 'react';
import { Clock, CheckCircle2, Calendar } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import TypewriterText from './shared/TypewriterText';
import { SelectedService } from '../App';

interface ConsultationPageProps {
  onBack: () => void;
  selectedService: SelectedService | null;
}

const benefits = [
  'Free 30-minute consultation with AI experts',
  'Customized solution recommendations',
  'ROI projection and implementation timeline',
  'Clear pricing and deployment strategy'
];

export default function ConsultationPage({ onBack, selectedService }: ConsultationPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Step 1 of Your AI Journey
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <TypewriterText
              text="Take the First Step Towards Automating Your Business"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-xl text-gray-400">
              Transform manual processes, capture more leads, and scale with ease. Our experts are here to help you every step of the way.
            </p>
          </div>

          {/* What to Expect & Limited Availability Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What to Expect */}
            <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                What to Expect
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgency Notice */}
            <div className="bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Limited Availability</h3>
              <p className="text-gray-300">
                Our consultation spots fill up quickly. Schedule now to secure your spot and start your AI transformation journey.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6">
            <ConsultationForm selectedService={selectedService} />
          </div>
        </div>
      </div>
    </div>
  );
}
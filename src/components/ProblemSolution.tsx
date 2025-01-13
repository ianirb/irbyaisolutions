import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import TypewriterText from './shared/TypewriterText';
import Button from './shared/Button';
import { problems, solutions } from '../data/problemSolution';

interface ProblemSolutionProps {
  id?: string;
}

export default function ProblemSolution({ id }: ProblemSolutionProps) {
  return (
    <section id={id} className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <TypewriterText 
            text="Stuck in the Past? It's Time to Automate."
            className="text-4xl font-bold text-white mb-4"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-400 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Current Challenges
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  <span className="text-lg text-red-200">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Our Solutions
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                >
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <span className="text-lg text-green-200">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
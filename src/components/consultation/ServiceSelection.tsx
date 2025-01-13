import React from 'react';
import { solutions } from '../../data/solutions';
import type { ServiceSelection as ServiceSelectionType } from '../../types/consultation';

interface ServiceSelectionProps {
  selectedServices: ServiceSelectionType[];
  onServiceSelect: (serviceName: string, type: 'standard' | 'custom') => void;
  onServiceRemove: (serviceName: string) => void;
}

export default function ServiceSelectionComponent({ 
  selectedServices, 
  onServiceSelect, 
  onServiceRemove 
}: ServiceSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Interested Services</h3>
      <div className="grid gap-4">
        {solutions.map((solution) => {
          const isSelected = selectedServices.some(s => s.name === solution.title);
          const selectedType = selectedServices.find(s => s.name === solution.title)?.type;
          
          return (
            <div key={solution.title} className="p-4 rounded-lg bg-gray-900/50 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                      if (!isSelected) {
                        onServiceSelect(solution.title, 'standard');
                      } else {
                        onServiceRemove(solution.title);
                      }
                    }}
                    className="rounded border-purple-500/20"
                  />
                  <span className="text-white">{solution.title}</span>
                </label>
              </div>
              
              {isSelected && (
                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    onClick={() => onServiceSelect(solution.title, 'standard')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedType === 'standard'
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-500/10 text-blue-400'
                    }`}
                  >
                    Standard Plan
                  </button>
                  <button
                    type="button"
                    onClick={() => onServiceSelect(solution.title, 'custom')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedType === 'custom'
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-500/10 text-purple-400'
                    }`}
                  >
                    Custom Plan
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
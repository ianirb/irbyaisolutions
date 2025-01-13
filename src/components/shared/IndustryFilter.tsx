import React from 'react';
import { Search } from 'lucide-react';

interface IndustryFilterProps {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  industries: string[];
}

export default function IndustryFilter({ selectedIndustry, onIndustryChange, industries }: IndustryFilterProps) {
  return (
    <div className="relative mb-8">
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white appearance-none cursor-pointer"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
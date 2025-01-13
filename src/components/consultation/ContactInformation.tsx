import React from 'react';
import { User, Mail, Phone, Building2, Briefcase } from 'lucide-react';
import { ContactInfo } from '../../types/consultation';

interface ContactInformationProps {
  contactInfo: ContactInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactInformation({ contactInfo, onChange }: ContactInformationProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
      <div className="grid gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="fullName"
            value={contactInfo.fullName}
            onChange={onChange}
            placeholder="Full Name"
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={onChange}
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={onChange}
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
            required
          />
        </div>

        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="business"
            value={contactInfo.business}
            onChange={onChange}
            placeholder="Business Name"
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
            required
          />
        </div>

        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="industry"
            value={contactInfo.industry}
            onChange={onChange}
            placeholder="Industry"
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
            required
          />
        </div>
      </div>
    </div>
  );
}
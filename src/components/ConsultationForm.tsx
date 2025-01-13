import React, { useState } from 'react';
import type { SelectedService } from '../App';
import type { ConsultationFormData } from '../types/consultation';
import Button from './shared/Button';
import Calendar from './shared/Calendar';
import ServiceSelection from './consultation/ServiceSelection';
import ContactInformation from './consultation/ContactInformation';
import NotesSection from './consultation/NotesSection';

interface ConsultationFormProps {
  selectedService: SelectedService | null;
}

export default function ConsultationForm({ selectedService }: ConsultationFormProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    selectedServices: selectedService 
      ? [{ 
          name: selectedService.name, 
          type: selectedService.isCustom ? 'custom' : 'standard' 
        }] 
      : [],
    contactInfo: {
      fullName: '',
      email: '',
      phone: '',
      business: '',
      industry: ''
    },
    notes: '',
    consultationDate: null,
    consultationTime: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleServiceSelection = (serviceName: string, type: 'standard' | 'custom') => {
    setFormData(prev => {
      const existingIndex = prev.selectedServices.findIndex(s => s.name === serviceName);
      const updatedServices = [...prev.selectedServices];

      if (existingIndex >= 0) {
        updatedServices[existingIndex] = { name: serviceName, type };
      } else {
        updatedServices.push({ name: serviceName, type });
      }

      return {
        ...prev,
        selectedServices: updatedServices
      };
    });
  };

  const handleServiceRemove = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.filter(s => s.name !== serviceName)
    }));
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [name]: value
      }
    }));
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      notes: e.target.value
    }));
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setFormData(prev => ({
      ...prev,
      consultationDate: date,
      consultationTime: time
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ServiceSelection
        selectedServices={formData.selectedServices}
        onServiceSelect={handleServiceSelection}
        onServiceRemove={handleServiceRemove}
      />

      <ContactInformation
        contactInfo={formData.contactInfo}
        onChange={handleContactInfoChange}
      />

      <Calendar
        onSelect={handleDateTimeSelect}
        selectedDate={formData.consultationDate}
        selectedTime={formData.consultationTime}
      />

      <NotesSection
        notes={formData.notes}
        onChange={handleNotesChange}
      />

      <Button 
        type="submit" 
        className="w-full"
        disabled={!formData.consultationDate || !formData.consultationTime}
      >
        Schedule Free Consultation
      </Button>
    </form>
  );
}
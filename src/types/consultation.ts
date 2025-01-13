export interface ServiceSelection {
  name: string;
  type: 'standard' | 'custom';
}

export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
}

export interface ConsultationFormData {
  selectedServices: ServiceSelection[];
  contactInfo: ContactInfo;
  notes: string;
  consultationDate: Date | null;
  consultationTime: string | null;
}
import React from 'react';

export type InquiryStep = 'intent' | 'location' | 'budget' | 'details';

export interface InquiryState {
  intent: string;
  location: string;
  budget: string;
  name: string;
  phone: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Interior';
  year: string;
}

export interface Metric {
  id: number;
  label: string;
  value: string;
  suffix: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
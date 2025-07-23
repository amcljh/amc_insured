import { HTMLAttributes } from 'react';

export interface ContactMethod {
  type: 'email' | 'phone' | 'address' | 'social';
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ContactProps extends Omit<HTMLAttributes<HTMLElement>, 'onSubmit'> {
  // Header content
  title?: string;
  subtitle?: string;
  description?: string;
  
  // Contact methods
  contactMethods?: ContactMethod[];
  
  // Form configuration
  showForm?: boolean;
  formFields?: FormField[];
  formTitle?: string;
  submitButtonText?: string;
  onFormSubmit?: (data: Record<string, string>) => void | Promise<void>;
  
  // Layout options
  layout?: 'form-only' | 'contact-only' | 'side-by-side' | 'form-top';
  alignment?: 'left' | 'center' | 'right';
  
  // Map integration
  showMap?: boolean;
  mapEmbedUrl?: string;
  
  // Background
  backgroundColor?: 'white' | 'gray' | 'dark' | 'transparent';
}

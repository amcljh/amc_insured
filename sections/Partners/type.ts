import { HTMLAttributes } from 'react';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  logoAlt?: string;
  website?: string;
  description?: string;
}

export interface PartnersProps extends HTMLAttributes<HTMLElement> {
  // Header content
  title?: string;
  subtitle?: string;
  description?: string;
  
  // Partners data
  partners: Partner[];
  
  // Display options
  showPartnerNames?: boolean;
  showPartnerDescriptions?: boolean;
  
  // Layout options
  columns?: 2 | 3 | 4 | 5 | 6;
  alignment?: 'left' | 'center' | 'right';
  
  // Styling
  logoStyle?: 'grayscale' | 'color' | 'hover-color';
  backgroundColor?: 'white' | 'gray' | 'dark' | 'transparent';
}

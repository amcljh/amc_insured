import { HTMLAttributes } from 'react';

export interface DescriptionProps extends HTMLAttributes<HTMLElement> {
  // Main content
  title: string;
  subtitle?: string;
  description: string;
  
  // Visual elements
  image?: string;
  imageAlt?: string;
  video?: string;
  icon?: React.ReactNode;
  
  // Layout options
  layout?: 'text-only' | 'text-left' | 'image-left' | 'image-right' | 'image-top' | 'image-bottom';
  alignment?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  
  // Call-to-action
  cta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  
  // Additional features
  features?: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  
  // Styling options
  backgroundColor?: 'white' | 'gray' | 'dark' | 'transparent';
  
  // Overlay text options
  backgroundOverlayText?: string;
  mediaOverlayText?: string;
}

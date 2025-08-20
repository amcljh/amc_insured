import { HTMLAttributes } from 'react';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  // Main content
  title: string[];
  subtitle?: string;
  description?: string;
  
  // Call-to-action buttons
  primaryCTA?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  
  // Visual elements
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayOpacity?: number;
  
  // Layout options
  alignment?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  fullHeight?: boolean;
  
  // Additional content
  badge?: string;
  features?: string[];
}

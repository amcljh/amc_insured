import { HTMLAttributes } from 'react';

export interface VideoProps extends HTMLAttributes<HTMLElement> {
  // Header content
  title?: string;
  subtitle?: string;
  description?: string;
  
  // Video source
  videoSrc: string;
  videoPoster?: string;
  videoType?: string;
  
  // Video controls
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  
  // Layout options
  alignment?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'full';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9';
  
  // Call-to-action
  cta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  
  // Background
  backgroundColor?: 'white' | 'gray' | 'transparent';
}
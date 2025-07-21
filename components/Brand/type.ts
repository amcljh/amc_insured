import { AnchorHTMLAttributes } from 'react';

export interface BrandProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // Logo image or icon
  logo?: React.ReactNode;
  logoSrc?: string;
  logoSrcDark?: string; // Dark mode logo variant (only used if NEXT_PUBLIC_IS_SUPPORT_DARKMODE=true)
  logoAlt?: string;
  
  // Brand text
  brandName?: string;
  tagline?: string;
  
  // Link behavior
  href?: string;
  isExternal?: boolean;
  
  // Visual options
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  showText?: boolean;
  theme?: 'light' | 'dark' | 'auto'; // Theme support (dark/auto only works if NEXT_PUBLIC_IS_SUPPORT_DARKMODE=true)
  
  // Custom styling
  logoClassName?: string;
  textClassName?: string;
}

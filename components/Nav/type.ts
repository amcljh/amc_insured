import { HTMLAttributes } from 'react';
import { BrandProps } from '../Brand/type';

// Navigation Link Interface
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Social Media Link Interface
export interface SocialLink {
  platform: string;
  href: string;
  icon?: React.ReactNode;
}

// GNB (Global Navigation Bar) Props
export interface GnbProps extends HTMLAttributes<HTMLElement> {
  brandProps?: BrandProps;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  onCTAClick?: () => void;
  showMobileMenu?: boolean;
  onMenuToggle?: () => void;
}

// Aside (Sidebar) Props
export interface AsideProps extends HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  onClose?: () => void;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  position?: 'left' | 'right';
}

// Footer Props
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  companyName?: string;
  copyrightYear?: number;
  navSections?: {
    title: string;
    links: NavLink[];
  }[];
  socialLinks?: SocialLink[];
  showNewsletter?: boolean;
  onNewsletterSubmit?: (email: string) => void;
}

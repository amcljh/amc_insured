import { HTMLAttributes } from 'react';

export interface GridItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  link?: {
    href: string;
    text?: string;
    onClick?: () => void;
  };
  badge?: string;
}

export interface GridProps extends HTMLAttributes<HTMLElement> {
  // Header content
  title?: string;
  subtitle?: string;
  description?: string;
  
  // Grid items
  items: GridItem[];
  
  // Layout options
  columns?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
  alignment?: 'left' | 'center' | 'right';
  
  // Item styling
  itemStyle?: 'card' | 'minimal' | 'bordered';
  showItemNumbers?: boolean;
  
  // Header alignment
  headerAlignment?: 'left' | 'center' | 'right';
  
  // Background
  backgroundColor?: 'white' | 'gray' | 'dark' | 'transparent';
}

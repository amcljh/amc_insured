export interface ProcessFlowProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: Array<{
    id: string | number;
    title: string;
    description: string;
    badge?: string;
    image?: string;
    imageAlt?: string;
    icon?: React.ReactNode;
    link?: {
      text?: string;
      href?: string;
      onClick?: () => void;
    };
  }>;
  backgroundColor?: 'white' | 'gray' | 'dark';
  className?: string;
  [key: string]: any;
}

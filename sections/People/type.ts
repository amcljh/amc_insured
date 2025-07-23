import { HTMLAttributes } from 'react';

export interface Person {
  id: string;
  name: string;
  position: string;
  bio?: string;
  quote?: string;
  image: string;
  imageAlt?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  experience?: string;
  education?: string;
}

export interface PeopleProps extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
  id?: string;
  subtitle?: string;
  title: string;
  description?: string;
  people: Person[];
  columns?: 1 | 2 | 3 | 4;
  backgroundColor?: 'white' | 'gray' | 'blue' | 'dark';
  showSocials?: boolean;
  layout?: 'card' | 'minimal' | 'hero';
}

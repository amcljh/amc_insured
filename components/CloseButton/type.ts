import { ButtonHTMLAttributes } from 'react';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

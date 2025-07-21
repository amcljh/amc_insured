'use client';

import React from 'react';
import { SecondaryButtonProps } from './type';
import { secondaryButtonStyles } from './style';

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const widthClass = fullWidth ? secondaryButtonStyles.width.full : '';
  
  const combinedClasses = `${secondaryButtonStyles.base} ${secondaryButtonStyles.variants[variant]} ${secondaryButtonStyles.sizes[size]} ${widthClass} ${className}`.trim();
  
  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

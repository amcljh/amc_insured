'use client';

import React from 'react';
import { CloseButtonProps } from './type';
import { closeButtonStyles } from './style';

export const CloseButton: React.FC<CloseButtonProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const combinedClasses = `${closeButtonStyles.base} ${closeButtonStyles.variants[variant]} ${closeButtonStyles.sizes[size]} ${className}`.trim();
  
  return (
    <button
      type="button"
      className={combinedClasses}
      aria-label="Close"
      {...props}
    >
      <svg
        className={closeButtonStyles.iconSizes[size]}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

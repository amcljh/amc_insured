export const closeButtonStyles = {
  base: 'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  variants: {
    default: 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
    minimal: 'text-gray-400 hover:text-gray-600 focus:ring-gray-500',
  },
  
  sizes: {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  },
  
  iconSizes: {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  },
} as const; 
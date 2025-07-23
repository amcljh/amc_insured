export const actionButtonStyles = {
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  variants: {
    primary: 'bg-[#03418a] text-white hover:bg-[#052b6b] focus:ring-[#03418a]',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  },
  
  sizes: {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
  
  width: {
    full: 'w-full',
  },
} as const; 
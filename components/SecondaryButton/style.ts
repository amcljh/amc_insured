export const secondaryButtonStyles = {
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  variants: {
    outline: 'border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 focus:ring-white/50 transition-all duration-200',
    ghost: 'text-white bg-black/20 backdrop-blur-sm hover:bg-black/30 focus:ring-white/50 transition-all duration-200',
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
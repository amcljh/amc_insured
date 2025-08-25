export const brandStyles = {
  // Size-based styling
  sizes: {
    sm: {
      logo: 'w-6 h-6',
      text: 'text-lg',
      tagline: 'text-xs',
      spacingHorizontal: 'space-x-2',
      spacingVertical: 'space-y-1',
    },
    md: {
      logo: 'w-12 h-12',
      text: 'text-xl',
      tagline: 'text-sm',
      spacingHorizontal: 'space-x-2',
      spacingVertical: 'space-y-1',
    },
    lg: {
      logo: 'w-[100px] h-12',
      text: 'text-xl font-bold',
      tagline: 'text-sm font-bold',
      spacingHorizontal: 'space-x-4',
      spacingVertical: 'space-y-2',
    },
  },

  // Orientation-based styling
  orientations: {
    horizontal: 'flex-row items-center',
    vertical: 'flex-col items-center',
  },

  // Theme-based text colors
  textColors: {
    light: {
      primary: 'text-gray-900',
      secondary: 'text-gray-500',
    },
    dark: {
      primary: 'text-white',
      secondary: 'text-gray-300',
    },
  },

  // Common styles
  common: {
    logo: 'object-contain',
    defaultLogoBackground:
      'bg-[#03418a] rounded-full flex items-center justify-center',
    defaultLogoText: 'text-white font-bold text-sm',
    textContainer: 'flex flex-col items-center',
    textPrimary: 'font-bold',
    link: 'inline-flex transition-opacity duration-200 hover:opacity-80',
    darkModeHidden: 'dark:hidden',
    darkModeVisible: 'hidden dark:block',
  },

  // Logo visibility classes for auto theme
  logoVisibility: {
    lightAuto: 'dark:hidden',
    darkAuto: 'hidden dark:block',
    darkExplicit: '',
    lightExplicit: '',
  },
} as const

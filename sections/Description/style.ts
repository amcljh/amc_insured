export const descriptionStyles = {
  // Container styles
  container: {
    base: 'py-16 lg:py-24 relative overflow-hidden',
    wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
  },

  // Background colors
  backgrounds: {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent',
  },

  // Layout configurations
  layouts: {
    'text-only': 'flex flex-col',
    'text-left': 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start',
    'image-left':
      'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
    'image-right':
      'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
    'image-top': 'flex flex-col space-y-12',
    'image-bottom': 'flex flex-col space-y-12',
  },

  // Content alignment
  alignments: {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  },

  // Size variations
  sizes: {
    sm: {
      title: 'text-2xl lg:text-3xl',
      subtitle: 'text-lg lg:text-xl',
      description: 'text-base lg:text-lg',
      spacing: 'space-y-4',
      maxWidth: 'max-w-3xl',
    },
    md: {
      title: 'text-3xl lg:text-5xl',
      subtitle: 'text-xl lg:text-3xl',
      description: 'text-lg lg:text-xl',
      spacing: 'space-y-6',
      maxWidth: 'max-w-4xl',
    },
    lg: {
      title: 'text-4xl lg:text-5xl',
      subtitle: 'text-2xl lg:text-3xl',
      description: 'text-xl lg:text-2xl',
      spacing: 'space-y-8',
      maxWidth: 'max-w-5xl',
    },
  },

  // Typography
  typography: {
    title: 'font-bold tracking-tight whitespace-pre-line',
    subtitle: 'font-bold',
    description: 'leading-relaxed',
    titleLight: 'text-gray-900',
    titleDark: 'text-white',
    subtitleLight: 'text-[#03418a]',
    subtitleDark: 'text-[#0456b8]',
    descriptionLight: 'text-gray-600',
    descriptionDark: 'text-gray-300',
  },

  // Media elements
  media: {
    image: 'w-full h-auto rounded-lg shadow-lg relative',
    video: 'w-full h-auto rounded-lg shadow-lg relative',
    icon: 'w-16 h-16 text-[#03418a] mb-6',
    overlay: 'absolute inset-0 flex items-center justify-center',
    overlayText:
      'text-6xl lg:text-8xl font-black text-white/10 select-none pointer-events-none',
  },

  // Features grid
  features: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12',
    item: 'flex flex-col items-start space-y-4',
    icon: 'w-8 h-8',
    iconLight: 'text-[#03418a]',
    iconDark: 'text-[#0456b8]',
    title: 'text-xl font-semibold',
    titleLight: 'text-gray-900',
    titleDark: 'text-white',
    description: '',
    descriptionLight: 'text-gray-600',
    descriptionDark: 'text-gray-300',
  },

  // Order classes for layout
  order: {
    imageFirst: 'order-1 lg:order-1',
    imageSecond: 'order-2 lg:order-2',
    contentFirst: 'order-2 lg:order-1',
    contentSecond: 'order-1 lg:order-2',
  },

  // Background overlay text
  backgroundOverlay: {
    container:
      'absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden',
    text: 'text-8xl lg:text-[16rem] font-black text-gray-200/15 dark:text-gray-700/15',
  },

  // Animation variants
  animation: {
    container: 'opacity-0 translate-y-8',
    title: 'opacity-0 translate-y-6',
    subtitle: 'opacity-0 translate-y-4',
    description: 'opacity-0 translate-y-4',
    cta: 'opacity-0 translate-y-4',
    media: 'opacity-0 scale-95',
    features: 'opacity-0 translate-y-4',
  },
} as const

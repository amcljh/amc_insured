export const descriptionStyles = {
  // Container styles
  container: {
    base: 'py-16 lg:py-24',
    wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
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
    'image-left': 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
    'image-right': 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
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
      title: 'text-3xl lg:text-4xl',
      subtitle: 'text-xl lg:text-2xl',
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
    title: 'font-bold tracking-tight',
    subtitle: 'font-medium',
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
    image: 'w-full h-auto rounded-lg shadow-lg',
    video: 'w-full h-auto rounded-lg shadow-lg',
    icon: 'w-16 h-16 text-[#03418a] mb-6',
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
} as const; 
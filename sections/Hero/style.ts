export const heroStyles = {
  // Container styles
  container: {
    base: 'relative overflow-hidden bg-center bg-cover bg-no-repeat',
    fullHeight: 'min-h-screen',
    normalHeight: 'py-20 lg:py-32',
    withTopPadding: 'pt-24 lg:pt-32', // Add more top padding for transparent nav
  },

  // Content alignment
  alignments: {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  },

  // Size variations
  sizes: {
    sm: {
      title: 'text-4xl lg:text-5xl',
      subtitle: 'text-lg lg:text-xl',
      description: 'text-base lg:text-lg',
      spacing: 'space-y-6',
    },
    md: {
      title: 'text-5xl lg:text-6xl xl:text-7xl',
      subtitle: 'text-xl lg:text-2xl',
      description: 'text-lg lg:text-xl',
      spacing: 'space-y-8',
    },
    lg: {
      title: 'text-6xl lg:text-7xl xl:text-8xl',
      subtitle: 'text-2xl lg:text-3xl',
      description: 'text-xl lg:text-2xl',
      spacing: 'space-y-10',
    },
  },

  // Background and overlay
  background: {
    image: 'bg-cover bg-center bg-no-repeat bg-fixed',
    video: 'absolute inset-0 w-full h-full object-cover',
    overlay: 'absolute inset-0 bg-black',
  },

  // Content container
  content: {
    wrapper: 'h-full z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
    container: 'flex flex-col justify-center min-h-full',
    maxWidth: 'max-w-4xl',
  },

  // Typography
  typography: {
    title: 'font-bold tracking-tight text-white',
    subtitle: 'font-medium text-gray-200',
    description: 'text-gray-300 leading-relaxed',
    badge: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f0f6ff] text-[#03418a] mb-6',
  },

  // Button container
  buttons: {
    container: 'flex flex-col sm:flex-row gap-4 sm:gap-6',
    centerContainer: 'justify-center',
    leftContainer: 'justify-start',
    rightContainer: 'justify-end',
  },

  // Features list
  features: {
    container: 'flex flex-wrap gap-6 mt-8',
    item: 'flex items-center text-gray-200',
    icon: 'w-5 h-5 text-green-400 mr-2',
  },
} as const; 
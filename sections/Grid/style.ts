export const gridStyles = {
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

  // Header styles
  header: {
    container: 'mb-12 lg:mb-16',
    alignments: {
      left: 'text-left',
      center: 'text-center mx-auto max-w-3xl',
      right: 'text-right',
    },
    title: 'text-3xl lg:text-4xl font-bold tracking-tight mb-2',
    titleLight: 'text-gray-900',
    titleDark: 'text-white',
    subtitle: 'text-xl lg:text-3xl font-bold mb-4',
    subtitleLight: 'text-[#03418a]',
    subtitleDark: 'text-[#0456b8]',
    description: 'text-lg leading-relaxed',
    descriptionLight: 'text-gray-600',
    descriptionDark: 'text-gray-300',
  },

  // Grid layouts
  columns: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  },

  // Gap sizes
  gaps: {
    sm: 'gap-4',
    md: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-12',
  },

  // Item styles
  items: {
    card: {
      baseLight:
        'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6',
      baseDark:
        'bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6',
      hover: 'hover:scale-105',
    },
    minimal: {
      baseLight: 'p-4',
      baseDark: 'p-4',
      hoverLight: 'hover:bg-gray-50 rounded-lg',
      hoverDark: 'hover:bg-gray-800 rounded-lg',
    },
    bordered: {
      baseLight:
        'border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300',
      baseDark:
        'border border-gray-700 rounded-lg p-6 hover:border-gray-600 hover:shadow-md transition-all duration-300',
      hover: '',
    },
  },

  // Item content
  itemContent: {
    container: 'flex flex-col h-full',
    header: 'flex-1',
    image: 'w-full h-48 object-cover rounded-lg mb-4',
    icon: 'w-12 h-12 mb-4',
    iconLight: 'text-[#03418a]',
    iconDark: 'text-[#0456b8]',
    number:
      'inline-flex items-center justify-center w-8 h-8 bg-[#03418a] text-white text-sm font-bold rounded-full mb-4',
    title: 'text-xl font-semibold mb-2',
    titleLight: 'text-gray-900',
    titleDark: 'text-white',
    description: 'leading-relaxed mb-4',
    descriptionLight: 'text-gray-600',
    descriptionDark: 'text-gray-300',
    badge:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f0f6ff] text-[#03418a] mb-3',
    link: 'inline-flex items-center font-medium text-sm transition-colors duration-200 mt-auto',
    linkLight: 'text-[#03418a] hover:text-[#052b6b]',
    linkDark: 'text-[#0456b8] hover:text-[#03418a]',
  },

  // Common styles
  common: {
    grid: 'grid',
    transition: 'transition-all duration-300',
  },
} as const

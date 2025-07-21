# Landing Website Boilerplate

This project is boilerplate code to implement a landing website built with Next.js and TypeScript.

## Features

- 🎨 Modern and responsive design
- 🧱 Reusable UI components (Buttons, Navigation, Brand, etc.)
- 📱 Mobile-first approach
- 🌙 Conditional dark mode support
- ⚡ Next.js App Router
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling

## Environment Configuration

### Dark Mode Support

The application supports conditional dark mode rendering based on an environment variable:

```bash
# .env.local
NEXT_PUBLIC_IS_SUPPORT_DARKMODE=true
```

**Options:**
- `true` - Enables dark mode support with automatic theme switching
- `false` - Disables dark mode features, uses only light theme

**Affected Components:**
- Brand component (logo variants)
- Navigation components (theme-aware styling)
- Text colors and contrasts

### Logo Assets

When dark mode is enabled, the Brand component automatically uses:
- Light theme: `/public/brand/logo.png`
- Dark theme: `/public/brand/logo_invert.png`

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- **app/**: Next.js App Router directory
- **components/**: Reusable UI components
  - Button components (ActionButton, SecondaryButton, CloseButton)
  - Brand component with theme support
  - Navigation components (Gnb, Aside, Footer)
- **sections/**: Landing page section components
- **hocs/**: Higher-Order Components for analytics
- **styles/**: Style utilities and configurations
- **public/**: Static assets including brand logos

## Component Usage

### Brand Component

```typescript
import { Brand } from '@/components';

// Basic usage (respects environment variable)
<Brand brandName="My Company" />

// With custom logos
<Brand 
  brandName="My Company"
  logoSrc="/custom-logo.png"
  logoSrcDark="/custom-logo-dark.png"
  theme="auto" // Only works if NEXT_PUBLIC_IS_SUPPORT_DARKMODE=true
/>
```

### Navigation Components

```typescript
import { Gnb, Aside, Footer } from '@/components';

// Global Navigation Bar with Brand
<Gnb
  brandProps={{
    brandName: 'My Company',
    theme: 'auto' // Conditional on environment variable
  }}
  navLinks={links}
  ctaText="Get Started"
/>
```

## Development Notes

- Do not modify files in the `app/` directory as this is boilerplate code
- This website is designed to be a single-page application
- All UI components are client-side components for interactivity
- Dark mode features are conditionally rendered based on environment configuration 
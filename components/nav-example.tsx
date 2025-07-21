'use client';

import React, { useState } from 'react';
import { Gnb, Aside, Footer, NavLink, SocialLink } from './index';

// Sample data
const sampleNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'GitHub', href: 'https://github.com', isExternal: true },
];

const sampleSocialLinks: SocialLink[] = [
  {
    platform: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    platform: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

const sampleFooterSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Status', href: '/status' },
      { label: 'Community', href: '/community' },
    ],
  },
];

// Example component showing how to use Nav components
export const NavExample: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  
  // Check if dark mode is supported via environment variable
  const isDarkModeSupported = process.env.NEXT_PUBLIC_IS_SUPPORT_DARKMODE === 'true';

  const handleNewsletterSubmit = async (email: string) => {
    console.log('Newsletter subscription:', email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation Bar */}
      <Gnb
        brandProps={{
          brandName: 'Landing',
          tagline: 'Build Amazing',
          size: 'md',
          href: '/',
          logoSrc: '/brand/logo.png',
          ...(isDarkModeSupported && {
            logoSrcDark: '/brand/logo_invert.png',
            theme: 'auto', // Only set auto theme if dark mode is supported
          }),
          logoAlt: 'Landing Logo',
        }}
        navLinks={sampleNavLinks}
        ctaText="Get Started"
        onCTAClick={() => alert('CTA clicked!')}
      />

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Navigation Components Example
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                This page demonstrates the Nav components with conditional dark mode support: 
                GNB (Global Navigation Bar), Aside (Sidebar), and Footer.
              </p>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDarkModeSupported ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                  <p className={`text-sm font-medium ${isDarkModeSupported ? 'text-green-800' : 'text-yellow-800'}`}>
                    Dark Mode Status: {isDarkModeSupported ? 'Enabled' : 'Disabled'}
                  </p>
                  <p className={`text-xs mt-1 ${isDarkModeSupported ? 'text-green-600' : 'text-yellow-600'}`}>
                    Environment Variable: NEXT_PUBLIC_IS_SUPPORT_DARKMODE={process.env.NEXT_PUBLIC_IS_SUPPORT_DARKMODE || 'undefined'}
                  </p>
                </div>
                
                <p className="text-sm text-gray-500">
                  Brand logo files used:
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Light theme: <code className="bg-gray-100 px-2 py-1 rounded">/public/brand/logo.png</code></li>
                  {isDarkModeSupported && (
                    <li>• Dark theme: <code className="bg-gray-100 px-2 py-1 rounded">/public/brand/logo_invert.png</code></li>
                  )}
                  {!isDarkModeSupported && (
                    <li className="text-gray-400">• Dark theme: <span className="italic">Disabled by environment variable</span></li>
                  )}
                </ul>
              </div>
              
              <button
                onClick={() => setIsAsideOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Open Sidebar
              </button>
            </div>

            {/* Content sections to show scroll behavior */}
            <div className="mt-16 space-y-12">
              {['Section 1', 'Section 2', 'Section 3'].map((section, index) => (
                <div key={index} className="py-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <Aside
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
        navLinks={sampleNavLinks}
        socialLinks={sampleSocialLinks}
        position="right"
      />

      {/* Footer */}
      <Footer
        companyName="Landing Company"
        navSections={sampleFooterSections}
        socialLinks={sampleSocialLinks}
        showNewsletter={true}
        onNewsletterSubmit={handleNewsletterSubmit}
      />
    </div>
  );
}; 
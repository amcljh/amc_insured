'use client';

import React from 'react';
import { GnbProps } from './type';
import { ActionButton } from '../ActionButton/ActionButton';
import { Brand } from '../Brand/Brand';
import { useToggle } from 'usehankook';

export const Gnb: React.FC<GnbProps> = ({
  brandProps = { brandName: 'Logo', href: '/' },
  navLinks = [],
  ctaText = 'Get Started',
  ctaHref,
  onCTAClick,
  className = '',
  ...props
}) => {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else if (ctaHref) {
      window.open(ctaHref, '_self');
    }
  };

  return (
    <nav className={`bg-white shadow-sm border-b border-gray-100 ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Brand {...brandProps} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.isExternal ? '_blank' : '_self'}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <ActionButton
              variant="primary"
              size="sm"
              onClick={handleCTAClick}
              className="hidden sm:inline-flex"
            >
              {ctaText}
            </ActionButton>

            {/* Mobile menu button */}
            <button
              onClick={() => toggleMobileMenu()}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.isExternal ? '_blank' : '_self'}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <ActionButton
                variant="primary"
                size="sm"
                fullWidth
                onClick={handleCTAClick}
              >
                {ctaText}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

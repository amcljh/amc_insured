'use client';

import React, { useEffect } from 'react';
import { AsideProps } from './type';
import { CloseButton } from '../CloseButton/CloseButton';

export const Aside: React.FC<AsideProps> = ({
  isOpen = false,
  onClose,
  navLinks = [],
  socialLinks = [],
  position = 'right',
  className = '',
  children,
  ...props
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sidebarPosition = position === 'left' ? 'left-0' : 'right-0';

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 ${sidebarPosition} h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${className}`}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            {onClose && <CloseButton onClick={onClose} />}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {children ? (
              <div className="p-4">{children}</div>
            ) : (
              <>
                {/* Navigation Links */}
                {navLinks.length > 0 && (
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Navigation
                    </h3>
                    <nav className="space-y-2">
                      {navLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target={link.isExternal ? '_blank' : '_self'}
                          rel={link.isExternal ? 'noopener noreferrer' : undefined}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={onClose}
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="p-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                          {social.icon && <span>{social.icon}</span>}
                          <span>{social.platform}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

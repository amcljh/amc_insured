'use client'

import React, { useState } from 'react'
import { FooterProps } from './type'
import { ActionButton } from '../ActionButton/ActionButton'

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Company',
  copyrightYear = new Date().getFullYear(),
  navSections = [],
  socialLinks = [],
  showNewsletter = false,
  onNewsletterSubmit,
  className = '',
  ...props
}) => {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !onNewsletterSubmit) return

    setIsSubscribing(true)
    try {
      await onNewsletterSubmit(email)
      setEmail('')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className={`bg-gray-900 text-white ${className}`} {...props}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <h3 className='text-2xl font-bold mb-4'>{companyName}</h3>
            <p className='text-gray-400 mb-4'>
              Building amazing experiences for the web.
            </p>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {social.icon || (
                      <span className='text-sm font-medium'>
                        {social.platform}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Sections */}
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className='text-lg font-semibold mb-4'>{section.title}</h4>
              <nav className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target={link.isExternal ? '_blank' : '_self'}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className='block text-gray-400 hover:text-white transition-colors duration-200'
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Newsletter */}
          {showNewsletter && (
            <div className='lg:col-span-1'>
              <h4 className='text-lg font-semibold mb-4'>Stay Updated</h4>
              <p className='text-gray-400 mb-4'>
                Subscribe to our newsletter for the latest updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <ActionButton
                  type='submit'
                  variant='primary'
                  size='sm'
                  fullWidth
                  isLoading={isSubscribing}
                  disabled={!email.trim()}
                >
                  Subscribe
                </ActionButton>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm'>
              © {copyrightYear} {companyName}. All rights reserved.
            </div>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='/privacy'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
              >
                Privacy Policy
              </a>
              {/* <a
                href='/terms'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
              >
                Terms of Service
              </a>
              <a
                href='/cookies'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

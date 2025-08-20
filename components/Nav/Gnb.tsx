'use client';

import React, { useEffect, useState } from 'react';
import { GnbProps } from './type';
import { ActionButton } from '../ActionButton/ActionButton';
import { Brand } from '../Brand/Brand';
import { useToggle } from 'usehankook';

export const Gnb: React.FC<GnbProps> = ({
  brandProps = { brandName: 'Logo', href: '/' },
  navLinks = [],
  ctaText,
  ctaHref,
  onCTAClick,
  className = '',
  ...props
}) => {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // 섹션별 스크롤 위치 감지
      const sections = navLinks
        .filter(link => link.href.startsWith('#'))
        .map(link => {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            return {
              id,
              href: link.href,
              offsetTop: element.offsetTop - 100, // GNB 높이 고려
              offsetBottom: element.offsetTop + element.offsetHeight - 100
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;
      
      // 현재 활성화된 섹션 찾기
      let currentActive = '';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom) {
          currentActive = section.href;
          break;
        }
      }
      
      // 홈 섹션은 맨 위에 있을 때 활성화
      if (scrollPosition < 100) {
        currentActive = '#';
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else if (ctaHref) {
      window.open(ctaHref, '_self');
    }
  };

  // Enhanced smooth scroll function
  const handleSmoothScroll = async (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav height

        // Close mobile menu first if open
        if (isMobileMenuOpen) {
          toggleMobileMenu();
          // Wait for mobile menu animation to complete
          await new Promise(resolve => setTimeout(resolve, 300));
        }

        // Smooth scroll with easing
        const startPosition = window.pageYOffset;
        const distance = offsetTop - startPosition;
        const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1s duration

        let startTime: number | null = null;

        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // Easing function (ease-in-out-cubic)
          const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          const currentPosition = startPosition + (distance * easeInOutCubic);
          window.scrollTo(0, currentPosition);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    } else {
      // External link
      window.open(href, '_self');
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white shadow-lg
        ${className}
      `}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="[&_*]:!text-black [&_*]:!font-medium">
              <Brand {...brandProps} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:block ${!ctaText ? 'ml-auto' : ''}`}>
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.isExternal ? '_blank' : '_self'}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={link.onClick ? link.onClick : link.isExternal ? undefined : (e) => handleSmoothScroll(link.href, e)}
                    className={`
                      px-3 py-2 text-sm font-medium transition-all duration-200
                      ${isActive 
                        ? 'text-[#03418a] bg-blue-50 border-b-2 border-[#03418a]' 
                        : 'text-black hover:text-gray-700'
                      }
                      cursor-pointer hover:scale-105
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {ctaText && <ActionButton
              variant="primary"
              size="sm"
              onClick={handleCTAClick}
              className={`
                  hidden sm:inline-flex transition-all duration-200
                  !bg-white !text-[#03418a] hover:!bg-gray-100 hover:!text-[#052b6b]
                  border-0 font-medium hover:scale-105
                `}
            >
              {ctaText}
            </ActionButton>}

            {/* Mobile menu button */}
            <button
              onClick={() => toggleMobileMenu()}
              className={`
                md:hidden inline-flex items-center justify-center p-2 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
                transition-all duration-200
                text-black hover:text-gray-700 hover:bg-gray-100 hover:scale-105
              `}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
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
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200 rotate-45`}
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
        <div className={`
          md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
          }
        `}>
          <div className={`
            px-2 pt-2 pb-3 space-y-1 border-t 
            border-gray-200 bg-white shadow-lg
            transform transition-transform duration-300
            ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}
          `}>
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.isExternal ? '_blank' : '_self'}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={link.isExternal ? undefined : (e) => handleSmoothScroll(link.href, e)}
                  className={`
                    block px-3 py-2 text-base font-medium 
                    transition-all duration-200
                    ${isActive 
                      ? 'text-[#03418a] bg-blue-50 border-l-4 border-[#03418a]' 
                      : 'text-gray-900 hover:text-[#03418a]'
                    }
                    cursor-pointer hover:scale-105 hover:translate-x-1
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            {ctaText && (
              <div className="pt-2" style={{
                transitionDelay: `${navLinks.length * 50 + 100}ms`
              }}>
                <ActionButton
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={handleCTAClick}
                  className={`
                  !bg-[#03418a] !text-white hover:!bg-[#052b6b] hover:!text-white
                  border-0 font-medium transition-all duration-200 hover:scale-105
                `}
                >
                  {ctaText}
                </ActionButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

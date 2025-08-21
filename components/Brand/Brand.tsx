'use client'

import React from 'react'
import { BrandProps } from './type'
import { brandStyles } from './style'

export const Brand: React.FC<BrandProps> = ({
  logo,
  logoSrc,
  logoSrcDark,
  logoAlt = 'Logo',
  brandName = 'Brand',
  tagline,
  href = '/',
  isExternal = false,
  size = 'md',
  orientation = 'horizontal',
  showText = true,
  theme = 'light',
  logoClassName = '',
  textClassName = '',
  className = '',
  onClick,
  ...props
}) => {
  // Check if dark mode is supported via environment variable
  const isDarkModeSupported =
    process.env.NEXT_PUBLIC_IS_SUPPORT_DARKMODE === 'true'

  const currentSize = brandStyles.sizes[size]
  const currentOrientation = brandStyles.orientations[orientation]
  const spacing =
    orientation === 'horizontal'
      ? currentSize.spacingHorizontal
      : currentSize.spacingVertical

  // Determine which logo to use based on theme and dark mode support
  const getLogoSrc = () => {
    if (logoSrc || logoSrcDark) {
      // If custom logo sources are provided
      if (isDarkModeSupported && theme === 'dark' && logoSrcDark) {
        return logoSrcDark
      }
      return logoSrc
    }

    // Use project default logos only if dark mode is supported
    if (isDarkModeSupported && theme === 'dark') {
      return '/brand/logo_invert.png'
    }
    return '/brand/logo.png'
  }

  const renderLogo = () => {
    if (logo) {
      return (
        <div className={`${currentSize.logo} ${logoClassName}`}>{logo}</div>
      )
    }

    const logoPath = getLogoSrc()
    if (logoPath) {
      return (
        <>
          {/* Light theme logo */}
          <img
            src={
              isDarkModeSupported && theme === 'auto'
                ? '/brand/logo.png'
                : logoPath
            }
            alt={logoAlt}
            className={`${currentSize.logo} ${
              brandStyles.common.logo
            } ${logoClassName} ${
              isDarkModeSupported && theme === 'auto'
                ? brandStyles.logoVisibility.lightAuto
                : theme === 'dark'
                ? 'hidden'
                : ''
            }`}
          />
          {/* Dark theme logo for auto theme - only if dark mode is supported */}
          {isDarkModeSupported && theme === 'auto' && (
            <img
              src='/brand/logo_invert.png'
              alt={logoAlt}
              className={`${currentSize.logo} ${brandStyles.common.logo} ${logoClassName} ${brandStyles.logoVisibility.darkAuto}`}
            />
          )}
          {/* Dark theme logo for explicit dark theme - only if dark mode is supported */}
          {isDarkModeSupported && theme === 'dark' && (
            <img
              src={logoSrcDark || '/brand/logo_invert.png'}
              alt={logoAlt}
              className={`${currentSize.logo} ${brandStyles.common.logo} ${logoClassName}`}
            />
          )}
        </>
      )
    }

    // Default logo placeholder
    return (
      <div
        className={`${currentSize.logo} ${brandStyles.common.defaultLogoBackground} ${logoClassName}`}
      >
        <span className={brandStyles.common.defaultLogoText}>
          {brandName.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }

  const renderText = () => {
    if (!showText) return null

    // Apply dark mode text colors only if dark mode is supported
    const textColors =
      isDarkModeSupported && theme === 'dark'
        ? brandStyles.textColors.dark
        : brandStyles.textColors.light

    return (
      <div className={brandStyles.common.textContainer}>
        {/* <span
          className={`${brandStyles.common.textPrimary} ${textColors.primary} ${currentSize.text} ${textClassName}`}
        >
          {brandName}
        </span> */}
        {/* {tagline && (
          <span className={`${textColors.secondary} ${currentSize.tagline}`}>
            {tagline}
          </span>
        )} */}
      </div>
    )
  }

  const content = (
    <div className={`flex ${currentOrientation} ${spacing} ${className}`}>
      {renderLogo()}
      {renderText()}
    </div>
  )

  const linkProps = {
    href,
    target: isExternal ? '_blank' : '_self',
    rel: isExternal ? 'noopener noreferrer' : undefined,
    onClick,
    className: brandStyles.common.link,
    ...props,
  }

  return <a {...linkProps}>{content}</a>
}

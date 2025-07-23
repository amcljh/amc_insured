'use client';

import React from 'react';
import { HeroProps } from './type';
import { heroStyles } from './style';
import { ActionButton, SecondaryButton } from '../../components';

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
  overlayOpacity = 0.5,
  alignment = 'center',
  size = 'md',
  fullHeight = true,
  badge,
  features = [],
  className = '',
  ...props
}) => {
  const currentSize = heroStyles.sizes[size];
  const currentAlignment = heroStyles.alignments[alignment];
  const buttonAlignment = heroStyles.buttons[`${alignment}Container` as keyof typeof heroStyles.buttons] || heroStyles.buttons.centerContainer;

  const handlePrimaryCTA = () => {
    if (primaryCTA?.onClick) {
      primaryCTA.onClick();
    } else if (primaryCTA?.href) {
      window.open(primaryCTA.href, '_self');
    }
  };

  const handleSecondaryCTA = () => {
    if (secondaryCTA?.onClick) {
      secondaryCTA.onClick();
    } else if (secondaryCTA?.href) {
      window.open(secondaryCTA.href, '_self');
    }
  };

  return (
    <section 
      className={`${heroStyles.container.base} ${heroStyles.container.withTopPadding} ${fullHeight ? heroStyles.container.fullHeight : heroStyles.container.normalHeight} ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      {...props}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={heroStyles.background.video}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Overlay */}
      {(backgroundImage || backgroundVideo) && (
        <div 
          className={heroStyles.background.overlay}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className={heroStyles.content.wrapper}>
        <div className={`${heroStyles.content.container} ${currentAlignment}`}>
          <div className={`${heroStyles.content.maxWidth} ${currentSize.spacing}`}>
            {/* Badge */}
            {badge && (
              <div className={heroStyles.typography.badge}>
                {badge}
              </div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <h2 className={`${heroStyles.typography.subtitle} ${currentSize.subtitle}`}>
                {subtitle}
              </h2>
            )}

            {/* Main Title */}
            <h1 className={`${heroStyles.typography.title} ${currentSize.title}`}>
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className={`${heroStyles.typography.description} ${currentSize.description}`}>
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCTA || secondaryCTA) && (
              <div className={`${heroStyles.buttons.container} ${buttonAlignment}`}>
                {primaryCTA && (
                  <ActionButton
                    variant="primary"
                    size="lg"
                    onClick={handlePrimaryCTA}
                  >
                    {primaryCTA.text}
                  </ActionButton>
                )}
                {secondaryCTA && (
                  <SecondaryButton
                    variant="outline"
                    size="lg"
                    onClick={handleSecondaryCTA}
                  >
                    {secondaryCTA.text}
                  </SecondaryButton>
                )}
              </div>
            )}

            {/* Features List */}
            {features.length > 0 && (
              <div className={heroStyles.features.container}>
                {features.map((feature, index) => (
                  <div key={index} className={heroStyles.features.item}>
                    <svg 
                      className={heroStyles.features.icon} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

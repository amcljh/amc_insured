'use client';

import React from 'react';
import { VideoProps } from './type';
import { ActionButton } from '../../components';

export const Video: React.FC<VideoProps> = ({
  title,
  subtitle,
  description,
  videoSrc,
  videoPoster,
  videoType = 'video/mp4',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  alignment = 'center',
  size = 'md',
  aspectRatio = '16:9',
  cta,
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const backgroundClass = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent',
  }[backgroundColor];

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  }[alignment];

  const sizeClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'max-w-full',
  }[size];

  const aspectRatioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '21:9': 'aspect-[21/9]',
  }[aspectRatio];

  const handleCTA = () => {
    if (cta?.onClick) {
      cta.onClick();
    } else if (cta?.href) {
      window.open(cta.href, '_self');
    }
  };

  return (
    <section className={`py-16 lg:py-24 ${backgroundClass} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle || description) && (
          <div className={`mb-12 lg:mb-16 ${alignmentClass} max-w-3xl space-y-6`}>
            {subtitle && (
              <h3 className="text-xl font-medium text-[#03418a]">{subtitle}</h3>
            )}
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-600">{description}</p>
            )}
          </div>
        )}

        {/* Video Container */}
        <div className={`${alignmentClass} ${sizeClass}`}>
          <div className={`${aspectRatioClass} rounded-lg overflow-hidden shadow-xl`}>
            <video
              className="w-full h-full object-cover"
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls}
              poster={videoPoster}
            >
              <source src={videoSrc} type={videoType} />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Button */}
          {cta && (
            <div className="mt-8">
              <ActionButton
                variant="primary"
                size="lg"
                onClick={handleCTA}
              >
                {cta.text}
              </ActionButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

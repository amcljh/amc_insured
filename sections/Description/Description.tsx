'use client';

import React from 'react';
import { DescriptionProps } from './type';
import { descriptionStyles } from './style';
import { ActionButton } from '../../components';

export const Description: React.FC<DescriptionProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt = 'Description image',
  video,
  icon,
  layout = 'text-only',
  alignment = 'center',
  size = 'md',
  cta,
  features = [],
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const currentSize = descriptionStyles.sizes[size];
  const currentAlignment = descriptionStyles.alignments[alignment];
  const currentLayout = descriptionStyles.layouts[layout];
  const background = descriptionStyles.backgrounds[backgroundColor];
  const isDark = backgroundColor === 'dark';

  const handleCTA = () => {
    if (cta?.onClick) {
      cta.onClick();
    } else if (cta?.href) {
      window.open(cta.href, '_self');
    }
  };

  const renderContent = () => (
    <div className={`${currentAlignment} ${currentSize.maxWidth} ${currentSize.spacing}`}>
      {/* Icon */}
      {icon && (
        <div className={descriptionStyles.media.icon}>
          {icon}
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <h3 className={`${descriptionStyles.typography.subtitle} ${
          isDark ? descriptionStyles.typography.subtitleDark : descriptionStyles.typography.subtitleLight
        } ${currentSize.subtitle}`}>
          {subtitle}
        </h3>
      )}

      {/* Title */}
      <h2 className={`${descriptionStyles.typography.title} ${
        isDark ? descriptionStyles.typography.titleDark : descriptionStyles.typography.titleLight
      } ${currentSize.title}`}>
        {title}
      </h2>

      {/* Description */}
      <p className={`${descriptionStyles.typography.description} ${
        isDark ? descriptionStyles.typography.descriptionDark : descriptionStyles.typography.descriptionLight
      } ${currentSize.description}`}>
        {description}
      </p>

      {/* CTA Button */}
      {cta && (
        <div className="pt-4">
          <ActionButton
            variant="primary"
            size="md"
            onClick={handleCTA}
          >
            {cta.text}
          </ActionButton>
        </div>
      )}
    </div>
  );

  const renderMedia = () => {
    if (video) {
      return (
        <video 
          controls
          className={descriptionStyles.media.video}
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      );
    }

    if (image) {
      return (
        <img
          src={image}
          alt={imageAlt}
          className={descriptionStyles.media.image}
        />
      );
    }

    return null;
  };

  const renderLayoutContent = () => {
    switch (layout) {
      case 'text-only':
        return renderContent();

      case 'image-left':
        return (
          <>
            <div className={descriptionStyles.order.imageFirst}>
              {renderMedia()}
            </div>
            <div className={descriptionStyles.order.contentSecond}>
              {renderContent()}
            </div>
          </>
        );

      case 'image-right':
        return (
          <>
            <div className={descriptionStyles.order.contentFirst}>
              {renderContent()}
            </div>
            <div className={descriptionStyles.order.imageSecond}>
              {renderMedia()}
            </div>
          </>
        );

      case 'image-top':
        return (
          <>
            {renderMedia()}
            {renderContent()}
          </>
        );

      case 'image-bottom':
        return (
          <>
            {renderContent()}
            {renderMedia()}
          </>
        );

      default:
        return renderContent();
    }
  };

  return (
    <section 
      className={`${descriptionStyles.container.base} ${background} ${className}`}
      {...props}
    >
      <div className={descriptionStyles.container.wrapper}>
        <div className={currentLayout}>
          {renderLayoutContent()}
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className={descriptionStyles.features.container}>
            {features.map((feature, index) => (
              <div key={index} className={descriptionStyles.features.item}>
                {feature.icon && (
                  <div className={`${descriptionStyles.features.icon} ${
                    isDark ? descriptionStyles.features.iconDark : descriptionStyles.features.iconLight
                  }`}>
                    {feature.icon}
                  </div>
                )}
                <h4 className={`${descriptionStyles.features.title} ${
                  isDark ? descriptionStyles.features.titleDark : descriptionStyles.features.titleLight
                }`}>
                  {feature.title}
                </h4>
                <p className={`${descriptionStyles.features.description} ${
                  isDark ? descriptionStyles.features.descriptionDark : descriptionStyles.features.descriptionLight
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { FeatureCardsProps } from './type';
import { featureCardsStyles } from './style';

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  title,
  subtitle,
  description,
  items,
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const background = featureCardsStyles.backgrounds[backgroundColor];
  const isDark = backgroundColor === 'dark';

  const handleItemClick = (item: any) => {
    if (item.link?.onClick) {
      item.link.onClick();
    } else if (item.link?.href) {
      window.open(item.link.href, '_self');
    }
  };

  const renderCard = (item: any, index: number) => {
    const hasInteraction = item.link?.href || item.link?.onClick;
    
    return (
      <div
        key={item.id}
        className={`${
          isDark ? featureCardsStyles.card.baseDark : featureCardsStyles.card.baseLight
        } ${hasInteraction ? `${
          (featureCardsStyles.card as any).hover || 
          (isDark ? (featureCardsStyles.card as any).hoverDark : (featureCardsStyles.card as any).hoverLight) || ''
        } cursor-pointer` : ''} ${featureCardsStyles.common.transition}`}
        onClick={() => hasInteraction && handleItemClick(item)}
      >
        <div className={featureCardsStyles.card.content}>
          {/* Badge */}
          {item.badge && (
            <span className={featureCardsStyles.card.badge}>
              {item.badge}
            </span>
          )}

          {/* Number */}
          <div className={featureCardsStyles.card.number}>
            {index + 1}
          </div>

          {/* Image */}
          {item.image && (
            <img
              src={item.image}
              alt={item.imageAlt || item.title}
              className={featureCardsStyles.card.image}
            />
          )}

          {/* Icon */}
          {!item.image && item.icon && (
            <div className={`${featureCardsStyles.card.icon} ${
              isDark ? featureCardsStyles.card.iconDark : featureCardsStyles.card.iconLight
            }`}>
              {item.icon}
            </div>
          )}

          {/* Title */}
          <h3 className={`${featureCardsStyles.card.title} ${
            isDark ? featureCardsStyles.card.titleDark : featureCardsStyles.card.titleLight
          }`}>
            {item.title}
          </h3>

          {/* Description */}
          <p className={`${featureCardsStyles.card.description} ${
            isDark ? featureCardsStyles.card.descriptionDark : featureCardsStyles.card.descriptionLight
          }`}>
            {item.description}
          </p>

          {/* Link */}
          {item.link && (
            <div className={`${featureCardsStyles.card.link} ${
              isDark ? featureCardsStyles.card.linkDark : featureCardsStyles.card.linkLight
            }`}>
              {item.link.text || 'Learn more'}
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      className={`${featureCardsStyles.container.base} ${background} ${className}`}
      {...props}
    >
      <div className={featureCardsStyles.container.wrapper}>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className={`${featureCardsStyles.header.container} ${featureCardsStyles.header.alignment}`}>
            {/* Subtitle */}
            {subtitle && (
              <h3 className={`${featureCardsStyles.header.subtitle} ${
                isDark ? featureCardsStyles.header.subtitleDark : featureCardsStyles.header.subtitleLight
              }`}>
                {subtitle}
              </h3>
            )}

            {/* Title */}
            {title && (
              <h2 className={`${featureCardsStyles.header.title} ${
                isDark ? featureCardsStyles.header.titleDark : featureCardsStyles.header.titleLight
              }`}>
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className={`${featureCardsStyles.header.description} ${
                isDark ? featureCardsStyles.header.descriptionDark : featureCardsStyles.header.descriptionLight
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Cards */}
        <div className={featureCardsStyles.common.cards}>
          {items.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { GridProps } from './type';
import { gridStyles } from './style';

export const Grid: React.FC<GridProps> = ({
  title,
  subtitle,
  description,
  items,
  columns = 3,
  gap = 'md',
  alignment = 'center',
  itemStyle = 'card',
  showItemNumbers = false,
  headerAlignment = 'center',
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const background = gridStyles.backgrounds[backgroundColor];
  const columnClass = gridStyles.columns[columns];
  const gapClass = gridStyles.gaps[gap];
  const headerAlignmentClass = gridStyles.header.alignments[headerAlignment];
  const itemStyleConfig = gridStyles.items[itemStyle];
  const isDark = backgroundColor === 'dark';

  const handleItemClick = (item: any) => {
    if (item.link?.onClick) {
      item.link.onClick();
    } else if (item.link?.href) {
      window.open(item.link.href, '_self');
    }
  };

  const renderItem = (item: any, index: number) => {
    const hasInteraction = item.link?.href || item.link?.onClick;
    
    return (
      <div
        key={item.id}
        className={`${
          isDark ? itemStyleConfig.baseDark : itemStyleConfig.baseLight
        } ${hasInteraction ? `${
          (itemStyleConfig as any).hover || 
          (isDark ? (itemStyleConfig as any).hoverDark : (itemStyleConfig as any).hoverLight) || ''
        } cursor-pointer` : ''} ${gridStyles.common.transition}`}
        onClick={() => hasInteraction && handleItemClick(item)}
      >
        <div className={gridStyles.itemContent.container}>
          <div className={gridStyles.itemContent.header}>
            {/* Badge */}
            {item.badge && (
              <span className={gridStyles.itemContent.badge}>
                {item.badge}
              </span>
            )}

            {/* Number */}
            {showItemNumbers && (
              <div className={gridStyles.itemContent.number}>
                {index + 1}
              </div>
            )}

            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className={gridStyles.itemContent.image}
              />
            )}

            {/* Icon */}
            {!item.image && item.icon && (
              <div className={`${gridStyles.itemContent.icon} ${
                isDark ? gridStyles.itemContent.iconDark : gridStyles.itemContent.iconLight
              }`}>
                {item.icon}
              </div>
            )}

            {/* Title */}
            <h3 className={`${gridStyles.itemContent.title} ${
              isDark ? gridStyles.itemContent.titleDark : gridStyles.itemContent.titleLight
            }`}>
              {item.title}
            </h3>

            {/* Description */}
            <p className={`${gridStyles.itemContent.description} ${
              isDark ? gridStyles.itemContent.descriptionDark : gridStyles.itemContent.descriptionLight
            }`}>
              {item.description}
            </p>
          </div>

          {/* Link */}
          {item.link && (
            <div className={`${gridStyles.itemContent.link} ${
              isDark ? gridStyles.itemContent.linkDark : gridStyles.itemContent.linkLight
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
      className={`${gridStyles.container.base} ${background} ${className}`}
      {...props}
    >
      <div className={gridStyles.container.wrapper}>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className={`${gridStyles.header.container} ${headerAlignmentClass}`}>
            {/* Subtitle */}
            {subtitle && (
              <h3 className={`${gridStyles.header.subtitle} ${
                isDark ? gridStyles.header.subtitleDark : gridStyles.header.subtitleLight
              }`}>
                {subtitle}
              </h3>
            )}

            {/* Title */}
            {title && (
              <h2 className={`${gridStyles.header.title} ${
                isDark ? gridStyles.header.titleDark : gridStyles.header.titleLight
              }`}>
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className={`${gridStyles.header.description} ${
                isDark ? gridStyles.header.descriptionDark : gridStyles.header.descriptionLight
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={`${gridStyles.common.grid} ${columnClass} ${gapClass}`}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState } from 'react';
import { AccordionProps } from './type';
import { accordionStyles } from './style';

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  description,
  items,
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // 첫 번째 아이템은 기본적으로 열려있음
  const background = accordionStyles.backgrounds[backgroundColor];
  const isDark = backgroundColor === 'dark';

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const handleItemClick = (item: any) => {
    if (item.link?.onClick) {
      item.link.onClick();
    } else if (item.link?.href) {
      window.open(item.link.href, '_self');
    }
  };

  const renderAccordionItem = (item: any, index: number) => {
    const isOpen = openItems.has(index);
    const hasInteraction = item.link?.href || item.link?.onClick;
    
    return (
      <div key={item.id} className={accordionStyles.item.container}>
        {/* Header */}
        <button
          className={`${accordionStyles.item.header} ${
            isDark ? accordionStyles.item.headerDark : accordionStyles.item.headerLight
          } ${isOpen ? accordionStyles.item.headerOpen : ''}`}
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-center">
            {/* Number */}
            <div className={accordionStyles.item.number}>{index + 1}</div>
            
            {/* Title */}
            <h3 className={`${accordionStyles.item.title} ${
              isDark ? accordionStyles.item.titleDark : accordionStyles.item.titleLight
            }`}>
              {item.title}
            </h3>
          </div>
          
          {/* Badge */}
          {item.badge && (
            <span className={accordionStyles.item.badge}>
              {item.badge}
            </span>
          )}
          
          {/* Arrow Icon */}
          <svg
            className={`${accordionStyles.item.arrow} ${isOpen ? accordionStyles.item.arrowOpen : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Content */}
        <div className={`${accordionStyles.item.content} ${isOpen ? accordionStyles.item.contentOpen : ''}`}>
          <div className={accordionStyles.item.contentInner}>
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className={accordionStyles.item.image}
              />
            )}

            {/* Icon */}
            {!item.image && item.icon && (
              <div className={`${accordionStyles.item.icon} ${
                isDark ? accordionStyles.item.iconDark : accordionStyles.item.iconLight
              }`}>
                {item.icon}
              </div>
            )}

            {/* Description */}
            <p className={`${accordionStyles.item.description} ${
              isDark ? accordionStyles.item.descriptionDark : accordionStyles.item.descriptionLight
            }`}>
              {item.description}
            </p>

            {/* Link */}
            {item.link && (
              <div 
                className={`${accordionStyles.item.link} ${
                  isDark ? accordionStyles.item.linkDark : accordionStyles.item.linkLight
                } ${hasInteraction ? 'cursor-pointer' : ''}`}
                onClick={() => hasInteraction && handleItemClick(item)}
              >
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
      </div>
    );
  };

  return (
    <section 
      className={`${accordionStyles.container.base} ${background} ${className}`}
      {...props}
    >
      <div className={accordionStyles.container.wrapper}>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className={`${accordionStyles.header.container} ${accordionStyles.header.alignment}`}>
            {/* Subtitle */}
            {subtitle && (
              <h3 className={`${accordionStyles.header.subtitle} ${
                isDark ? accordionStyles.header.subtitleDark : accordionStyles.header.subtitleLight
              }`}>
                {subtitle}
              </h3>
            )}

            {/* Title */}
            {title && (
              <h2 className={`${accordionStyles.header.title} ${
                isDark ? accordionStyles.header.titleDark : accordionStyles.header.titleLight
              }`}>
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className={`${accordionStyles.header.description} ${
                isDark ? accordionStyles.header.descriptionDark : accordionStyles.header.descriptionLight
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Accordion Items */}
        <div className={accordionStyles.common.items}>
          {items.map((item, index) => renderAccordionItem(item, index))}
        </div>
      </div>
    </section>
  );
};

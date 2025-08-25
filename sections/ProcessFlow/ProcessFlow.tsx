'use client';

import React from 'react';
import { ProcessFlowProps } from './type';
import { processFlowStyles } from './style';

export const ProcessFlow: React.FC<ProcessFlowProps> = ({
  title,
  subtitle,
  description,
  items,
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const background = processFlowStyles.backgrounds[backgroundColor];
  const isDark = backgroundColor === 'dark';

  const handleItemClick = (item: any) => {
    if (item.link?.onClick) {
      item.link.onClick();
    } else if (item.link?.href) {
      window.open(item.link.href, '_self');
    }
  };

  const renderStep = (item: any, index: number) => {
    const hasInteraction = item.link?.href || item.link?.onClick;
    const isLast = index === items.length - 1;
    
    return (
      <div key={item.id} className="flex flex-col items-center">
        {/* Step Circle */}
        <div
          className={`${
            isDark ? processFlowStyles.step.circleDark : processFlowStyles.step.circleLight
          } ${hasInteraction ? 'cursor-pointer' : ''} ${processFlowStyles.common.transition}`}
          onClick={() => hasInteraction && handleItemClick(item)}
        >
          <div className={processFlowStyles.step.number}>{index + 1}</div>
        </div>

        {/* Step Content */}
        <div className={`${processFlowStyles.step.content} ${
          isDark ? processFlowStyles.step.contentDark : processFlowStyles.step.contentLight
        }`}>
          {/* Badge */}
          {item.badge && (
            <span className={processFlowStyles.step.badge}>
              {item.badge}
            </span>
          )}

          {/* Title */}
          <h3 className={`${processFlowStyles.step.title} ${
            isDark ? processFlowStyles.step.titleDark : processFlowStyles.step.titleLight
          }`}>
            {item.title}
          </h3>

          {/* Description */}
          <p className={`${processFlowStyles.step.description} ${
            isDark ? processFlowStyles.step.descriptionDark : processFlowStyles.step.descriptionLight
          }`}>
            {item.description}
          </p>

          {/* Link */}
          {item.link && (
            <div className={`${processFlowStyles.step.link} ${
              isDark ? processFlowStyles.step.linkDark : processFlowStyles.step.linkLight
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

        {/* Connector Line */}
        {!isLast && (
          <div className={`${processFlowStyles.connector.line} ${
            isDark ? processFlowStyles.connector.lineDark : processFlowStyles.connector.lineLight
          }`}>
            <div className={processFlowStyles.connector.arrow}></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      className={`${processFlowStyles.container.base} ${background} ${className}`}
      {...props}
    >
      <div className={processFlowStyles.container.wrapper}>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className={`${processFlowStyles.header.container} ${processFlowStyles.header.alignment}`}>
            {/* Subtitle */}
            {subtitle && (
              <h3 className={`${processFlowStyles.header.subtitle} ${
                isDark ? processFlowStyles.header.subtitleDark : processFlowStyles.header.subtitleLight
              }`}>
                {subtitle}
              </h3>
            )}

            {/* Title */}
            {title && (
              <h2 className={`${processFlowStyles.header.title} ${
                isDark ? processFlowStyles.header.titleDark : processFlowStyles.header.titleLight
              }`}>
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className={`${processFlowStyles.header.description} ${
                isDark ? processFlowStyles.header.descriptionDark : processFlowStyles.header.descriptionLight
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Process Flow */}
        <div className={processFlowStyles.common.flow}>
          {items.map((item, index) => renderStep(item, index))}
        </div>
      </div>
    </section>
  );
};

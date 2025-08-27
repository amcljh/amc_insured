'use client';

import React from 'react';
import { motion } from 'motion/react';
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
  backgroundOverlayText,
  mediaOverlayText,
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const renderContent = () => {
    // text-left 레이아웃일 때는 강제로 좌측 정렬
    const contentAlignment = layout === 'text-left' ? 'text-left' : currentAlignment;
    
    return (
      <motion.div 
        className={`${contentAlignment} ${currentSize.maxWidth} ${currentSize.spacing}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Icon */}
        {icon && (
          <motion.div 
            className={descriptionStyles.media.icon}
            variants={itemVariants}
          >
            {icon}
          </motion.div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.h3 
            className={`${descriptionStyles.typography.subtitle} ${
              isDark ? descriptionStyles.typography.subtitleDark : descriptionStyles.typography.subtitleLight
            } ${currentSize.subtitle}`}
            variants={itemVariants}
          >
            {subtitle}
          </motion.h3>
        )}

        {/* Title */}
        <motion.h2 
          className={`${descriptionStyles.typography.title} ${
            isDark ? descriptionStyles.typography.titleDark : descriptionStyles.typography.titleLight
          } ${currentSize.title}`}
          variants={itemVariants}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p 
          className={`${descriptionStyles.typography.description} ${
            isDark ? descriptionStyles.typography.descriptionDark : descriptionStyles.typography.descriptionLight
          } ${currentSize.description}`}
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        {cta && (
          <motion.div 
            className="pt-4"
            variants={itemVariants}
          >
            <ActionButton
              variant="primary"
              size="md"
              onClick={handleCTA}
            >
              {cta.text}
            </ActionButton>
          </motion.div>
        )}
      </motion.div>
    );
  };

  const renderLeftContent = () => (
    <motion.div 
      className="text-left space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Icon */}
      {icon && (
        <motion.div 
          className={descriptionStyles.media.icon}
          variants={itemVariants}
        >
          {icon}
        </motion.div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.h3 
          className={`${descriptionStyles.typography.subtitle} ${
            isDark ? descriptionStyles.typography.subtitleDark : descriptionStyles.typography.subtitleLight
          } ${currentSize.subtitle}`}
          variants={itemVariants}
        >
          {subtitle}
        </motion.h3>
      )}

      {/* Title */}
      <motion.h2 
        className={`${descriptionStyles.typography.title} ${
          isDark ? descriptionStyles.typography.titleDark : descriptionStyles.typography.titleLight
        } ${currentSize.title}`}
        variants={itemVariants}
      >
        {title}
      </motion.h2>
    </motion.div>
  );

  const renderRightContent = () => (
    <motion.div 
      className="text-left space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Description */}
      <motion.p 
        className={`${descriptionStyles.typography.description} ${
          isDark ? descriptionStyles.typography.descriptionDark : descriptionStyles.typography.descriptionLight
        } ${currentSize.description}`}
        variants={itemVariants}
      >
        {description}
      </motion.p>

      {/* CTA Button */}
      {cta && (
        <motion.div 
          className="pt-4"
          variants={itemVariants}
        >
          <ActionButton
            variant="primary"
            size="md"
            onClick={handleCTA}
          >
            {cta.text}
          </ActionButton>
        </motion.div>
      )}
    </motion.div>
  );

  const renderMedia = () => {
    if (video) {
      return (
        <motion.div
          className="relative"
          variants={mediaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <video 
            controls
            className={descriptionStyles.media.video}
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
          {mediaOverlayText && (
            <div className={descriptionStyles.media.overlay}>
              <span className={descriptionStyles.media.overlayText}>
                {mediaOverlayText}
              </span>
            </div>
          )}
        </motion.div>
      );
    }

    if (image) {
      return (
        <motion.div
          className="relative"
          variants={mediaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <img
            src={image}
            alt={imageAlt}
            className={descriptionStyles.media.image}
          />
          {mediaOverlayText && (
            <div className={descriptionStyles.media.overlay}>
              <span className={descriptionStyles.media.overlayText}>
                {mediaOverlayText}
              </span>
            </div>
          )}
        </motion.div>
      );
    }

    return null;
  };

  const renderLayoutContent = () => {
    switch (layout) {
      case 'text-only':
        return renderContent();

      case 'text-left':
        return (
          <>
            {renderLeftContent()}
            {renderRightContent()}
          </>
        );

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
      {/* Background Overlay Text */}
      {backgroundOverlayText && (
        <motion.div 
          className={descriptionStyles.backgroundOverlay.container}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className={descriptionStyles.backgroundOverlay.text}>
            {backgroundOverlayText}
          </span>
        </motion.div>
      )}

      <div className={descriptionStyles.container.wrapper}>
        <motion.div 
          className={currentLayout}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {renderLayoutContent()}
        </motion.div>

        {/* Features */}
        {features.length > 0 && (
          <motion.div 
            className={descriptionStyles.features.container}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className={descriptionStyles.features.item}
                variants={itemVariants}
              >
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'motion/react';
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.8, // title의 모든 줄이 나타난 후 시작
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 1.2, // subtitle 이후 시작
      },
    },
  };

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
      className={`${heroStyles.container.base} ${fullHeight ? heroStyles.container.fullHeight : heroStyles.container.normalHeight} ${className}`}
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
      {(backgroundImage || backgroundVideo) && overlayOpacity > 0 && (
        <div
          className={heroStyles.background.overlay}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className={heroStyles.content.wrapper}>
        <motion.div 
          className={`${heroStyles.content.container} ${currentAlignment} ${!primaryCTA && !secondaryCTA ? 'text-center items-center' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={`${heroStyles.content.maxWidth} ${currentSize.spacing}`}>
            {/* Badge */}
            {badge && (
              <motion.div 
                className={heroStyles.typography.badge}
                variants={badgeVariants}
              >
                {badge}
              </motion.div>
            )}

            {/* Main Title */}
            <motion.div variants={titleVariants}>
              {title.map((line, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut" as const,
                      },
                    },
                  }}
                >
                  <h1 className={`${heroStyles.typography.title} ${currentSize.title}`}>
                    {line}
                  </h1>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtitle */}
            {subtitle && (
              <motion.h2 
                className={`${heroStyles.typography.subtitle} ${currentSize.subtitle}`}
                variants={subtitleVariants}
              >
                {subtitle}
              </motion.h2>
            )}

            {/* Description */}
            {description && (
              <motion.p 
                className={`${heroStyles.typography.description} ${currentSize.description}`}
                variants={itemVariants}
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            {(primaryCTA || secondaryCTA) && (
              <motion.div 
                className={`${heroStyles.buttons.container} ${buttonAlignment}`}
                variants={buttonVariants}
              >
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
              </motion.div>
            )}

            {/* Features List */}
            {features.length > 0 && (
              <motion.div 
                className={heroStyles.features.container}
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className={heroStyles.features.item}
                    variants={itemVariants}
                    custom={index}
                  >
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
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PartnersProps } from './type';

export const Partners: React.FC<PartnersProps> = ({
  title = 'Our Partners',
  subtitle,
  description,
  partners,
  showPartnerNames = false,
  showPartnerDescriptions = false,
  columns = 4,
  alignment = 'center',
  logoStyle = 'grayscale',
  backgroundColor = 'white',
  className = '',
  ...props
}) => {
  const backgroundClass = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent',
  }[backgroundColor];
  
  const isDark = backgroundColor === 'dark';

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-6',
  }[columns];

  const logoStyleClass = {
    grayscale: 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100',
    color: 'opacity-80 hover:opacity-100',
    'hover-color': 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100',
  }[logoStyle];

  const handlePartnerClick = (partner: any) => {
    if (partner.website) {
      window.open(partner.website, '_blank', 'noopener,noreferrer');
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const partnerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className={`py-16 lg:py-24 ${backgroundClass} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle || description) && (
          <motion.div 
            className={`mb-12 lg:mb-16 ${alignmentClass} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {subtitle && (
              <h3 className={`text-xl font-medium mb-4 ${
              isDark ? 'text-[#0456b8]' : 'text-[#03418a]'
            }`}>{subtitle}</h3>
            )}
            {title && (
              <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{title}</h2>
            )}
            {description && (
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{description}</p>
            )}
          </motion.div>
        )}

        {/* Partners Grid */}
        <motion.div 
          className={`grid ${columnClass} gap-8 lg:gap-12`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className={`flex flex-col items-center justify-center p-6 ${partner.website ? 'cursor-pointer' : ''} group`}
              onClick={() => handlePartnerClick(partner)}
              variants={partnerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.logoAlt || `${partner.name} logo`}
                className={`h-12 lg:h-16 w-auto object-contain transition-all duration-300 ${logoStyleClass}`}
              />

              {/* Partner Name */}
              {showPartnerNames && (
                <h4 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {partner.name}
                </h4>
              )}

              {/* Partner Description */}
              {showPartnerDescriptions && partner.description && (
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {partner.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

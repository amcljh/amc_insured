'use client';

import React from 'react';
import { PeopleProps } from './type';

const backgroundColors = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  blue: 'bg-[#f0f6ff]',
  dark: 'bg-gray-900',
} as const;

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
} as const;

export const People: React.FC<PeopleProps> = ({
  id,
  subtitle,
  title,
  description,
  people,
  columns = 3,
  backgroundColor = 'gray',
  showSocials = true,
  layout = 'card',
  className,
  ...props
}) => {
  const isDark = backgroundColor === 'dark';

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${backgroundColors[backgroundColor]} ${className || ''}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {subtitle && (
            <p className={`text-sm font-medium uppercase tracking-wide mb-3 ${
              isDark ? 'text-[#0456b8]' : 'text-[#03418a]'
            }`}>
              {subtitle}
            </p>
          )}
          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          {description && (
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {description}
            </p>
          )}
        </div>

        {/* People Grid */}
        <div className={`grid ${columnClasses[columns]} gap-8 lg:gap-12`}>
          {people.map((person) => (
            <div
              key={person.id}
              className="group"
            >
              {layout === 'hero' ? (
                // Hero Layout - Large emphasized images
                <div className="space-y-6">
                  {/* Large Portrait Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="aspect-[4/5] w-full">
                      <img
                        src={person.image}
                        alt={person.imageAlt || person.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale hover:grayscale-0"
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  {person.quote && (
                    <blockquote className={`text-lg italic leading-relaxed ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      "{person.quote}"
                    </blockquote>
                  )}

                  {/* Person Info */}
                  <div className="space-y-2">
                    <div className={`border-t pt-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {person.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {person.position}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  {showSocials && person.socialLinks && (
                    <div className="flex space-x-4 pt-2">
                      {person.socialLinks.linkedin && (
                        <a
                          href={person.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors ${
                            isDark ? 'text-gray-500 hover:text-[#0456b8]' : 'text-gray-400 hover:text-[#03418a]'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                          </svg>
                        </a>
                      )}
                      {person.socialLinks.twitter && (
                        <a
                          href={person.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors ${
                            isDark ? 'text-gray-500 hover:text-[#0456b8]' : 'text-gray-400 hover:text-[#03418a]'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                      )}
                      {person.socialLinks.email && (
                        <a
                          href={`mailto:${person.socialLinks.email}`}
                          className={`transition-colors ${
                            isDark ? 'text-gray-500 hover:text-green-400' : 'text-gray-400 hover:text-green-600'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // Original Card/Minimal Layout
                <div className={`
                  group
                  ${layout === 'card' 
                    ? `rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${
                        isDark ? 'bg-gray-800' : 'bg-white'
                      }` 
                    : 'text-center'
                  }
                `}>
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-full overflow-hidden mx-auto w-32 h-32 lg:w-40 lg:h-40">
                      <img
                        src={person.image}
                        alt={person.imageAlt || person.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Person Info */}
                  <div className="text-center space-y-3">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {person.name}
                    </h3>
                    <p className={`font-medium ${isDark ? 'text-[#0456b8]' : 'text-[#03418a]'}`}>
                      {person.position}
                    </p>
                    {person.bio && (
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {person.bio}
                      </p>
                    )}

                    {/* Experience & Education */}
                    {(person.experience || person.education) && (
                      <div className={`pt-3 space-y-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {person.experience && (
                          <p><span className="font-medium">Experience:</span> {person.experience}</p>
                        )}
                        {person.education && (
                          <p><span className="font-medium">Education:</span> {person.education}</p>
                        )}
                      </div>
                    )}

                    {/* Social Links */}
                    {showSocials && person.socialLinks && (
                      <div className="flex justify-center space-x-4 pt-4">
                        {person.socialLinks.linkedin && (
                          <a
                            href={person.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${
                              isDark ? 'text-gray-500 hover:text-[#0456b8]' : 'text-gray-400 hover:text-[#03418a]'
                            }`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                            </svg>
                          </a>
                        )}
                        {person.socialLinks.twitter && (
                          <a
                            href={person.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${
                              isDark ? 'text-gray-500 hover:text-[#0456b8]' : 'text-gray-400 hover:text-[#03418a]'
                            }`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                          </a>
                        )}
                        {person.socialLinks.email && (
                          <a
                            href={`mailto:${person.socialLinks.email}`}
                            className={`transition-colors ${
                              isDark ? 'text-gray-500 hover:text-green-400' : 'text-gray-400 hover:text-green-600'
                            }`}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

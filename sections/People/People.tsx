'use client'

import React from 'react'
import { PeopleProps, Person } from './type'
import {
  backgroundColors,
  columnClasses,
  groupTitleClasses,
  heroPhotoAspectClasses,
  heroPhotoImageClasses,
  personOffsetClasses,
  placeholderBoxClasses,
  placeholderIconClasses,
} from './style'

type Layout = NonNullable<PeopleProps['layout']>

// 사진이 없는 인원용 실루엣 플레이스홀더
const PersonPlaceholder: React.FC<{ className: string; isDark: boolean }> = ({
  className,
  isDark,
}) => (
  <div
    className={`${placeholderBoxClasses} ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    } ${className}`}
    aria-hidden='true'
  >
    <svg
      className={placeholderIconClasses}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M12 12c2.65 0 4.8-2.15 4.8-4.8S14.65 2.4 12 2.4 7.2 4.55 7.2 7.2 9.35 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z' />
    </svg>
  </div>
)

interface SocialLinksProps {
  socialLinks: NonNullable<Person['socialLinks']>
  isDark: boolean
  className: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  socialLinks,
  isDark,
  className,
}) => (
  <div className={className}>
    {socialLinks.linkedin && (
      <a
        href={socialLinks.linkedin}
        target='_blank'
        rel='noopener noreferrer'
        className={`transition-colors ${
          isDark
            ? 'text-gray-500 hover:text-[#0456b8]'
            : 'text-gray-400 hover:text-[#03418a]'
        }`}
      >
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' />
        </svg>
      </a>
    )}
    {socialLinks.twitter && (
      <a
        href={socialLinks.twitter}
        target='_blank'
        rel='noopener noreferrer'
        className={`transition-colors ${
          isDark
            ? 'text-gray-500 hover:text-[#0456b8]'
            : 'text-gray-400 hover:text-[#03418a]'
        }`}
      >
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      </a>
    )}
    {socialLinks.email && (
      <a
        href={`mailto:${socialLinks.email}`}
        className={`transition-colors ${
          isDark
            ? 'text-gray-500 hover:text-green-400'
            : 'text-gray-400 hover:text-green-600'
        }`}
      >
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      </a>
    )}
  </div>
)

interface PersonCardProps {
  person: Person
  layout: Layout
  isDark: boolean
  showSocials: boolean
}

// 인물 1명 카드 (hero / card / minimal)
const PersonCard: React.FC<PersonCardProps> = ({
  person,
  layout,
  isDark,
  showSocials,
}) => {
  if (layout === 'hero') {
    // Hero Layout - Large emphasized images
    return (
      <div className='space-y-6'>
        {/* Large Portrait Image */}
        <div className='relative overflow-hidden rounded-lg'>
          {person.image ? (
            <div className={`${heroPhotoAspectClasses} w-full`}>
              <img
                src={person.image}
                alt={person.imageAlt || person.name}
                className={heroPhotoImageClasses}
              />
            </div>
          ) : (
            <PersonPlaceholder
              className={`${heroPhotoAspectClasses} w-full`}
              isDark={isDark}
            />
          )}
        </div>

        {/* Quote */}
        {person.quote && (
          <blockquote
            className={`text-lg italic leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            "{person.quote}"
          </blockquote>
        )}

        {/* Person Info */}
        <div className='space-y-2'>
          <div
            className={`border-t pt-4 ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <h3
              className={`text-lg font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {person.name}
            </h3>
            <p
              className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {person.position}
            </p>
          </div>
        </div>

        {/* Social Links */}
        {showSocials && person.socialLinks && (
          <SocialLinks
            socialLinks={person.socialLinks}
            isDark={isDark}
            className='flex space-x-4 pt-2'
          />
        )}
      </div>
    )
  }

  // Original Card/Minimal Layout
  return (
    <div
      className={`
      group
      ${
        layout === 'card'
          ? `rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`
          : 'text-center'
      }
    `}
    >
      {/* Profile Image */}
      <div className='relative mb-6'>
        <div className='aspect-square rounded-full overflow-hidden mx-auto w-32 h-32 lg:w-40 lg:h-40'>
          {person.image ? (
            <img
              src={person.image}
              alt={person.imageAlt || person.name}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            />
          ) : (
            <PersonPlaceholder className='w-full h-full' isDark={isDark} />
          )}
        </div>
      </div>

      {/* Person Info */}
      <div className='text-center space-y-3'>
        <h3
          className={`text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {person.name}
        </h3>
        <p
          className={`font-medium ${
            isDark ? 'text-[#0456b8]' : 'text-[#03418a]'
          }`}
        >
          {person.position}
        </p>
        {person.bio && (
          <p
            className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {person.bio}
          </p>
        )}

        {/* Experience & Education */}
        {(person.experience || person.education) && (
          <div
            className={`pt-3 space-y-2 text-xs ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {person.experience && (
              <p>
                <span className='font-medium'>Experience:</span>{' '}
                {person.experience}
              </p>
            )}
            {person.education && (
              <p>
                <span className='font-medium'>Education:</span>{' '}
                {person.education}
              </p>
            )}
          </div>
        )}

        {/* Social Links */}
        {showSocials && person.socialLinks && (
          <SocialLinks
            socialLinks={person.socialLinks}
            isDark={isDark}
            className='flex justify-center space-x-4 pt-4'
          />
        )}
      </div>
    </div>
  )
}

export const People: React.FC<PeopleProps> = ({
  id,
  subtitle,
  title,
  description,
  people,
  groups,
  columns = 3,
  backgroundColor = 'gray',
  showSocials = true,
  layout = 'card',
  className,
  ...props
}) => {
  const isDark = backgroundColor === 'dark'

  const renderGrid = (list: Person[]) => (
    <div className={`grid ${columnClasses[columns]}`}>
      {list.map((person) => (
        <div
          key={person.id}
          // offset: 앞 사람과 파트가 다른 인원은 좌측 여백으로 분리를 표시
          className={`group ${person.offset ? personOffsetClasses : ''}`}
        >
          <PersonCard
            person={person}
            layout={layout}
            isDark={isDark}
            showSocials={showSocials}
          />
        </div>
      ))}
    </div>
  )

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${backgroundColors[backgroundColor]} ${
        className || ''
      }`}
      {...props}
    >
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          {subtitle && (
            <h2
              className={`text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-3 ${
                isDark ? 'text-[#0456b8]' : 'text-[#03418a]'
              }`}
            >
              {subtitle}
            </h2>
          )}
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* People Grid — 그룹(팀)이 있으면 팀별 헤딩 + 그리드, 없으면 단일 그리드 */}
        {groups && groups.length > 0 ? (
          <div className='space-y-16 lg:space-y-20'>
            {groups.map((group) => (
              <div key={group.id}>
                <h3
                  className={`${groupTitleClasses} ${
                    isDark
                      ? 'text-white border-gray-700'
                      : 'text-gray-900 border-gray-200'
                  }`}
                >
                  {group.title}
                </h3>
                {renderGrid(group.people)}
              </div>
            ))}
          </div>
        ) : (
          renderGrid(people ?? [])
        )}
      </div>
    </section>
  )
}

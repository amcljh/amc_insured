'use client'

import React, { useState } from 'react'
import { ContactProps } from './type'
import { ActionButton } from '../../components'

export const Contact: React.FC<ContactProps> = ({
  title = 'Contact Us',
  subtitle,
  description,
  contactMethods = [],
  showForm = true,
  formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Your name',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'your@email.com',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Your message...',
    },
  ],
  formTitle = 'Send us a message',
  submitButtonText = 'Send Message',
  onFormSubmit,
  layout = 'side-by-side',
  alignment = 'left',
  showMap = false,
  mapEmbedUrl,
  backgroundColor = 'white',
  float = 'none',
  className = '',
  ...props
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!onFormSubmit) return

    setIsSubmitting(true)
    try {
      await onFormSubmit(formData)
      setFormData({})
    } finally {
      setIsSubmitting(false)
    }
  }

  const backgroundClass = {
    white: 'bg-white',
    dark: 'bg-gray-900',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent',
  }[backgroundColor]

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment]

  const layoutClass = {
    'form-only': 'grid grid-cols-1',
    'contact-only': 'grid grid-cols-1',
    'side-by-side': 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16',
    'form-top': 'grid grid-cols-1 gap-12',
  }[layout]

  // Float positioning classes
  const getFloatClasses = () => {
    if (float === 'none') return ''

    const baseClasses = 'lg:w-[500px]'

    switch (float) {
      case 'left':
        return `${baseClasses} lg:ml-0 lg:mr-auto`
      case 'right':
        return `${baseClasses} lg:ml-auto lg:mr-0`
      case 'center':
        return `${baseClasses} lg:mx-auto`
      default:
        return ''
    }
  }

  const renderContactMethods = () => (
    <div className='space-y-8'>
      <div className={alignmentClass}>
        {subtitle && (
          <h3 className='text-xl font-bold mb-4 text-[#03418a]'>{subtitle}</h3>
        )}
        {title && (
          <h2 className='text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-gray-900'>
            {title}
          </h2>
        )}
        {description && (
          <p className='text-lg mb-2 text-gray-600 leading-relaxed'>
            {description}
          </p>
        )}
        <p className='font-bold'>e-mail: info@amcrs.co.kr</p>
      </div>

      <div className='space-y-6'>
        {contactMethods.map((method, index) => (
          <div key={index} className='flex items-start space-x-4'>
            <div>
              {method.href ? (
                <a
                  href={method.href}
                  className='inline-flex items-center px-6 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 font-medium'
                >
                  {method.label}
                  <svg
                    className='ml-3 w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </a>
              ) : (
                <p className='text-gray-600'>{method.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {showMap && mapEmbedUrl && (
        <div className='mt-8'>
          <iframe
            src={mapEmbedUrl}
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-lg'
          />
        </div>
      )}
    </div>
  )

  const renderForm = () => (
    <div className='bg-white p-8 rounded-lg shadow-lg'>
      <h3 className='text-2xl font-bold text-gray-900 mb-6'>{formTitle}</h3>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {formFields.map((field) => (
          <div key={field.name}>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              {field.label}
              {field.required && <span className='text-red-500 ml-1'>*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value=''>Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            )}
          </div>
        ))}
        <ActionButton
          type='submit'
          variant='primary'
          size='lg'
          fullWidth
          isLoading={isSubmitting}
        >
          {submitButtonText}
        </ActionButton>
      </form>
    </div>
  )

  return (
    <section
      className={`py-16 lg:py-24 relative ${className}`}
      style={{
        // backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundImage: `url('https://images.unsplash.com/photo-1448523183439-d2ac62aca997?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        // backgroundImage: `url('/hero/top-bg-3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...props}
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className={`bg-white shadow-2xl p-8 lg:p-12 ${getFloatClasses()}`}>
          <div className={layoutClass}>
            {layout === 'form-only' && showForm && renderForm()}
            {layout === 'contact-only' && renderContactMethods()}
            {layout === 'side-by-side' && (
              <>
                {renderContactMethods()}
                {showForm && renderForm()}
              </>
            )}
            {layout === 'form-top' && (
              <>
                {showForm && renderForm()}
                {renderContactMethods()}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

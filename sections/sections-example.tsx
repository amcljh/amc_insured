'use client';

import React from 'react';
import {
  Hero,
  Description,
  Grid,
  Contact,
  Partners,
  Video,
  GridItem,
  Partner,
  ContactMethod
} from './index';

// Sample data
const sampleGridItems: GridItem[] = [
  {
    id: '1',
    title: 'Fast Performance',
    description: 'Lightning-fast loading times and optimized performance for the best user experience.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: 'New',
  },
  {
    id: '2',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee for peace of mind.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Easy Integration',
    description: 'Simple API and comprehensive documentation for seamless integration.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const samplePartners: Partner[] = [
  {
    id: '1',
    name: 'Microsoft',
    logo: 'https://via.placeholder.com/200x80/0078d4/ffffff?text=Microsoft',
    website: 'https://microsoft.com',
    description: 'Global technology leader'
  },
  {
    id: '2',
    name: 'Google',
    logo: 'https://via.placeholder.com/200x80/4285f4/ffffff?text=Google',
    website: 'https://google.com',
    description: 'Search and cloud services'
  },
  {
    id: '3',
    name: 'Apple',
    logo: 'https://via.placeholder.com/200x80/000000/ffffff?text=Apple',
    website: 'https://apple.com',
    description: 'Consumer electronics'
  },
  {
    id: '4',
    name: 'Amazon',
    logo: 'https://via.placeholder.com/200x80/ff9900/000000?text=Amazon',
    website: 'https://amazon.com',
    description: 'E-commerce and cloud'
  },
];

const sampleContactMethods: ContactMethod[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'hello@company.com',
    href: 'mailto:hello@company.com',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    type: 'address',
    label: 'Address',
    value: '123 Business St, City, State 12345',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export const SectionsExample: React.FC = () => {
  const handleFormSubmit = async (data: Record<string, string>) => {
    console.log('Form submitted:', data);
    alert(`Thank you ${data.name}! We'll get back to you soon.`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        badge="New Release"
        subtitle="Welcome to the Future"
        title="Build Amazing Experiences"
        description="Transform your ideas into reality with our powerful platform. Join thousands of creators who trust us to bring their visions to life."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        overlayOpacity={0.6}
        primaryCTA={{
          text: 'Get Started Free',
          onClick: () => alert('Get Started clicked!'),
        }}
        secondaryCTA={{
          text: 'Watch Demo',
          onClick: () => alert('Watch Demo clicked!'),
        }}
        features={[
          'Free 14-day trial',
          'No credit card required',
          'Cancel anytime',
        ]}
        size="lg"
      />

      {/* Description Section */}
      <Description
        subtitle="About Our Platform"
        title="Designed for Modern Businesses"
        description="Our platform combines cutting-edge technology with intuitive design to deliver exceptional results. Whether you're a startup or an enterprise, we have the tools you need to succeed."
        layout="image-right"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team collaboration"
        backgroundColor="gray"
        cta={{
          text: 'Learn More',
          onClick: () => alert('Learn More clicked!'),
        }}
        features={[
          {
            title: 'Analytics Dashboard',
            description: 'Real-time insights and detailed reporting to track your progress.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
          },
          {
            title: 'Team Collaboration',
            description: 'Work together seamlessly with built-in collaboration tools.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            ),
          },
          {
            title: 'API Integration',
            description: 'Connect with your existing tools through our robust API.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
          },
        ]}
      />

      {/* Grid Section */}
      <Grid
        subtitle="Features"
        title="Everything You Need"
        description="Discover the powerful features that make our platform the preferred choice for businesses worldwide."
        items={sampleGridItems}
        columns={3}
        itemStyle="card"
        backgroundColor="white"
      />

      {/* Video Section */}
      <Video
        subtitle="See It In Action"
        title="Watch Our Platform Demo"
        description="Get a complete overview of our platform's capabilities in this comprehensive demo video."
        videoSrc="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        videoPoster="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        size="lg"
        backgroundColor="gray"
        cta={{
          text: 'Start Your Free Trial',
          onClick: () => alert('Free Trial clicked!'),
        }}
      />

      {/* Partners Section */}
      <Partners
        subtitle="Trusted By"
        title="Leading Companies Worldwide"
        description="Join thousands of satisfied customers who trust our platform for their business needs."
        partners={samplePartners}
        columns={4}
        logoStyle="grayscale"
        backgroundColor="white"
      />

      {/* Contact Section */}
      <Contact
        subtitle="Get In Touch"
        title="Ready to Get Started?"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        contactMethods={sampleContactMethods}
        layout="side-by-side"
        backgroundColor="gray"
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}; 
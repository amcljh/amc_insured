'use client';

import React from 'react';
import {
  Hero,
  Description,
  Grid,
  Partners,
  People,
  Contact,
  GridItem,
  Partner,
  Person,
  ContactMethod
} from '../sections';
import { Gnb, Footer } from '../components';

// Insurance services data
const insuranceServices: GridItem[] = [
  {
    id: '1',
    title: 'Life Insurance',
    description: 'Comprehensive life insurance policies to protect your family\'s financial future with competitive rates and flexible terms.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Health Insurance',
    description: 'Complete health coverage solutions including medical, dental, and vision plans from top-rated insurance providers.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Auto Insurance',
    description: 'Protect your vehicle and yourself with comprehensive auto insurance coverage at the best rates available.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12a3 3 0 006 0m-6 0H5m4 0h6m5 0h1M9 12v6a3 3 0 006 0v-6M9 12V9a3 3 0 016 0v3" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Home Insurance',
    description: 'Secure your home and belongings with comprehensive property insurance coverage tailored to your needs.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Business Insurance',
    description: 'Comprehensive business insurance solutions to protect your company, employees, and assets from potential risks.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: '6',
    title: 'Travel Insurance',
    description: 'Travel with confidence knowing you\'re protected with comprehensive travel insurance for domestic and international trips.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Partner insurance companies
const insurancePartners: Partner[] = [
  {
    id: '1',
    name: 'MetLife',
    logo: '/partners/metlife.svg',
    website: 'https://metlife.com',
    description: 'Leading global provider of insurance and employee benefits'
  },
  {
    id: '2',
    name: 'Prudential',
    logo: '/partners/prudential.svg',
    website: 'https://prudential.com',
    description: 'Financial wellness and insurance solutions'
  },
  {
    id: '3',
    name: 'Allstate',
    logo: '/partners/allstate.svg',
    website: 'https://allstate.com',
    description: 'Auto, home, and life insurance coverage'
  },
  {
    id: '4',
    name: 'State Farm',
    logo: '/partners/statefarm.svg',
    website: 'https://statefarm.com',
    description: 'Insurance and financial services provider'
  },
  {
    id: '5',
    name: 'Progressive',
    logo: '/partners/progressive.svg',
    website: 'https://progressive.com',
    description: 'Auto insurance and financial services'
  },
  {
    id: '6',
    name: 'Aetna',
    logo: '/partners/aetna.svg',
    website: 'https://aetna.com',
    description: 'Health insurance and healthcare benefits'
  },
];

// C-Level Executives
const executives: Person[] = [
  {
    id: '1',
    name: 'James Kim',
    position: 'Chief Executive Officer',
    quote: 'At AMC Insured, we believe insurance is more than just protection—it\'s about building trust and providing peace of mind. Every policy we write, every client we serve, reflects our commitment to excellence and our vision of a secure future for all.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80',
    experience: '15+ years in Insurance Leadership',
    education: 'MBA, Seoul National University',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/james-kim-ceo',
      email: 'james.kim@amcrs.co.kr',
    },
  },
  {
    id: '2',
    name: 'Sarah Lee',
    position: 'Chief Operating Officer',
    quote: 'Excellence in operations means creating seamless experiences for our clients. We leverage technology and human expertise to deliver insurance solutions that truly matter, ensuring every interaction adds value to our clients\' lives.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80',
    experience: '12+ years in Operations Management',
    education: 'Master in Business Administration',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-lee-coo',
      email: 'sarah.lee@amcrs.co.kr',
    },
  },
  {
    id: '3',
    name: 'Michael Park',
    position: 'Chief Financial Officer',
    quote: 'Financial strength and stability are the foundations of trust in insurance. Through prudent risk management and strategic planning, we ensure our clients can always count on us when they need us most.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80',
    experience: '10+ years in Financial Management',
    education: 'CPA, Master in Finance',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-park-cfo',
      email: 'michael.park@amcrs.co.kr',
    },
  },
];

// Contact information
const contactInfo: ContactMethod[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'info@amcrs.co.kr',
    href: 'mailto:info@amcrs.co.kr',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Home() {
  const handleQuoteRequest = () => {
    alert('Get Free Quote clicked! Redirecting to quote form...');
  };

  const handleLearnMore = () => {
    alert('Learn More clicked! Scrolling to services section...');
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = async (data: Record<string, string>) => {
    console.log('Contact form submitted:', data);
    alert(`Thank you ${data.name}! We'll contact you within 24 hours to discuss your insurance needs.`);
  };

  return (
    <div className="min-h-screen">
      {/* Global Navigation */}
      <Gnb
        brandProps={{
          brandName: 'AMC Insured Co., Ltd.',
          tagline: 'Your Insurance Partner',
          size: 'md',
          href: '/',
          logoSrc: '/brand/logo.png',
          logoSrcDark: '/brand/logo_invert.png',
          logoAlt: 'AMC Insured Co., Ltd. Logo',
          theme: 'auto',
        }}
        navLinks={[
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Partners', href: '#partners' },
          { label: 'Contact', href: '#contact' },
        ]}
        ctaText="Get Free Quote"
        onCTAClick={handleQuoteRequest}
      />

      {/* Hero Section */}
      <Hero
        // badge="Trusted Since 2010"
        subtitle="Professional Insurance Brokerage"
        title="Smart Insurance Solutions"
        description="Compare rates, save money, get protected. Expert guidance for your peace of mind."
        backgroundImage="https://images.unsplash.com/photo-1710418512781-7899f2362f8a?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayOpacity={0.1}
        primaryCTA={{
          text: 'Get Free Quote',
          onClick: handleQuoteRequest,
        }}
        secondaryCTA={{
          text: 'Learn More',
          onClick: handleLearnMore,
        }}
        features={[
          // 'Compare 50+ Providers',
          // 'Save Up to 40%',
          // 'Expert Advisory',
        ]}
        size="lg"
      />

      {/* About Section */}
      <Description
        id="about"
        subtitle="About AMC Insured Co., Ltd."
        title="Your Trusted Insurance Partner"
        description="With over a decade of experience in the insurance industry, we've helped thousands of individuals and businesses find the right insurance coverage at competitive rates. Our team of licensed professionals works tirelessly to understand your unique needs and match you with the perfect policy from our network of trusted insurance providers."
        layout="image-left"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Insurance consultation meeting"
        backgroundColor="dark"
        features={[
          {
            title: 'Licensed Experts',
            description: 'Our team consists of licensed insurance professionals with years of industry experience.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            ),
          },
          {
            title: 'Personalized Service',
            description: 'We take time to understand your specific needs and provide tailored insurance solutions.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ),
          },
          {
            title: 'Best Rates Guaranteed',
            description: 'We compare rates from multiple providers to ensure you get the best deal available.',
            icon: (
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            ),
          },
        ]}
      />

      {/* Services Section */}
      <Grid
        id="services"
        subtitle="Our Services"
        title="Comprehensive Insurance Coverage"
        description="We offer a complete range of insurance products to protect you, your family, and your business. Compare quotes from multiple providers and find the perfect coverage for your needs."
        items={insuranceServices}
        columns={3}
        itemStyle="card"
        backgroundColor="dark"
      />

      {/* Partners Section */}
      <Partners
        id="partners"
        subtitle="Our Insurance Partners"
        title="Working with Leading Insurance Providers"
        description="We've partnered with top-rated insurance companies to offer you the best coverage options and competitive rates. Our extensive network ensures you have access to quality insurance products."
        partners={insurancePartners}
        columns={3}
        logoStyle="grayscale"
        backgroundColor="white"
      />

      {/* Leadership Team Section */}
      <People
        id="leadership"
        subtitle="Our Leadership Team"
        title="Visionary Leaders Shaping the Future of Insurance"
        description="Meet the distinguished executives who drive our mission of delivering exceptional insurance solutions and building lasting client relationships."
        people={executives}
        columns={3}
        backgroundColor="dark"
        showSocials={true}
        layout="hero"
      />

      {/* Contact Section */}
      <Contact
        id="contact"
        subtitle="Get In Touch"
        mapEmbedUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.427057929161!2d126.92806657568043!3d37.52142917205035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3f088a1817%3A0x961b6248095e9a51!2z7ISc7Jq47Yq567OE7IucIOyYgeuTse2PrOq1rCDqta3soJzquIjsnLXroZwgNzA!5e0!3m2!1sko!2skr!4v1753161064706!5m2!1sko!2skr'
        title="Ready to Find Your Perfect Insurance?"
        description="Contact us today for a free consultation and personalized quote. Our experts are here to help you find the right insurance coverage at the best rates."
        contactMethods={contactInfo}
        layout="side-by-side"
        backgroundColor="dark"
        showForm={true}
        formFields={[
          { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
          { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your@email.com' },
          { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: 'Your phone number' },
          { name: 'insurance_type', label: 'Insurance Type', type: 'select', required: true, options: ['Life Insurance', 'Health Insurance', 'Auto Insurance', 'Home Insurance', 'Business Insurance', 'Travel Insurance'] },
          { name: 'message', label: 'Additional Information', type: 'textarea', required: false, placeholder: 'Tell us about your insurance needs...' },
        ]}
        formTitle="Get Your Free Quote"
        submitButtonText="Request Free Quote"
        onFormSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <Footer
        companyName="AMC Insured Co., Ltd."
        navSections={[
          {
            title: 'Services',
            links: [
              { label: 'Life Insurance', href: '/life-insurance' },
              { label: 'Health Insurance', href: '/health-insurance' },
              { label: 'Auto Insurance', href: '/auto-insurance' },
              { label: 'Home Insurance', href: '/home-insurance' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '/about' },
              { label: 'Our Team', href: '/team' },
              { label: 'Careers', href: '/careers' },
              { label: 'Blog', href: '/blog' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Help Center', href: '/help' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Claims', href: '/claims' },
              { label: 'FAQ', href: '/faq' },
            ],
          },
        ]}
        socialLinks={[
          {
            platform: 'Facebook',
            href: 'https://facebook.com/insurebrokerage',
            icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            ),
          },
          {
            platform: 'LinkedIn',
            href: 'https://linkedin.com/company/insurebrokerage',
            icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            ),
          },
        ]}
        showNewsletter={false}
        onNewsletterSubmit={async (email) => {
          console.log('Newsletter subscription:', email);
          alert(`Thank you for subscribing with ${email}! You'll receive insurance tips and updates.`);
        }}
      />
    </div>
  );
}

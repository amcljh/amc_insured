'use client'

import React from 'react'
import {
  Hero,
  Description,
  Grid,
  FeatureCards,
  ProcessFlow,
  Accordion,
  Partners,
  People,
  Contact,
  GridItem,
  Partner,
  Person,
  PersonGroup,
  ContactMethod,
} from '../sections'
import { Gnb, Footer } from '../components'

// Insurance services data
const insuranceServices: GridItem[] = [
  {
    id: '1',
    title:
      'Industry-Specific Risk Solutions for Korea’s Reputable Corporations',
    description:
      'We deliver specialized insurance solutions for key industries - including logistics, marine, and construction.Our tailored programs serve Korea’s leading companies with precision and impact.By aligning deep risk analysis with optimized coverage structures, we help major enterprises manage complex exposures with confidence.',
    // image:
    //   'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image:
      'https://plus.unsplash.com/premium_photo-1661926318373-c497f78d21df?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Driving Profitable Reinsurance through Global Strength',
    description:
      'We deliver reinsurance solutions that leverage a strong global network - covering diverse and complex risks.Our programs help diversify portfolios, strengthen stability, and secure long-term resilience.By keeping loss ratios low and control high, we help partners maximize profitability with confidence.',
    // image:
    //   'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Empowering Korea’s SMEs with Tailored Risk Solutions',
    description:
      'We provide tailored risk solutions for small and medium-sized enterprises (SMEs) - a vital force in Korea’s economy. By analyzing each company’s unique exposures, we design strategic programs to reduce risk and strengthen resilience. Our solutions empower SMEs to grow with confidence and stability.',
    image:
      'https://images.unsplash.com/photo-1710418512781-7899f2362f8a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'Preventing Risk. Protecting Performance',
    description:
      'We provide structured training programs and safety systems to prevent accidents and minimize risk. By identifying and addressing potential exposures in advance, we help clients lower incident rates and boost operational stability. Our proactive approach strengthens long-term resilience - before risks become losses.',
    image:
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

// Our Partners — 재보험사 10곳 (5열 x 2줄로 노출)
// 로고 원본은 400x140 투명 PNG 로 정규화되어 있다는 전제.
const insurancePartners: Partner[] = [
  {
    id: '1',
    name: 'AXA XL',
    logo: '/partners/re/axa-xl.png',
    website: 'https://axaxl.com/',
    description: '',
  },
  {
    id: '2',
    name: 'Beazley',
    logo: '/partners/re/beazley.png',
    website: 'https://www.beazley.com/',
    description: '',
  },
  {
    id: '3',
    name: 'Berkshire Hathaway',
    logo: '/partners/re/berkshire-hathaway.png',
    website: 'https://www.berkshirehathaway.com/',
    description: '',
  },
  {
    id: '4',
    name: 'China Re',
    logo: '/partners/re/china-re.png',
    website: 'https://www.chinare.com.cn/',
    description: '',
  },
  {
    id: '5',
    name: 'Great American Insurance Group',
    logo: '/partners/re/great-american.png',
    website: 'https://www.greatamericaninsurancegroup.com/',
    description: '',
  },
  {
    id: '6',
    name: "Lloyd's",
    logo: '/partners/re/lloyds.png',
    website: 'https://www.lloyds.com/',
    description: '',
  },
  {
    id: '7',
    name: 'Markel',
    logo: '/partners/re/markel.png',
    website: 'https://www.markel.com/',
    description: '',
  },
  {
    id: '8',
    name: 'Munich Re',
    logo: '/partners/re/munich-re.png',
    website: 'https://www.munichre.com/',
    description: '',
  },
  {
    id: '9',
    name: 'PartnerRe',
    logo: '/partners/re/partner-re.png',
    website: 'https://www.partnerre.com/',
    description: '',
  },
  {
    id: '10',
    name: 'Swiss Re',
    logo: '/partners/re/swiss-re.png',
    website: 'https://www.swissre.com/',
    description: '',
  },
]

/* 기존 Our Partners 목록 (고객 요청으로 재보험사 10곳으로 교체 — 되돌릴 수 있게 보관)
const insurancePartnersPrev: Partner[] = [
  {
    id: '1',
    name: 'E-Mart',
    logo: '/partners/emart.png',
    website: 'https://www.emart.com/',
    description: '',
  },
  {
    id: '2',
    name: 'Starbucks',
    logo: '/partners/starbucks.png',
    website: 'https://www.starbucks.com/',
    description: '',
  },
  {
    id: '3',
    name: 'Shinsegae',
    logo: '/partners/shinsegae.png',
    website: 'https://www.shinsegae.com/',
    description: '',
  },
  {
    id: '4',
    name: 'SK Discovery',
    logo: '/partners/sk-discovery.png',
    website: 'https://www.skdiscovery.com/',
    description: '',
  },
  {
    id: '5',
    name: 'Daol',
    logo: '/partners/daol.png',
    website: 'https://www.daolsecurities.com/top.jsp',
    description: '',
  },
  {
    id: '6',
    name: 'Lotte',
    logo: '/partners/lotte.png',
    website: 'https://www.lotte.co.kr/',
    description: '',
  },
  {
    id: '7',
    name: 'Samsung Fire & Marine Insurance',
    logo: '/partners/samsung fire and marine insurance.png',
    website: 'https://www.samsungfire.com/',
    description: '',
  },
  {
    id: '8',
    name: 'Hyundai',
    logo: '/partners/Hyundai.png',
    website: 'https://www.hi.co.kr/',
    description: '',
  },
  {
    id: '9',
    name: 'DB',
    logo: '/partners/DB.png',
    website: 'https://www.idbins.com/',
    description: '',
  },
  {
    id: '10',
    name: 'KB',
    logo: '/partners/KB ins.png',
    website: 'https://www.kbinsure.co.kr/',
    description: '',
  },
  {
    id: '11',
    name: 'AIG',
    logo: '/partners/aig.svg',
    website: 'https://www.aig.com/',
    description: '',
  },
  {
    id: '12',
    name: 'KOREAN RE',
    logo: '/partners/KoreanRe.png',
    website: 'https://www.koreanre.co.kr/',
    description: '',
  },

  // {
  //   id: '13',
  //   name: 'Howden',
  //   logo: '/partners/howden.png',
  //   website: 'https://www.howdengroup.com/',
  //   description: '',
  // },
  // {
  //   id: '14',
  //   name: 'Great American Insurance Company',
  //   logo: '/partners/great-american.png',
  //   website: 'https://www.gaic.com/',
  //   description: '',
  // },
  // {
  //   id: '15',
  //   name: 'MSIG',
  //   logo: '/partners/MSIG.jpg',
  //   website: 'https://www.msig.com.sg/',
  //   description: '',
  // },
  // {
  //   id: '16',
  //   name: 'DB Middle East DMCC',
  //   logo: '/partners/dbme.jpeg',
  //   website: 'https://www.db-group.co.kr/',
  //   description: '',
  // },
  // {
  //   id: '17',
  //   name: 'Munich RE',
  //   logo: '/partners/Munich.png',
  //   website: 'https://www.munichre.com/',
  //   description: '',
  // },
  // {
  //   id: '18',
  //   name: 'Korea Post',
  //   logo: '/partners/koreapost.png',
  //   website: 'https://www.koreapost.go.kr/kpic/index.do',
  //   description: '',
  // },
  // {
  //   id: '19',
  //   name: 'Shinan',
  //   logo: '/partners/shinan.jpeg',
  //   website: 'https://www.shinan.go.kr/',
  //   description: '',
  // },
  // {
  //   id: '20',
  //   name: 'KCG',
  //   logo: '/partners/kcg.png',
  //   website: 'https://www.kcg.go.kr/kcg/main.do',
  //   description: '',
  // },
]
*/

// AMC Leadership — 3명 (HW Kim / JH Choi / CH Jang 은 AMC Team 으로 이동)
const executives: Person[] = [
  {
    id: '1',
    name: 'Jang Han Lee',
    position: 'CEO',
    quote: '',
    image: '/people/Jang Han Lee_2.jpg',
    experience: '',
    education: '',
    socialLinks: {
      linkedin: '',
      email: '',
    },
  },
  {
    id: '2',
    name: 'H. Michael Chung',
    position: 'EVP',
    quote: '',
    image: '/people/H.Michael.jpg',
    experience: '',
    education: '',
    socialLinks: {
      linkedin: '',
      email: '',
    },
  },
  {
    id: '3',
    name: 'Jeong Hee Yoon',
    position: 'Sales Director',
    quote: '',
    image: '/people/Jeong Hee Yoon.jpg',
    experience: '',
    education: '',
    socialLinks: {
      linkedin: '',
      email: '',
    },
  },
]

// AMC Team — 팀별 인원 (영문 이니셜 / 전문분야 영문)
const teamGroups: PersonGroup[] = [
  {
    id: 'client-management',
    title: 'Client Management Team',
    people: [
      {
        id: 'cm-1',
        name: 'HW Kim',
        position: 'Team Leader',
        image: '/people/team/HW Kim.jpg',
      },
      {
        id: 'cm-2',
        name: 'EH Hwang',
        position:
          'Corporate Liability / Multi-Facility / Directors & Officers (D&O)',
        image: '/people/team/EH Hwang.jpg',
      },
      {
        id: 'cm-3',
        name: 'JH Lee',
        position: 'Corporate Property / Fire / Business Interruption Risk',
        image: '/people/team/JH Lee.jpg',
      },
      {
        id: 'cm-4',
        name: 'WC Kim',
        position: 'Construction / Engineering / Energy / Infrastructure',
        image: '/people/team/WC Kim.jpg',
      },
      {
        id: 'cm-5',
        name: 'BC Kim',
        position:
          'Corporate Liability / Multi-Facility / Directors & Officers (D&O)',
        image: '/people/team/BC Kim.jpg',
      },
      {
        id: 'cm-6',
        name: 'JS Kim',
        position:
          'Corporate Liability / Multi-Facility / Directors & Officers (D&O)',
        image: '/people/team/JS Kim.jpg',
      },
    ],
  },
  {
    id: 'claim-control',
    title: 'Claim Control Team',
    people: [
      {
        id: 'cc-1',
        name: 'JH Choi',
        position: 'Team Leader',
        image: '/people/team/JH Choi.jpg',
      },
      {
        id: 'cc-2',
        name: 'JS Kim',
        position:
          'Construction / Engineering / Energy / Infrastructure / Corporate Liability / Multi-Facility / Directors & Officers (D&O) / Cyber & Digital Risk',
        image: '/people/team/JS Kim_2.jpg',
      },
      {
        id: 'cc-3',
        name: 'J Park',
        position: 'Employee Group Accident / Surety / Affinity',
        image: '/people/team/J Park.jpg',
      },
      {
        id: 'cc-4',
        name: 'SJ Shin',
        position: 'Employee Group Accident',
        image: '/people/team/SJ Shin.jpg',
      },
    ],
  },
  {
    id: 'marine',
    title: 'Marine Team',
    people: [
      {
        id: 'mr-1',
        name: 'CH Jang',
        position: 'Team Leader',
        image: '/people/team/CH Jang.jpg',
      },
      {
        id: 'mr-2',
        name: 'YD Kim',
        position: 'Marine / Cargo / Logistics',
        image: '/people/team/YD Kim.jpg',
      },
      {
        id: 'mr-3',
        name: 'SY Yoon',
        position:
          'Marine / Cargo / Logistics / Corporate Liability / Multi-Facility / Directors & Officers (D&O)',
        image: '/people/team/SY Yoon.jpg',
      },
      {
        id: 'mr-4',
        name: 'DE Kwak',
        position:
          'Marine / Cargo / Logistics / Construction / Engineering / Energy / Infrastructure',
        image: '/people/team/DE Kwak.jpg',
      },
      {
        // Client Management Team 에서 이동
        id: 'mr-5',
        name: 'HS Moon',
        position:
          'Corporate Liability / Multi-Facility / Directors & Officers (D&O)',
        image: '/people/team/HS Moon.jpg',
      },
    ],
  },
  {
    id: 'hr-gat',
    title: 'HR&GAT Team',
    people: [
      {
        id: 'hr-1',
        name: 'SE You',
        position: 'HR&GA',
        image: '/people/team/SE You.jpg',
      },
      {
        id: 'hr-2',
        name: 'SJ Choi',
        position: 'HR&GA',
        image: '/people/team/SJ Choi.jpg',
      },
      {
        // Finance 파트 — 앞의 HR&GA 인원과 파트가 다르므로 좌측으로 띄워 분리 표시
        id: 'hr-3',
        name: 'SS An',
        position: 'Finance',
        image: '/people/team/SS An.jpg',
        offset: true,
      },
    ],
  },
]

// Contact information
const contactInfo: ContactMethod[] = [
  {
    type: 'email',
    label: 'Send us an email',
    value: 'info@amcrs.co.kr',
    href: 'mailto:info@amcrs.co.kr',
    icon: (
      <svg
        className='w-full h-full'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
]

export default function Home() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLearnMore = () => {
    alert('Learn More clicked! Scrolling to services section...')
    const servicesSection = document.getElementById('services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = async (data: Record<string, string>) => {
    console.log('Contact form submitted:', data)
    alert(
      `Thank you ${data.name}! We\'ll contact you within 24 hours to discuss your insurance needs.`
    )
  }

  return (
    <div className='min-h-screen'>
      {/* Global Navigation */}
      <Gnb
        brandProps={{
          brandName: 'AMC',
          tagline: 'Risk Solutions',
          size: 'lg',
          href: '/',
          logoSrc: '/brand/logo_white.png',
          logoSrcDark: '/brand/logo_invert.png',
          logoAlt: 'AMC Logo',
          theme: 'light',
        }}
        navLinks={[
          { label: 'Home', href: '#', onClick: handleHomeClick },
          { label: 'About Us', href: '#about' },
          { label: 'Our Business', href: '#services' },
          { label: 'Our Partners', href: '#partners' },
          { label: 'AMC Leadership', href: '#leadership' },
          { label: 'AMC Team', href: '#team' },
          { label: 'Contact Us', href: '#contact' },
        ]}
      />

      {/* Hero Section */}
      <Hero
        // badge="Trusted Since 2010"
        subtitle='Rooted in expertise. Driven by action.'
        title={['Powering Risk Solutions', 'from Korea to the World.']}
        description=''
        backgroundImage='/hero/top-main.jpg'
        // backgroundImage='https://images.unsplash.com/photo-1448523183439-d2ac62aca997?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        overlayOpacity={0.1}
        size='lg'
      />

      {/* About Section */}
      <Description
        id='about'
        subtitle='About Us'
        title={`Korea-Born.
          Globally Focused.
          Relentlessly Driven.`}
        description='We connect risk with opportunity — and deliver results. AMC is a new-generation insurance brokerage firm based in Korea, rising fast through action, insight, and trust. We specialize in understanding the unique risk landscape of Korean companies — and turning that insight into winning solutions for both clients and the insurers or reinsurers who partner with us. Our business is built on speed, integrity, and deep local knowledge. That’s why more and more leading Korean companies are choosing AMC to protect what matters — and why global partners trust us to bridge risk with clarity.'
        layout='text-left'
        backgroundOverlayText='About AMC'
        mediaOverlayText='AMC'
      />

      {/* Services Section */}
      <Grid
        id='services'
        subtitle='Our Business'
        title='Integrated Risk Solutions, Designed to Fit.'
        description="We mix insight, products, and action to deliver what fits — not what’s standard. At AMC, we don't simply offer insurance. We build tailored risk solutions by combining diverse insurance products, reinsurance structures, and strategic advisory — always with our clients’ realities in mind. From logistics and marine risks to enterprise-level exposures, our services are built to protect, adapt, and empower. That’s why our partnerships aren’t just expanding — they’re deepening."
        items={insuranceServices}
        columns={2}
        itemStyle='card'
        backgroundColor='gray'
      />

      {/* Partners Section */}
      <Partners
        id='partners'
        subtitle='Our Partners'
        title='Trusted by Korea’s Leading Companies — and the World’s Top Risk Carriers.'
        description='Respected names. Real relationships. Results that speak. We proudly serve many of Korea’s reputable corporations and government institutions — and collaborate closely with top domestic insurers, global reinsurers, and international brokerage networks. Our growing list of trusted partners reflects our ability to connect complex risks with smart solutions, across borders and industries.'
        partners={insurancePartners}
        columns={5}
        logoStyle='grayscale'
        backgroundColor='white'
      />

      {/* Leadership Team Section */}
      <People
        id='leadership'
        subtitle='AMC Leadership'
        title='Leading Differently. Acting Decisively.'
        description='Smart, agile, and deeply attuned to client risk. AMC’s leadership team brings together a new generation of professionals who think fast, act faster, and never settle for one-size-fits-all solutions. We lead with insight, urgency, and a relentless focus on understanding each client’s unique risk — and responding with bold, customized strategies.'
        people={executives}
        columns={3}
        backgroundColor='white'
        showSocials={true}
        layout='hero'
      />

      {/* Team Section */}
      <People
        id='team'
        subtitle='AMC Team'
        title='The Experts Behind Every Solution.'
        description="Every client challenge is met by a team that knows the details — and owns them. AMC's members are seasoned specialists across corporate liability, marine, group benefits, and beyond. They dig into the complexity, coordinate across boundaries, and deliver with precision. No handoffs. No gaps. Just expertise, working directly for you."
        groups={teamGroups}
        columns={4}
        backgroundColor='gray'
        showSocials={false}
        layout='hero'
      />

      {/* Contact Section */}
      <Contact
        id='contact'
        subtitle='Contact Us'
        mapEmbedUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.427057929161!2d126.92806657568043!3d37.52142917205035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3f088a1817%3A0x961b6248095e9a51!2z7ISc7Jq47Yq567OE7IucIOyYgeuTse2PrOq1rCDqta3soJzquIjsnLXroZwgNzA!5e0!3m2!1sde!2skr!4v1753161064706!5m2!1sko!2skr'
        title='Let’s Connect.'
        description="Whether you're a client, partner, or curious about AMC — we're here. We welcome inquiries from across the world — whether you're exploring a partnership, seeking insurance solutions, or just want to learn more about who we are and what we do. Use the form below to reach us directly, or feel free to contact us via email. You'll hear back from someone who understands risk — and acts on it."
        contactMethods={contactInfo}
        layout='contact-only'
        backgroundColor='white'
        float='right'
        showForm={true}
        formFields={[
          {
            name: 'name',
            label: 'Full Name',
            type: 'text',
            required: true,
            placeholder: 'Your full name',
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            required: true,
            placeholder: 'your@email.com',
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'tel',
            required: false,
            placeholder: 'Your phone number',
          },
          {
            name: 'insurance_type',
            label: 'Insurance Type',
            type: 'select',
            required: true,
            options: [
              'Life Insurance',
              'Health Insurance',
              'Auto Insurance',
              'Home Insurance',
              'Business Insurance',
              'Travel Insurance',
            ],
          },
          {
            name: 'message',
            label: 'Additional Information',
            type: 'textarea',
            required: false,
            placeholder: 'Tell us about your insurance needs...',
          },
        ]}
        formTitle='Get Your Free Quote'
        submitButtonText='Request Free Quote'
        onFormSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <Footer
        companyName='AMC Insured Co., Ltd'
        navSections={[
          {
            title: 'Links',
            links: [
              { label: 'Home', href: '#', onClick: handleHomeClick },
              { label: 'About Us', href: '#about' },
              { label: 'Our Business', href: '#services' },
              { label: 'Our Partners', href: '#partners' },
              { label: 'AMC Leadership', href: '#leadership' },
              { label: 'AMC Team', href: '#team' },
              { label: 'Contact Us', href: '#contact' },
            ],
          },
        ]}
        socialLinks={
          [
            // {
            //   platform: 'Facebook',
            //   href: 'https://facebook.com/insurebrokerage',
            //   icon: (
            //     <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            //       <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
            //     </svg>
            //   ),
            // },
            // {
            //   platform: 'LinkedIn',
            //   href: 'https://linkedin.com/company/insurebrokerage',
            //   icon: (
            //     <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            //       <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            //     </svg>
            //   ),
            // },
          ]
        }
        showNewsletter={false}
        onNewsletterSubmit={async (email) => {
          console.log('Newsletter subscription:', email)
          alert(
            `Thank you for subscribing with ${email}! You\'ll receive insurance tips and updates.`
          )
        }}
      />
    </div>
  )
}

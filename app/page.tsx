import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { SiteHeader, type SiteNavItem } from '../components/SiteHeader/SiteHeader'
import { CopyEmail } from '../components/CopyEmail/CopyEmail'
import { ScrollEffects } from '../components/ScrollEffects/ScrollEffects'
import { NoticeBar } from '../components/NoticeBar/NoticeBar'
import { AMC_AIR_NOTICE, isBannerActive } from './notice/notices'
import { ADJUSTERS, INSURERS, LEADERSHIP, REINSURERS, TEAMS, teamId, type Company, type Member } from './site-data'
import './home.css'

const serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

/** 공지 띠 표시 기간 판단이 날짜에 따라 바뀌므로 하루 한 번 페이지를 다시 생성 */
export const revalidate = 86400

const SITE_URL = 'https://www.amcgeneral.co.kr/'
const EMAIL = 'info@amcrs.co.kr'

export const metadata: Metadata = {
  title: 'AMC Insured | ㈜에이엠씨손해보험중개',
  description:
    'AMC Insured (㈜에이엠씨손해보험중개, 에이엠씨손해보험중개) — 기업 고객의 원보험·재보험을 중개하는 손해보험중개회사. A Korea-based corporate insurance and reinsurance broker.',
  keywords: [
    '에이엠씨손해보험중개',
    '㈜에이엠씨손해보험중개',
    'AMC Insured',
    'AMC',
    '보험중개',
    '손해보험중개',
    '기업보험',
    '재보험',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: 'AMC Insured · ㈜에이엠씨손해보험중개',
    title: 'AMC Insured | ㈜에이엠씨손해보험중개',
    description:
      '기업 고객의 원보험·재보험을 중개하는 손해보험중개회사. Corporate insurance and reinsurance broker based in Korea.',
    url: SITE_URL,
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'AMC Insured',
  legalName: '㈜에이엠씨손해보험중개',
  alternateName: [
    '㈜에이엠씨손해보험중개',
    '에이엠씨손해보험중개',
    '주식회사 에이엠씨손해보험중개',
    'AMC Insured Co., Ltd.',
    'AMC',
  ],
  url: SITE_URL,
  email: EMAIL,
  telephone: '+82-2-2088-1725',
  description: '㈜에이엠씨손해보험중개(AMC Insured)는 기업 고객의 원보험과 재보험을 중개하는 손해보험중개회사입니다.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14F, Miwon Building, 70 Gukjegeumyung-ro',
    addressLocality: 'Yeongdeungpo-gu',
    addressRegion: 'Seoul',
    addressCountry: 'KR',
  },
}

const NAV: SiteNavItem[] = [
  {
    label: 'About Us',
    href: '#about',
    sub: [
      { label: 'Who We Are', href: '#about' },
      { label: 'Our Vision', href: '#vision' },
      { label: 'How We Work', href: '#approach' },
    ],
  },
  { label: 'Our Business', href: '#business' },
  {
    label: 'Our Expertise',
    href: '#expertise',
    sub: [
      { label: 'AMC Claims Service', href: '#claim-service' },
      { label: 'Specialty Lines', href: '#specialty-lines' },
      { label: 'Client Results', href: '#results' },
    ],
  },
  { label: 'Our Partners', href: '#partners' },
  { label: 'AMC Leadership', href: '#leadership' },
  {
    label: 'AMC Team',
    href: '#team',
    sub: TEAMS.map((t) => ({ label: t.team, labelKo: t.teamKo, href: '#' + teamId(t.team) })),
  },
  { label: 'Contact Us', href: '#contact' },
]

function PersonCard({ person }: { person: Member }) {
  return (
    <li className='person'>
      {person.photo ? (
        <Image
          src={`/people/${person.photo}`}
          alt={person.name}
          width={600}
          height={750}
          sizes='(max-width: 620px) 50vw, (max-width: 900px) 33vw, 270px'
        />
      ) : (
        <div className='ph'>Photo to follow</div>
      )}
      <h4>{person.name}</h4>
      <p className={person.leader ? 'role leader' : 'role'}>{person.leader ? 'Team Leader' : person.role || ''}</p>
    </li>
  )
}

function CompanyItem({ company }: { company: Company }) {
  return (
    <li className='bi'>
      <span className='p-en'>{company.en.replace('Co., Ltd.', 'Co., Ltd.')}</span>
      <span className='p-ko' lang='ko'>
        {company.ko}
      </span>
    </li>
  )
}

export default function Home() {
  return (
    <div className={`amc ${serif.variable} ${inter.variable}`}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      {isBannerActive(AMC_AIR_NOTICE) && <NoticeBar notice={AMC_AIR_NOTICE} />}
      <SiteHeader items={NAV} />
      <ScrollEffects />

      <main id='top'>
        <section className='hero'>
          <Image
            src='/hero/hero.jpg'
            alt='Yeouido financial district skyline across the Han River, Seoul'
            width={1920}
            height={914}
            sizes='100vw'
            priority
          />
          <div className='wrap'>
            <h1>Powering Risk Solutions from Korea to the World.</h1>
            <p>Rooted in expertise. Driven by action.</p>
            <p className='hero-sub'>
              A strong network across Korea’s insurance market and the trust of the clients we serve, with consistent,
              high-quality service delivered by a system.
            </p>
            <ul className='facts'>
              <li>Insurance &amp; Reinsurance Broking</li>
              <li>Established 2022</li>
              <li>Yeouido, Seoul</li>
            </ul>
            <p className='hero-reg'>
              Registered in the Republic of Korea. AMC Insured is registered with and supervised by the Financial
              Supervisory Service (Registration No. 2022041401).
            </p>
          </div>
        </section>

        <section className='band' id='about'>
          <div className='wrap split'>
            <div>
              <p className='eyebrow'>About Us</p>
              <h2>Korea-Born. Globally Focused. Relentlessly Driven.</h2>
            </div>
            <p className='lede'>
              <strong>AMC Insured is a corporate insurance broker based in Seoul.</strong> We act for the policyholder,
              not the insurer. We review how a company’s risks are insured, design the program, obtain competing terms
              from insurers, and stay with the client through every claim. Where a program needs more capacity than the
              Korean market offers, we arrange reinsurance through our global network. Since 2022 we have served leading
              Korean groups in retail, construction, manufacturing, hospitality, and logistics. Two things underpin that
              work: a strong network across Korea’s insurers, loss adjusters, and reinsurance markets, and the trust our
              clients place in us.
            </p>
          </div>
        </section>

        <section className='band vision' id='vision'>
          <div className='wrap'>
            <p className='eyebrow'>Our Vision</p>
            <blockquote>
              AMC is more than an insurance broker. We are building an insurance platform that manages corporate risk
              and connects Korea with the world — and everyone at AMC grows together along the way.
            </blockquote>
            <dl className='goal'>
              <dt>Our Goal</dt>
              <dd>Creating clients through client satisfaction.</dd>
            </dl>
            <p className='pillars-lead'>
              Our core business is direct insurance broking for corporate clients. Three strategic priorities, in this
              order, exist to make us better at it.
            </p>
            <div className='pillars'>
              <div>
                <p className='num'>Priority 1</p>
                <h3>Professional Brokerage Standards</h3>
                <p>
                  Role-based expertise, written operating manuals, and a structured training and advancement program for
                  every broker.
                </p>
              </div>
              <div>
                <p className='num'>Priority 2</p>
                <h3>Claims Advisory Service</h3>
                <p>
                  Hands-on advice from first notice to settlement, working with independent loss adjusters on the
                  client’s behalf.
                </p>
              </div>
              <div>
                <p className='num'>Priority 3</p>
                <h3>Reinsurance Capability</h3>
                <p>
                  Access to global reinsurance markets that secures the capacity and terms our clients’ direct insurance
                  programs need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='band' id='approach'>
          <div className='wrap'>
            <p className='eyebrow'>How We Work</p>
            <h2>Service That Runs on a System, Not on One Person.</h2>
            <p className='lede'>
              <strong>AMC does not depend on the ability of any single individual.</strong> Defined roles, written
              manuals, and shared records carry the work, so every client receives the same high standard of service.
            </p>
            <ul className='qualities'>
              <li>
                <h3>Consistency</h3>
                <p>Same process, same standard, every account.</p>
              </li>
              <li>
                <h3>Quality</h3>
                <p>Documented standards, not individual habit.</p>
              </li>
              <li>
                <h3>Stability</h3>
                <p>No gap in service when people change.</p>
              </li>
              <li>
                <h3>Satisfaction</h3>
                <p>Measured by what clients tell us.</p>
              </li>
            </ul>
            <div className='exp-block' id='client-deliverables'>
              <h3>What Every Client Receives</h3>
              <p>The same documents and point of contact on every account.</p>
              <ul className='deliver'>
                <li>
                  <h4>Client Expectation Sheet</h4>
                  <p>The client’s expectations, agreed in writing and tracked through the year.</p>
                </li>
                <li>
                  <h4>Renewal Plan</h4>
                  <p>Program review, proposed improvements, and schedule before renewal.</p>
                </li>
                <li>
                  <h4>Results Report</h4>
                  <p>Insurers’ quotations compared, with results against expectations.</p>
                </li>
                <li>
                  <h4>Welcome Pack</h4>
                  <p>Policy summary, loss procedure, contacts, and service calendar.</p>
                </li>
                <li>
                  <h4>Regular Reports &amp; Mid-Term Review</h4>
                  <p>Claims, requests, and progress reported on schedule and reviewed in person.</p>
                </li>
                <li>
                  <h4>Single Point of Contact</h4>
                  <p>Claim notices, endorsements, and certificates handled through AMC.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='band tint' id='business'>
          <div className='wrap'>
            <p className='eyebrow'>Our Business</p>
            <h2>Integrated Risk Solutions, Designed to Fit.</h2>
            <p className='lede'>
              <strong>Insurance programs built around how each client actually operates.</strong> We start with the
              client’s assets, contracts, and loss history, then structure cover and negotiate with insurers on that
              basis. The work continues after placement, with policy administration, regular reporting, claims support,
              and preparation for the next renewal.
            </p>
            <div className='services'>
              <article className='service' id='corporate-insurance'>
                <p className='tag'>Corporate Insurance</p>
                <h3>Insurance Programs for Large Corporations and Groups</h3>
                <p>
                  We design and place property, liability, construction, and marine programs for large companies and
                  multi-affiliate groups. Each program is compared against similar risks and put to competing insurers,
                  so the client can see why the terms are right.
                </p>
              </article>
              <article className='service' id='capital-markets'>
                <p className='tag'>Capital Markets</p>
                <h3>Insurance for Asset Managers, Funds, and Their Investments</h3>
                <p>
                  We arrange property and liability programs for the real estate and infrastructure assets held by asset
                  management companies and private equity funds. For portfolio companies, we review existing cover and
                  bring each program up to the standard investors and lenders expect.
                </p>
              </article>
              <article className='service' id='loss-prevention'>
                <p className='tag'>Loss Prevention</p>
                <h3>Preventing Losses Before They Happen</h3>
                <p>
                  We analyze past losses to find where accidents recur, and support clients with staff training and site
                  surveys. Fewer losses mean safer operations and better renewal terms.
                </p>
              </article>
              <article className='service support' id='reinsurance-support'>
                <p className='tag'>Reinsurance Support</p>
                <h3>Reinsurance That Backs Our Clients’ Programs</h3>
                <p>
                  When a client’s insurance program needs more capacity or better terms than the local market offers, we
                  arrange the reinsurance behind it through our global network. It keeps coverage stable for the client
                  and the portfolio sound for the insurer.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='band' id='expertise'>
          <div className='wrap'>
            <p className='eyebrow'>Our Expertise</p>
            <h2>Claims Advocacy and Specialty Lines.</h2>
            <p className='lede'>
              <strong>A policy is tested at the moment of loss.</strong> AMC stays with the client from first notice to
              final settlement — and speaks for the policyholder, not the insurer. The same depth carries into the
              specialty lines where standard wordings rarely fit.
            </p>

            <div className='exp-block' id='claim-service'>
              <h3>AMC Claims Service</h3>
              <p>Each area of a claim follows a defined process and is advised by specialists in it.</p>
              <div className='hub'>
                <h4>One claims team, five areas of specialist advice</h4>
                <p>Clients draw on whichever area the situation calls for.</p>
              </div>
              <ul className='areas'>
                <li>
                  <h4>First Notice &amp; Documentation</h4>
                  <p>
                    We check what the loss adjuster will need, guide the documents, and file the claim on the client’s
                    behalf. Losses under an exclusion or below the deductible are identified early.
                  </p>
                </li>
                <li>
                  <h4>Claims Advocacy</h4>
                  <p>
                    We represent the policyholder with the insurer and resolve differences over cause, coverage, and
                    amount. After a major loss we attend the site and help assemble the documents.
                  </p>
                </li>
                <li>
                  <h4>Coverage Denial Review</h4>
                  <p>
                    When an insurer declines or reduces a claim, we re-examine the grounds against the policy wording
                    and advise on the response. Gaps in cover are noted for the next renewal.
                  </p>
                </li>
                <li>
                  <h4>Loss Analysis &amp; Prevention</h4>
                  <p>
                    We analyze frequent and severe losses and report claims status regularly. For recurring, high-value,
                    or unusual losses we survey the site and support staff training.
                  </p>
                </li>
                <li>
                  <h4>Client-Appointed Loss Adjuster</h4>
                  <p>
                    We help clients use their legal right to take part in appointing an independent loss adjuster, for
                    faster, consistent handling. AMC advises; licensed firms do the adjusting.
                  </p>
                </li>
              </ul>
            </div>

            <div className='exp-block' id='specialty-lines'>
              <h3>Specialty Lines</h3>
              <p>Risks that call for market knowledge, tailored wordings, and reinsurance support.</p>
              <ul className='tiles'>
                <li className='tile t3'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M4 40h40' />
                    <path d='M8 40V19l16-10 16 10v21' />
                    <path d='M20 40V29h8v11' />
                    <path d='M14 23h4M30 23h4M14 31h2M32 31h2' />
                  </svg>
                  <h4>Public Venues, Retail &amp; Hospitality</h4>
                  <p>
                    Property and liability programs for multi-use facilities, cinemas, large retail complexes, hotels,
                    and resorts.
                  </p>
                </li>
                <li className='tile t2'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M12 40V8h5v32' />
                    <path d='M6 40h18' />
                    <path d='M12 13h30' />
                    <path d='M17 8l8 5' />
                    <path d='M36 13v10' />
                    <path d='M32 23h8v6h-8z' />
                  </svg>
                  <h4>Construction, Erection &amp; Infrastructure</h4>
                  <p>Contractors’ all risks and erection all risks for large projects, including LNG terminals.</p>
                </li>
                <li className='tile t1'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M6 30h36l-5 9H11z' />
                    <path d='M14 30V20h20v10' />
                    <path d='M24 20V8' />
                    <path d='M24 10l9 4-9 4' />
                  </svg>
                  <h4>Marine, Ports &amp; Energy</h4>
                  <p>
                    Hull and P&amp;I, cargo, port and terminal operators’ liability, marine construction, and overseas
                    energy packages.
                  </p>
                </li>
                <li className='tile t4'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M24 6l15 6v11c0 9-6.5 15.5-15 19-8.5-3.500-15-10-15-19V12z' />
                    <path d='M17 24l5 5 9-10' />
                  </svg>
                  <h4>Financial &amp; Professional Lines</h4>
                  <p>Directors &amp; officers, cyber, and professional liability.</p>
                </li>
                <li className='tile t5'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M7 9h34v30H7z' />
                    <path d='M12 14h24v20H12z' />
                    <path d='M12 30l7-7 5 5 4-3 8 7' />
                    <circle cx='29' cy='20' r='2' />
                  </svg>
                  <h4>Fine Arts</h4>
                  <p>
                    Fine arts insurance for museums, galleries, auction houses, and private collections — on display, in
                    storage, and in transit.
                  </p>
                </li>
                <li className='tile t6'>
                  <svg viewBox='0 0 48 48' aria-hidden='true'>
                    <path d='M16 8h16v10a8 8 0 0 1-16 0z' />
                    <path d='M16 11H9c0 6 3 9 7 9' />
                    <path d='M32 11h7c0 6-3 9-7 9' />
                    <path d='M24 26v8' />
                    <path d='M19 34h10v6H19z' />
                    <path d='M15 40h18' />
                  </svg>
                  <h4>Sports &amp; Special Risks</h4>
                  <p>Key person cover and sports facility liability.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='band tint' id='results'>
          <div className='wrap'>
            <p className='eyebrow'>Client Results</p>
            <h2>What the System Delivers.</h2>
            <p className='lede'>
              <strong>Lower cost, better terms, and smoother claims.</strong> Client trust is earned through results
              like these. Recent programs, with client names withheld.
            </p>
            <div className='duo'>
              <section className='duo-card premium'>
                <header>
                  <h3>Premium and Terms</h3>
                  <p>Premium saved after AMC’s involvement, 2023–2025</p>
                </header>
                <dl>
                  <div>
                    <dt>
                      25.6%<small>saved</small>
                    </dt>
                    <dd>
                      <strong>Large retail group, 10+ affiliates</strong>Lower annual property premium.
                    </dd>
                  </div>
                  <div>
                    <dt>
                      20%<small>saved</small>
                    </dt>
                    <dd>
                      <strong>Chemical and energy group, 5+ affiliates</strong>Lower annual property premium, with
                      broader coverage.
                    </dd>
                  </div>
                  <div>
                    <dt>
                      60%+<small>saved</small>
                    </dt>
                    <dd>
                      <strong>Large-scale logistics center</strong>Lower property premium at renewal.
                    </dd>
                  </div>
                  <div>
                    <dt>
                      60%+<small>saved</small>
                    </dt>
                    <dd>
                      <strong>LNG terminal construction</strong>Placed below the initial premium estimate.
                    </dd>
                  </div>
                </dl>
              </section>
              <section className='duo-card claims'>
                <header>
                  <h3>Claims</h3>
                  <p>How claims handling changed for clients</p>
                </header>
                <dl>
                  <div>
                    <dt>Faster settlement</dt>
                    <dd>
                      <strong>Large retail group, 10+ affiliates</strong>Shorter handling time at stores, cafés, and
                      other public-facing sites.
                    </dd>
                  </div>
                  <div>
                    <dt>One claims system</dt>
                    <dd>
                      <strong>Group-wide program</strong>A single claims process across affiliates, replacing separate
                      handling.
                    </dd>
                  </div>
                  <div>
                    <dt>Regular reporting</dt>
                    <dd>
                      <strong>Ongoing accounts</strong>Loss ratio and claims status reported at set intervals.
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </section>

        <section className='band' id='partners'>
          <div className='wrap'>
            <p className='eyebrow'>Our Partners</p>
            <h2>Trusted by Korea’s Leading Companies — and the World’s Top Risk Carriers.</h2>
            <p className='lede'>
              <strong>The insurers, adjusters, and reinsurers behind our clients’ programs.</strong> Our network in
              Korea is our foundation: close working relationships with the country’s major non-life insurers and
              independent loss adjusting firms, extended abroad through leading global reinsurers. Knowing each market’s
              appetite and each firm’s strengths is how we match a risk to the right partner.
            </p>
            <div className='pgroup g1' id='insurers'>
              <div className='pg-head'>
                <h3>Korean Non-Life Insurers</h3>
                <p>The carriers that write our clients’ programs.</p>
              </div>
              <ul className='partners three' aria-label='Korean non-life insurers'>
                {INSURERS.map((c) => (
                  <CompanyItem company={c} key={c.en} />
                ))}
              </ul>
            </div>
            <div className='pgroup g3' id='loss-adjusters'>
              <div className='pg-head'>
                <h3>Korean Loss Adjusters</h3>
                <p>Independent expertise when a loss has to be assessed.</p>
              </div>
              <ul className='partners three' aria-label='Korean loss adjusters'>
                {ADJUSTERS.map((c) => (
                  <CompanyItem company={c} key={c.en} />
                ))}
              </ul>
            </div>
            <div className='pgroup g2' id='reinsurers'>
              <div className='pg-head'>
                <h3>Global Reinsurers</h3>
                <p>Capacity and terms for large and complex risks.</p>
              </div>
              <ul className='partners c4' aria-label='Global reinsurers'>
                {REINSURERS.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <p className='partners-more'>
              A selection of the markets and firms we work with. Our network extends well beyond this list.
            </p>
          </div>
        </section>

        <section className='band tint' id='leadership'>
          <div className='wrap'>
            <p className='eyebrow'>AMC Leadership</p>
            <h2>Leading Differently. Acting Decisively.</h2>
            <p className='lede'>
              <strong>Leadership that builds the system and keeps to it.</strong> AMC’s leadership team sets the
              standards the whole firm works to and makes sure every client is served to them. Roles and processes are
              clear, so decisions are quick and the quality of service does not vary from one account to the next.
            </p>
            <ul className='people lead'>
              {LEADERSHIP.map((p) => (
                <PersonCard person={p} key={p.name} />
              ))}
            </ul>
          </div>
        </section>

        <section className='band' id='team'>
          <div className='wrap'>
            <p className='eyebrow'>AMC Team</p>
            <h2>The Experts Behind Every Solution.</h2>
            <p className='lede'>
              <strong>Every client challenge is met by a team that knows the details — and owns them.</strong> AMC’s
              members are seasoned specialists across corporate liability, marine, group benefits, and beyond. They dig
              into the complexity, coordinate across boundaries, and deliver with precision. Behind each of them is the
              same system of manuals, records, and standards, so the service a client receives does not depend on who
              picks up the phone.
            </p>
            <div>
              {TEAMS.map((t) => {
                const count = t.members.length
                return (
                  <section className='team-group' id={teamId(t.team)} key={t.team}>
                    <h3>
                      <span className='tname'>
                        {t.teamKo && (
                          <span className='tko' lang='ko'>
                            {t.teamKo}
                          </span>
                        )}
                        {t.team}
                      </span>
                      <span>
                        {count} {count === 1 ? 'member' : 'members'}
                      </span>
                    </h3>
                    {t.expertise && (
                      <div className='team-panel'>
                        <div>
                          <p className='tp-label'>Team expertise</p>
                          <ul className='chips'>
                            {t.expertise.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className='tp-label'>Clients we serve</p>
                          <p className='tp-clients'>{t.clients || ''}</p>
                        </div>
                      </div>
                    )}
                    <ul className={count === 6 ? 'people team c3' : 'people team'}>
                      {t.members.map((p) => (
                        <PersonCard person={p} key={p.name} />
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className='band contact' id='contact'>
          <div className='wrap contact-grid'>
            <div>
              <p className='eyebrow'>Contact Us</p>
              <h2>Let’s Connect.</h2>
              <p className='lede'>
                Clients, insurers, and prospective partners are welcome to contact us. Tell us briefly what you need,
                and the right team will reply.
              </p>
            </div>
            <dl>
              <div>
                <dt>Company</dt>
                <dd>
                  AMC Insured Co., Ltd.
                  <br />
                  <span lang='ko' className='corp-ko'>
                    ㈜에이엠씨손해보험중개
                  </span>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <CopyEmail email={EMAIL} />
                </dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd>+82 2 2088 1725</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>14F, Miwon Building, 70 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul, Korea</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className='site-foot'>
        <div className='wrap'>
          <Image src='/brand/logo-color.png' alt='AMC Insured' width={300} height={112} />
          <nav aria-label='Footer'>
            <a href='#about'>About Us</a>
            <a href='#business'>Our Business</a>
            <a href='#expertise'>Our Expertise</a>
            <a href='#partners'>Our Partners</a>
            <a href='#leadership'>AMC Leadership</a>
            <a href='#team'>AMC Team</a>
            <a href='#contact'>Contact Us</a>
            <Link href='/privacy' style={{ fontWeight: 700, color: 'var(--on-dark)' }}>
              Privacy Policy
            </Link>
          </nav>
          <p className='legal'>
            <span className='corp'>
              AMC Insured Co., Ltd. · <span lang='ko'>㈜에이엠씨손해보험중개</span>
            </span>
            © {new Date().getFullYear()} AMC Insured Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

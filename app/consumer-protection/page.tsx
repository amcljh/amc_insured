import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import '../home.css'

/* 금융소비자보호 안내
   · 두 기준은 원본 PDF를 그대로 게시합니다(public/consumer-protection/).
     원본: SharePoint 001_내부자료/01. AMC 규정/4. AMC_Compliance(지침 및 기준)
   · 민원 처리 절차는 「금융소비자보호기준」 제9조 제2항을 옮긴 것입니다. 기준이 바뀌면 함께 고치세요.
   · 기준을 개정하면 PDF를 교체하고 STANDARDS의 날짜를 고칩니다. */

export const metadata: Metadata = {
  title: '금융소비자보호 | ㈜에이엠씨손해보험중개',
  description:
    '㈜에이엠씨손해보험중개의 금융소비자보호 내부통제기준, 금융소비자보호기준, 민원 접수 창구와 처리 절차를 안내합니다.',
  alternates: { canonical: 'https://www.amcgeneral.co.kr/consumer-protection' },
}

const COMPLAINT_EMAIL = 'customer.protection@amcrs.co.kr'

const STANDARDS = [
  {
    id: 'internal-control',
    title: '금융소비자보호 내부통제기준',
    basis: '「금융소비자 보호에 관한 법률」 제16조 제2항',
    enacted: '2024-02-22',
    effective: '2024-03-01',
    pages: 18,
    pdf: '/consumer-protection/internal-control-standard-20240222.pdf',
  },
  {
    id: 'consumer-protection',
    title: '금융소비자보호기준',
    basis: '「금융소비자 보호에 관한 법률」 제32조 제3항',
    enacted: '2024-02-22',
    effective: '2024-03-01',
    pages: 12,
    pdf: '/consumer-protection/consumer-protection-standard-20240222.pdf',
  },
]

const COMPLAINT_STEPS: [string, string][] = [
  ['접수', `회사의 담당자나 담당부서, 또는 민원·분쟁 접수 이메일(${COMPLAINT_EMAIL})로 접수합니다.`],
  [
    '본인 확인',
    '금융소비자보호 담당조직에서 민원인 본인 확인과 필요 시 개인정보 수집·이용 동의 절차를 진행하고, 성명, 연락처(전화, 이메일 등), 원하는 회신방법 등을 확인합니다.',
  ],
  ['사실관계 확인', '민원인과 확인한 후 회사의 관련 임직원 및 부서 등과 사실관계를 확인합니다.'],
  ['검토 및 조치 결정', '회사 내부절차에 따라 민원·분쟁 내용을 검토하고 조치사항을 결정합니다.'],
  ['결과 안내', '검토 결과와 조치사항을 특별한 지연사유가 없으면 접수일로부터 10영업일 내에 민원인에게 안내합니다.'],
  ['추가 처리', '필요한 경우 추가 업무처리를 진행하고 안내합니다.'],
  ['종결', '민원을 종결하고 기록을 보관합니다.'],
]

export default function ConsumerProtectionPage() {
  return (
    <div className='amc'>
      <header className='site-head'>
        <div className='wrap'>
          <Link href='/' aria-label='AMC Insured home'>
            <Image className='logo' src='/brand/logo-color.png' alt='AMC' width={300} height={112} priority />
          </Link>
          <Link href='/' className='notice-home'>
            Home
          </Link>
        </div>
      </header>

      <main id='top' lang='ko' className='notice-page'>
        <article className='wrap notice-article'>
          <p className='notice-label cp-label'>Consumer Protection</p>
          <h1>금융소비자보호</h1>
          <p className='notice-period'>
            ㈜에이엠씨손해보험중개는 「금융소비자 보호에 관한 법률」에 따라 금융소비자보호 내부통제기준과
            금융소비자보호기준을 마련하여 운영하고 있습니다.
          </p>

          <nav className='cp-toc' aria-label='이 페이지의 내용'>
            <a href='#complaint'>민원 접수 및 처리 절차</a>
            <a href='#internal-control'>금융소비자보호 내부통제기준</a>
            <a href='#consumer-protection'>금융소비자보호기준</a>
          </nav>

          <section id='complaint'>
            <h2>1. 민원 접수 및 처리 절차</h2>
            <dl className='notice-contact'>
              <div>
                <dt>접수처</dt>
                <dd>
                  <a href={`mailto:${COMPLAINT_EMAIL}`}>{COMPLAINT_EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>담당</dt>
                <dd>금융소비자보호 담당조직</dd>
              </div>
            </dl>

            <p className='cp-note'>「금융소비자보호기준」 제9조에 따라 다음 절차로 처리합니다.</p>
            <ol className='cp-steps'>
              {COMPLAINT_STEPS.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </li>
              ))}
            </ol>

            <p className='cp-note'>
              회사의 처리 결과에 이의가 있으시면 금융감독원(국번 없이 <a href='tel:1332'>1332</a>,{' '}
              <a href='https://www.fss.or.kr' target='_blank' rel='noopener noreferrer'>
                www.fss.or.kr
              </a>
              )에 민원이나 분쟁조정을 신청하실 수 있습니다.
            </p>
          </section>

          {STANDARDS.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2>
                {i + 2}. {s.title}
              </h2>
              <dl className='cp-meta'>
                <div>
                  <dt>제정</dt>
                  <dd>{s.enacted}</dd>
                </div>
                <div>
                  <dt>시행</dt>
                  <dd>{s.effective}</dd>
                </div>
                <div>
                  <dt>근거</dt>
                  <dd>{s.basis}</dd>
                </div>
              </dl>
              <p className='cp-actions'>
                <a href={s.pdf} target='_blank' rel='noopener noreferrer'>
                  원문 보기 (PDF, {s.pages}쪽)
                </a>
                <a href={s.pdf} download>
                  내려받기
                </a>
              </p>
              <details className='cp-viewer'>
                <summary>이 페이지에서 원문 펼쳐 보기</summary>
                <iframe src={s.pdf} title={`${s.title} 원문`} loading='lazy' />
              </details>
            </section>
          ))}
        </article>
      </main>

      <footer className='site-foot'>
        <div className='wrap'>
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

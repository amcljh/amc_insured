import Link from 'next/link'
import {
  EFFECTIVE_DATE,
  PREVIOUS_VERSIONS,
  PRIVACY_OFFICER,
  PRIVACY_MANAGER,
  PRIVACY_DEPARTMENT,
  PROCESSING,
  PROCESSORS,
  SENSITIVE_INFO,
  UNIQUE_ID_INFO,
  COLLECTION_SOURCE,
  THIRD_PARTIES,
  TRANSFERS,
  USES_COOKIES,
  isDraft,
} from './privacy-data'

export const metadata = {
  title: '개인정보 처리방침 | Privacy Policy | AMC Insured',
  description: '㈜에이엠씨손해보험중개(AMC Insured) 개인정보 처리방침 및 Privacy Policy',
}

const COMPANY = '㈜에이엠씨손해보험중개'
const ENGLISH_EFFECTIVE_DATE = 'August 28, 2025'

const KO_TOC: [string, string][] = [
  ['ko-purpose', '1. 처리 목적·항목·보유기간'],
  ['ko-sensitive', '2. 민감정보 처리'],
  ['ko-unique', '3. 고유식별정보 처리'],
  ['ko-third', '4. 제3자 제공'],
  ['ko-processor', '5. 처리 위탁'],
  ['ko-transfer', '6. 국외 이전'],
  ['ko-destroy', '7. 파기 절차·방법'],
  ['ko-rights', '8. 정보주체의 권리'],
  ['ko-security', '9. 안전성 확보조치'],
  ['ko-cookie', '10. 쿠키 등 자동수집장치'],
  ['ko-officer', '11. 보호책임자·담당 부서'],
  ['ko-remedy', '12. 권익침해 구제방법'],
  ['ko-changes', '13. 처리방침 변경'],
]

const EN_TOC: [string, string][] = [
  ['collect', 'What we collect'],
  ['purposes', 'Purposes & legal bases'],
  ['cookies', 'Cookies and tracking'],
  ['sharing', 'Sharing and processors'],
  ['transfers', 'International transfers'],
  ['retention', 'How long we keep info'],
  ['rights', 'Your rights'],
  ['children', 'Children’s privacy'],
  ['security', 'Security'],
  ['officer', 'Privacy officer'],
  ['changes', 'Changes'],
]

export default function PrivacyPolicyPage() {
  const draft = isDraft()
  // 성명 / 직책 / 전화 / 전자우편 순으로 이어 붙입니다(빈 값은 건너뜀).
  const contactRows: [string, string, string[]][] = [
    [
      '개인정보 보호책임자',
      'Privacy officer',
      [PRIVACY_OFFICER.name, PRIVACY_OFFICER.title, PRIVACY_OFFICER.phone, PRIVACY_OFFICER.email],
    ],
    [
      '개인정보 보호담당자',
      'Privacy manager',
      [PRIVACY_MANAGER.name, PRIVACY_MANAGER.title, PRIVACY_MANAGER.phone, PRIVACY_MANAGER.email],
    ],
    [
      '열람청구 접수·처리 부서',
      'Department for access requests',
      [PRIVACY_DEPARTMENT.name, PRIVACY_DEPARTMENT.phone, PRIVACY_DEPARTMENT.email],
    ],
  ]

  return (
    <main id='top' className='min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100'>
      {/* Hero */}
      <header className='relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-br from-[#0456b8] via-blue-600 to-sky-500' />
        <div aria-hidden className='absolute -top-20 right-[-10%] h-72 w-72 rounded-full bg-white/10 blur-3xl' />
        <div className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-black ring-1 ring-white/30 backdrop-blur'>
            <a href='#ko' className='hover:underline'>
              국문
            </a>
            <span className='h-1 w-1 rounded-full bg-white/60' />
            <a href='#en' className='hover:underline'>
              English
            </a>
          </span>
          <h1
            lang='ko'
            className='mt-4 text-4xl font-extrabold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl'
          >
            개인정보 처리방침
          </h1>
          <p className='mt-2 text-xl font-semibold text-black'>Privacy Policy</p>
          <p className='mt-3 text-black'>
            <strong>시행일:</strong> <Value v={EFFECTIVE_DATE} />
          </p>

          <div className='mt-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-slate-900 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60 dark:bg-slate-900/70 dark:text-slate-100 dark:ring-slate-800 dark:focus:ring-offset-slate-950'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {draft && (
        <div className='border-y border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-100'>
          <p lang='ko' className='mx-auto max-w-6xl px-6 py-3 text-sm'>
            <strong>초안</strong> — 확정되지 않은 내용입니다. <Value v='^파란색 바탕' />은 초안 통합본(2026-11-20)에서
            반영한 내용으로 최종 검토가 남아 있고, <Pending /> 표시와 <Value v='~노란색 바탕' />은 추가 확인이
            필요한 내용입니다.
          </p>
        </div>
      )}

      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:py-16 lg:grid-cols-[1fr_320px]'>
        <div className='min-w-0 space-y-16'>
          {/* ===================== 국문 ===================== */}
          <article id='ko' lang='ko' className='scroll-mt-24 space-y-10 break-keep'>
            <div className='rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                {COMPANY}(이하 &lsquo;회사&rsquo;)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
                보호하고 이와 관련한 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을
                수립·공개합니다.
              </p>
            </div>

            <Section id='ko-purpose' title='1. 개인정보의 처리 목적, 처리 항목 및 보유기간'>
              <p>
                회사는 다음의 목적을 위하여 개인정보를 처리하며, 목적 이외의 용도로는 이용하지 않습니다. 이용
                목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
                이행합니다.
              </p>
              <Table
                head={['처리 목적', '처리 항목', '보유기간']}
                rows={PROCESSING.map((p) => [p.purpose, p.items, p.retention])}
              />
              <p>다만, 관계 법령에서 보존 기간을 정한 경우에는 해당 기간 동안 보관합니다.</p>
              <p>
                <strong>수집 방법:</strong> <Value v={COLLECTION_SOURCE} />
              </p>
            </Section>

            <Section id='ko-sensitive' title='2. 민감정보의 처리'>
              <p>
                <Value v={SENSITIVE_INFO} />
              </p>
            </Section>

            <Section id='ko-unique' title='3. 고유식별정보의 처리'>
              <p>
                <Value v={UNIQUE_ID_INFO} />
              </p>
            </Section>

            <Section id='ko-third' title='4. 개인정보의 제3자 제공'>
              {THIRD_PARTIES.length === 0 ? (
                <p>
                  회사는 정보주체의 개인정보를 제1항의 목적 범위 내에서만 처리하며, 정보주체의 동의 또는 법률의
                  특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우를 제외하고는 제3자에게
                  제공하지 않습니다.
                </p>
              ) : (
                <>
                  <p>
                    <Value v='^회사는 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.' />
                  </p>
                  <Table
                    head={['제공받는 자', '제공 목적', '제공 항목', '보유기간']}
                    rows={THIRD_PARTIES.map((t) => [t.recipient, t.purpose, t.items, t.retention])}
                  />
                </>
              )}
            </Section>

            <Section id='ko-processor' title='5. 개인정보 처리업무의 위탁'>
              <p>회사는 원활한 업무 처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <Table head={['수탁자', '위탁 업무']} rows={PROCESSORS.map((p) => [p.company, p.task])} />
              <p>
                회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리
                금지, 안전성 확보조치, 재위탁 제한, 수탁자에 대한 관리·감독
                <Value v='^, 손해배상 등 책임에 관한 사항' />을 문서에 명시하고, 수탁자가 개인정보를 안전하게
                처리하는지 감독합니다. 위탁 업무의 내용이나 수탁자가 변경되면 이 처리방침을 통하여{' '}
                <Value v='^지체 없이' /> 공개합니다.
              </p>
            </Section>

            <Section id='ko-transfer' title='6. 개인정보의 국외 이전'>
              <p>회사는 다음과 같이 개인정보를 국외로 이전하고 있습니다.</p>
              {TRANSFERS.map((t, i) => (
                <InfoList
                  key={i}
                  rows={[
                    ['이전받는 자', t.recipient],
                    ['이전되는 국가', t.country],
                    ['연락처', t.contact],
                    ['이전 항목', t.items],
                    ['이전 시기·방법', t.timing],
                    ['이용 목적', t.purpose],
                    ['보유·이용기간', t.retention],
                  ]}
                />
              ))}
              <p>
                정보주체는 개인정보의 국외 이전을 거부할 수 있습니다. 다만 홈페이지 접속 기록의 국외 이전을
                거부하시는 경우 홈페이지 이용이 어려울 수 있으며, 이 경우 전화 또는 전자우편으로 문의하실 수
                있습니다. 거부 요청은 제11항의 개인정보 보호책임자에게 하시면 됩니다.
              </p>
            </Section>

            <Section id='ko-destroy' title='7. 개인정보의 파기 절차 및 방법'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  회사는 보유기간이 지나거나 처리 목적이 달성되는 등 개인정보가 불필요하게 되었을 때에는 지체 없이
                  해당 개인정보를 파기합니다.
                </li>
                <li>관계 법령에 따라 보존해야 하는 경우에는 해당 개인정보를 별도로 분리하여 보관합니다.</li>
                <li>전자적 파일은 복구할 수 없는 방법으로 삭제하고, 종이 문서는 분쇄하거나 소각하여 파기합니다.</li>
              </ul>
            </Section>

            <Section id='ko-rights' title='8. 정보주체와 법정대리인의 권리·의무 및 행사방법'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  정보주체는 회사에 대하여 언제든지 개인정보 열람, 정정·삭제, 처리정지 및 동의 철회를 요구할 수
                  있습니다.
                </li>
                <li>
                  권리 행사는 서면, <Value v='^전화,' /> 전자우편 등으로 제11항의 개인정보 보호책임자
                  <Value v='^ 또는 담당 부서' />에 하실 수 있으며, 회사는 지체 없이 조치합니다.
                </li>
                <li>
                  권리 행사는 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 위임장을
                  제출하셔야 합니다.
                </li>
                <li>
                  다른 법령에서 수집 대상으로 명시된 개인정보는 삭제를 요구할 수 없으며, 법률에 특별한 규정이 있는
                  경우 등에는 처리정지 요구가 제한될 수 있습니다.
                </li>
                <li>
                  <Value v='^회사는 권리 행사를 요구한 자가 본인이거나 정당한 대리인인지 확인합니다.' />
                </li>
              </ul>
            </Section>

            <Section id='ko-security' title='9. 개인정보의 안전성 확보조치'>
              <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.</p>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  관리적 조치: 내부관리계획 수립·시행, 개인정보 취급 직원의 최소화 및 정기 교육
                  <Value v='^, 수탁자 관리·감독' />
                </li>
                <li>
                  기술적 조치: 개인정보처리시스템 접근권한 관리
                  <Value v='^ 및 접근 통제' />, 접속기록 보관
                  <Value v='^ 및 위·변조 방지' />, 전송 구간 암호화, 보안 프로그램 설치
                  <Value v='^·갱신' />, <Value v='^주민등록번호 등 고유식별정보의 암호화 저장' />
                </li>
                <li>물리적 조치: 문서·저장매체 보관 장소의 출입 통제</li>
              </ul>
            </Section>

            <Section id='ko-cookie' title='10. 개인정보 자동 수집 장치의 설치·운영 및 거부'>
              {USES_COOKIES ? (
                <p>
                  <Pending /> 쿠키 사용 목적, 설치·운영 방법과 거부 방법을 기재합니다.
                </p>
              ) : (
                <p>
                  회사는 홈페이지에서 이용자의 정보를 저장하고 수시로 불러오는 쿠키(cookie) 등 자동 수집 장치를
                  사용하지 않습니다. 향후 사용하게 되는 경우 이 처리방침을 통하여 미리 알려 드립니다.
                </p>
              )}
            </Section>

            <Section
              id='ko-officer'
              title={
                <>
                  11. 개인정보 보호책임자
                  <Value v='^ 및 담당 부서' />
                </>
              }
            >
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄하고, 정보주체의 불만 처리와 피해 구제를 위하여 다음과
                같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <ContactList rows={contactRows.map(([ko, , parts]) => [ko, parts])} />
              <p>
                정보주체는 회사의 서비스를 이용하면서 발생한 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등을
                개인정보 보호책임자<Value v='^ 및 담당 부서' />에 문의하실 수 있으며, 회사는 지체 없이 답변하고
                처리합니다.
              </p>
            </Section>

            <Section id='ko-remedy' title='12. 권익침해 구제방법'>
              <p>
                정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담 등을 신청할 수
                있습니다.
              </p>
              <Table
                head={['기관', '연락처', '홈페이지']}
                rows={[
                  ['개인정보분쟁조정위원회', '(국번 없이) 1833-6972', 'www.kopico.go.kr'],
                  ['개인정보침해신고센터', '(국번 없이) 118', 'privacy.kisa.or.kr'],
                  ['대검찰청', '(국번 없이) 1301', 'www.spo.go.kr'],
                  ['경찰청', '(국번 없이) 182', 'ecrm.police.go.kr'],
                ]}
              />
            </Section>

            <Section id='ko-changes' title='13. 개인정보 처리방침의 변경'>
              <p>
                이 개인정보 처리방침은 <Value v={EFFECTIVE_DATE} />부터 적용됩니다. 내용이 추가·삭제·수정되는
                경우 <Value v='^시행일 7일 전부터' /> 홈페이지를 통하여 공지합니다.{' '}
                <Value v='^다만 정보주체의 권리에 중요한 변경이 있는 경우에는 30일 전부터 공지합니다.' />
              </p>
              {PREVIOUS_VERSIONS.length > 0 && (
                <ul className='list-disc space-y-1 pl-5 text-sm'>
                  {PREVIOUS_VERSIONS.map((v) => (
                    <li key={v.date}>
                      {v.date}: {v.note}
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          </article>

          {/* ===================== English ===================== */}
          <article
            id='en'
            lang='en'
            className='scroll-mt-24 space-y-10 border-t border-slate-200 pt-12 dark:border-slate-800'
          >
            <div>
              <h2 className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
                Privacy Policy (English)
              </h2>
              <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                Effective date: <strong>{ENGLISH_EFFECTIVE_DATE}</strong>. If the Korean and English versions differ,
                the Korean version prevails.
              </p>
            </div>

            <div className='rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                This Policy explains how AMC Insured (“we”, “us”, “our”) handles personal information when you contact
                us or use this site. For any request, email{' '}
                <a
                  href='mailto:info@amcrs.co.kr'
                  className='font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 dark:text-sky-400 dark:hover:text-sky-300'
                >
                  info@amcrs.co.kr
                </a>
                .
              </p>
            </div>

            <Section id='collect' title='1) What we collect and how'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  <strong>Email inquiries (via “mailto”):</strong> your email address, name/signature, any contact
                  details you include, and your message/attachments.
                </li>
                <li>
                  <strong>Security/operational logs:</strong> IP address, user-agent, and timestamp generated by
                  hosting/email systems for security and diagnostics.
                </li>
              </ul>
              <Note>
                These items can be personal data/personal information because they relate to an identified or
                identifiable person.
              </Note>
            </Section>

            <Section id='purposes' title='2) Purposes and legal bases'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  <strong>Responding to inquiries &amp; records</strong> (GDPR Art. 6(1)(b)/(a)).
                </li>
                <li>
                  <strong>Security &amp; service integrity</strong> (legitimate interests, GDPR Art. 6(1)(f)).
                </li>
              </ul>
              <p className='mt-3'>
                We do <em>not</em> use your information for advertising, profiling, or automated decision-making.
              </p>
            </Section>

            <Section id='cookies' title='3) Cookies and tracking'>
              <p>
                We do <strong>not</strong> set non-essential cookies or tracking technologies on this site at present.
                If we later add analytics or ads, we will obtain consent where required and provide controls.
              </p>
            </Section>

            <Section id='sharing' title='4) Sharing and processors'>
              <p>
                We do not sell your personal information. We may use service providers (e.g., hosting, email,
                security/anti-abuse tools) that process data on our behalf under contracts.
              </p>
            </Section>

            <Section id='transfers' title='5) International transfers'>
              <p>
                Our company and primary systems are located in the Republic of Korea. If you are in the EEA/UK and we
                transfer your data internationally, we use appropriate safeguards recognised by law (e.g., EU Standard
                Contractual Clauses or the UK IDTA/Addendum), where applicable.
              </p>
            </Section>

            <Section id='retention' title='6) How long we keep information'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  <strong>Inquiry emails:</strong> kept only as long as necessary for correspondence and our legitimate
                  business/legal needs, then securely deleted.
                </li>
                <li>
                  <strong>Security logs:</strong> kept for a short, limited period for security/diagnostics, then
                  deleted.
                </li>
              </ul>
            </Section>

            <Section id='rights' title='7) Your rights'>
              <p>
                Where applicable law grants you rights (e.g., the Korean Personal Information Protection Act, EEA/UK
                GDPR), you may request access, correction, deletion, restriction, portability, or object to certain
                processing. You also have the right to lodge a complaint with your local data protection authority. For
                California residents (if and to the extent the CCPA/CPRA applies): rights to know/delete/correct and to
                opt-out of “sale” or “sharing” (we do not sell or share), without discrimination.
              </p>
            </Section>

            <Section id='children' title='8) Children’s privacy'>
              <p>Our site is intended for business audiences and not for children.</p>
            </Section>

            <Section id='security' title='9) Security'>
              <p>
                We use reasonable technical and organisational measures (transport encryption, access controls,
                logging) to protect information.
              </p>
            </Section>

            <Section id='officer' title='10) Privacy officer'>
              <ContactList rows={contactRows.map(([, en, parts]) => [en, parts])} />
            </Section>

            <Section id='changes' title='11) Changes'>
              <p>
                We may update this Policy from time to time. We will post updates on this page with a new effective
                date.
              </p>
            </Section>
          </article>
        </div>

        {/* TOC */}
        <aside className='lg:sticky lg:top-20 lg:self-start'>
          <nav
            aria-label='Table of contents'
            className='rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'
          >
            <TocList heading='국문' lang='ko' items={KO_TOC} />
            <div className='mt-5 border-t border-slate-200 pt-4 dark:border-slate-800'>
              <TocList heading='English' lang='en' items={EN_TOC} />
            </div>
            <div className='mt-4 border-t border-slate-200 pt-4 dark:border-slate-800'>
              <Link
                href='/'
                className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900/50 dark:bg-slate-800 dark:focus:ring-offset-slate-900'
              >
                Home
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </main>
  )
}

/* ---------- Small presentational helpers ---------- */
function Section({ id, title, children }: { id: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className='scroll-mt-24'>
      <h2 className='mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>{title}</h2>
      <div className='space-y-3 leading-relaxed text-slate-700 dark:text-slate-300'>{children}</div>
    </section>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className='mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-900/40 dark:bg-amber-900/20 dark:text-amber-100'>
      <p className='text-sm'>{children}</p>
    </div>
  )
}

/** 아직 정해지지 않은 항목 표시 */
function Pending() {
  return (
    <span className='rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'>
      [확인 필요]
    </span>
  )
}

/** 값 표시: 빈 값은 [확인 필요], ~ 는 노란색(확인 필요), ^ 는 파란색(통합본 반영), | 로 부분별 지정 */
function Value({ v }: { v: string }) {
  if (!v.trim()) return <Pending />
  return (
    <>
      {v.split('|').map((seg, i) => (
        <Segment key={i} s={seg} />
      ))}
    </>
  )
}

const MARK_STYLE = {
  '~': 'rounded bg-amber-100 px-1 text-inherit dark:bg-amber-900/40 dark:text-amber-100',
  '^': 'rounded bg-sky-100 px-1 text-inherit dark:bg-sky-900/50 dark:text-sky-100',
} as const

function Segment({ s }: { s: string }) {
  const m = s.match(/^(\s*)([~^]?)([\s\S]*?)(\s*)$/)
  if (!m) return <>{s}</>
  const [, lead, mark, body, trail] = m
  if (!mark) return <>{s}</>
  // 공백으로 시작하는 본문(예: '^ 및 담당 부서')은 앞 공백을 바깥으로 빼서 표시합니다.
  const inner = body.replace(/^\s+/, '')
  const space = body.length !== inner.length ? ' ' : ''
  if (!inner) return <Pending />
  return (
    <>
      {lead}
      {space}
      <mark className={MARK_STYLE[mark as '~' | '^']}>{inner}</mark>
      {trail}
    </>
  )
}

/** 연락처 목록: 각 행의 값들을 ' / ' 로 이어서 표시하고 빈 값은 건너뜁니다. */
function ContactList({ rows }: { rows: [string, string[]][] }) {
  return (
    <dl className='grid grid-cols-1 gap-x-6 gap-y-1 rounded-xl border border-slate-200 bg-white p-4 text-sm sm:grid-cols-[12rem_1fr] sm:gap-y-2 dark:border-slate-800 dark:bg-slate-900/60'>
      {rows.map(([label, parts]) => {
        const shown = parts.filter((p) => p.trim())
        return (
          <div key={label} className='contents'>
            <dt className='mt-2 font-semibold first:mt-0 sm:mt-0'>{label}</dt>
            <dd className='break-words'>
              {shown.length === 0 ? (
                <Pending />
              ) : (
                shown.map((p, i) => (
                  <span key={i}>
                    {i > 0 && ' / '}
                    <Value v={p} />
                  </span>
                ))
              )}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}

/** 항목명·값 목록 (휴대폰에서는 위아래로, 넓은 화면에서는 좌우로 배치) */
function InfoList({ rows }: { rows: [string, string][] }) {
  return (
    <dl className='grid grid-cols-1 gap-x-6 gap-y-1 rounded-xl border border-slate-200 bg-white p-4 text-sm sm:grid-cols-[10rem_1fr] sm:gap-y-2 dark:border-slate-800 dark:bg-slate-900/60'>
      {rows.map(([label, value]) => (
        <div key={label} className='contents'>
          <dt className='mt-2 font-semibold first:mt-0 sm:mt-0'>{label}</dt>
          <dd className='break-words'>
            <Value v={value} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800'>
      <table className='w-full min-w-[32rem] border-collapse bg-white text-left text-sm dark:bg-slate-900/60'>
        <thead className='bg-slate-100 dark:bg-slate-800'>
          <tr>
            {head.map((h) => (
              <th key={h} scope='col' className='px-4 py-2.5 font-semibold'>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className='border-t border-slate-200 align-top dark:border-slate-800'>
              {r.map((c, j) => (
                <td key={j} className='px-4 py-2.5'>
                  <Value v={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TocList({ heading, lang, items }: { heading: string; lang: string; items: [string, string][] }) {
  return (
    <div lang={lang}>
      <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'>
        {heading}
      </p>
      <ul className='space-y-1.5 text-sm'>
        {items.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className='group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
            >
              <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition group-hover:bg-blue-500 dark:bg-slate-600 dark:group-hover:bg-sky-400' />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

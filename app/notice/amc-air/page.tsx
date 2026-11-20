import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AMC_AIR_NOTICE as N } from '../notices'
import '../../home.css'

/* [개인정보 유출 통지] 홈페이지 게시문
   원본: public/notice/amc-air-privacy-notice-20261120.pdf (대표이사 명의, 2026-11-20)
   문구를 고칠 때는 원본 PDF와 함께 수정하고, 두 내용이 같은지 확인하세요. */

export const metadata: Metadata = {
  title: `[${N.label}] ${N.title} | ㈜에이엠씨손해보험중개`,
  description:
    '㈜에이엠씨손해보험중개가 운영하던 보험금 청구 앱 AMC air의 개인정보 유출 사실과 피해 예방 방법, 피해 신고 접수처를 안내합니다.',
  alternates: { canonical: 'https://www.amcgeneral.co.kr/notice/amc-air' },
}

const PHONE = '010-3600-3438'
const EMAIL = 'airhelp@amcrs.co.kr'

function koDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${y}년 ${m}월 ${d}일`
}

export default function AmcAirNoticePage() {
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
          <p className='notice-label'>[{N.label}]</p>
          <h1>{N.title}</h1>
          <p className='notice-period'>
            게시 기간: {koDate(N.postedFrom)} ~ {koDate(N.postedUntil)} (30일)
          </p>

          <div className='notice-lead'>
            <p>
              ㈜에이엠씨손해보험중개가 운영하던 보험금 청구 앱 AMC air에서 일부 고객사 임직원의 개인정보가 외부로
              유출된 사실이 확인되었습니다. 큰 걱정을 드린 점 진심으로 사과드립니다.
            </p>
            <p>
              연락처를 알 수 없어 개별 안내를 받지 못하신 분께는 「개인정보 보호법」 제34조 및 같은 법 시행령
              제39조에 따라 이 게시로 개별 통지를 갈음합니다.
            </p>
          </div>

          <section>
            <h2>1. 유출된 개인정보 항목</h2>
            <ul>
              <li>
                개인별로 다르며, 성명, 소속 회사, 주민등록번호(전체 또는 앞자리), 가입자와의 관계, 보험기간이 포함될
                수 있습니다. 보험금을 청구한 분은 병명, 치료 정보, 사고 경위도 포함될 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. 유출 시점과 경위</h2>
            <ul>
              <li>
                2026년 11월 5일부터 15일 사이에 외부에서 AMC air의 청구 목록과 회원 명단 파일을 내려받은 기록을 11월
                18일 보안 점검 과정에서 확인했습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. 피해를 줄이기 위해 하실 수 있는 일</h2>
            <ul>
              <li>
                <strong>명의도용 확인과 차단:</strong> 엠세이퍼(
                <a href='https://www.msafer.or.kr' target='_blank' rel='noopener noreferrer'>
                  www.msafer.or.kr
                </a>
                )에서 본인 명의 휴대폰과 계좌 개설 여부를 확인하고 차단해 주십시오.
              </li>
              <li>
                <strong>사칭 연락 주의:</strong> 보험사, 병원, 공공기관, 당사를 사칭한 연락의 링크를 누르거나
                개인정보와 금융정보를 알려주지 마십시오.
              </li>
              <li>
                <strong>비밀번호 변경:</strong> AMC air와 같은 비밀번호를 다른 서비스에서 쓰셨다면 즉시 변경해
                주십시오.
              </li>
              <li>
                <strong>금전 피해 발생 시:</strong> 경찰(112)에 바로 신고해 주십시오.
              </li>
            </ul>
            <p className='notice-warn'>※ 당사는 전화나 문자로 주민등록번호나 계좌번호를 묻지 않습니다.</p>
          </section>

          <section>
            <h2>4. 당사의 대응 조치</h2>
            <ul>
              <li>
                11월 18일 즉시 서비스를 중단하고 관련 기록을 보존했으며, 관계 기관에 신고를 마쳤습니다. 유출 경위와
                범위는 계속 조사 중입니다. 재발 방지를 위해 앱 접수를 즉시 중단했으며, 서비스 운영 계약에 개인정보
                보호 기준 반영 및 정기 점검, 대표이사 직속 개인정보보호 전담 체계 구축, 새 접수 방식을 시행합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. 피해 구제 절차</h2>
            <ul>
              <li>
                <strong>피해 신고:</strong> 피해 내용과 확인 자료를 아래 문의처로 보내 주시면 접수하여 검토한 뒤
                안내드리겠습니다.
              </li>
              <li>
                <strong>외부 기관 상담:</strong> 개인정보침해 신고센터(한국인터넷진흥원) 국번 없이{' '}
                <a href='tel:118'>118</a> / 개인정보 분쟁조정위원회 <a href='tel:1833-6972'>1833-6972</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>6. 피해 신고 접수 및 문의처</h2>
            <dl className='notice-contact'>
              <div>
                <dt>접수처</dt>
                <dd>㈜에이엠씨손해보험중개</dd>
              </div>
              <div>
                <dt>전화</dt>
                <dd>
                  <a href={`tel:${PHONE}`}>{PHONE}</a> (평일 09:00~18:00)
                </dd>
              </div>
              <div>
                <dt>메일</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
            </dl>
          </section>

          <div className='notice-sign'>
            <p>{koDate(N.postedFrom)}</p>
            <p>
              <strong>㈜에이엠씨손해보험중개 대표이사 이장한</strong>
            </p>
          </div>

          <p className='notice-pdf'>
            <a href={N.pdf} download>
              게시문 원본(PDF) 내려받기
            </a>
          </p>
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

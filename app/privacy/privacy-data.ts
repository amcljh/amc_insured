/* =====================================================================
   개인정보 처리방침 데이터 — 담당자·업체·기간이 바뀌면 이 파일만 수정하면 됩니다.
   표시 규칙(내용 수정 중에만 사용)
   · 빈 문자열('')        → 노란색 "[확인 필요]"
   · 앞에 물결표(~)        → 노란색 배경(확인 필요)
   · 앞에 꺾쇠(^)          → 파란색 배경(새로 반영, 검토 전)
   · 세로줄(|)로 나누면 한 문장 안에서 부분마다 색을 다르게 줄 수 있습니다.
   · 게시 전에는 기호를 모두 지워 일반 글자로 만듭니다.
   최종 수정: 2026-11-20 (게시용, 표시 기호 제거)
   ===================================================================== */

/** 시행일(YYYY-MM-DD). */
export const EFFECTIVE_DATE = '2026-11-20' // 통합본 기재값. 사전 공지 기간(7일)과 맞는지 확인 필요

/** 이전 처리방침 시행일. 변경 이력 표시에 사용합니다. */
export const PREVIOUS_VERSIONS: { date: string; note: string }[] = [
  { date: '2025-08-28', note: '영문 처리방침 최초 게시' },
]

/** 개인정보 보호책임자 (성명 또는 부서 중 하나와 연락처는 필수) */
export const PRIVACY_OFFICER = {
  name: '이장한',
  title: '대표이사',
  phone: '', // 통합본에 없음 — 비워 두면 표시하지 않습니다
  email: 'gat@amcrs.co.kr',
}

/** 개인정보 보호담당자 */
export const PRIVACY_MANAGER = {
  name: '이주호',
  title: '책임',
  phone: '02-6959-2749',
  email: 'gat@amcrs.co.kr',
}

/** 열람청구 접수·처리 부서 */
export const PRIVACY_DEPARTMENT = {
  name: '기업문화팀',
  phone: '02-2088-1725',
  email: 'gat@amcrs.co.kr',
}

/** 개인정보 수집 경로 */
export const COLLECTION_SOURCE =
  '회사는 정보주체가 전자우편·서면 등으로 직접 제출하거나, 보험계약자인 고객사가 피보험자 명단 등을 제공하는 방법으로 개인정보를 수집합니다. 보험금 청구 앱 AMC air를 통해서도 수집하였으나, 2026년 11월 18일 운영을 중단하였습니다.'

/** 개인정보 처리 목적과 처리 항목 */
export const PROCESSING: { purpose: string; items: string; retention: string }[] = [
  {
    purpose: '보험중개(보험계약 체결·갱신 지원)',
    items: '고객사 담당자: 성명, 소속, 직위, 전화번호, 전자우편',
    retention: '거래 종료 후 5년',
  },
  {
    purpose: '단체보험(단체상해 등) 가입·유지 지원',
    items: '피보험자: 성명, 주민등록번호, 소속 회사, 가입자와의 관계, 보험기간',
    retention: '보험계약 종료 후 관계 법령에서 정한 기간',
  },
  {
    purpose: '사고 접수 및 보험금 청구 지원(AMC air 포함)',
    items: '위 피보험자 항목 + 병명·치료 정보, 사고 일시·경위, 진료비 영수증 등 증빙, 보험금 수령 계좌',
    retention: '보험금 지급 완료 후 관계 법령에서 정한 기간',
  },
  {
    purpose: '문의·민원 응대(전화·전자우편)',
    items: '성명, 전자우편 주소, 연락처, 회사명·직위 등 문의 시 기재한 정보, 문의 내용과 첨부파일',
    retention: '문의 처리 완료 후 3년',
  },
  {
    purpose: '홈페이지 접속 기록 관리(보안·장애 대응)',
    items: '접속 IP 주소, 브라우저 정보, 접속 일시(서비스 이용 과정에서 자동 생성)',
    retention: '호스팅 업체(Vercel) 보관 정책에 따름',
  },
]

/** 민감정보 처리 여부와 내용 */
export const SENSITIVE_INFO =
  '회사는 보험금 청구 지원을 위하여 병명, 치료 정보 등 건강에 관한 정보를 처리할 수 있습니다. 이 경우 「개인정보 보호법」 제23조에 따라 정보주체의 별도 동의를 받거나 보험업법 시행령 제102조 등 관계 법령에서 허용하는 범위에서만 처리합니다.'

/** 고유식별정보(주민등록번호) 처리 내용
 *  통합본에는 '제24조의3'으로 적혀 있으나 주민등록번호 처리 제한 조항은 제24조의2이므로 고쳐 두었습니다(확인 필요). */
export const UNIQUE_ID_INFO =
  '회사는 단체보험 가입·유지와 보험금 청구 지원을 위하여 주민등록번호를 처리합니다. 주민등록번호는 「개인정보 보호법」 제24조의2에 따라 법령에서 처리를 요구하거나 허용하는 경우에만 처리하며, 암호화하여 안전하게 보관합니다.'

/** 개인정보 처리 위탁 */
export const PROCESSORS: { company: string; task: string }[] = [
  { company: 'Vercel Inc.', task: '홈페이지 호스팅 및 접속 기록 처리' },
  { company: '한국마이크로소프트(유)', task: '전자우편 및 업무 시스템(Microsoft 365) 운영' },
  { company: '㈜메타몬스터', task: '보험금 청구 앱 AMC air 개발·운영·유지보수(2026년 11월 18일 운영 중단)' },
  { company: '태일회계법인', task: '세무·회계 처리' },
]

/** 개인정보 국외 이전 (개인정보 보호법 제28조의8) */
export const TRANSFERS: {
  recipient: string
  country: string
  contact: string
  items: string
  timing: string
  purpose: string
  retention: string
}[] = [
  {
    recipient: 'Vercel Inc.',
    country: '미국',
    contact: 'privacy@vercel.com',
    items: '접속 IP 주소, 브라우저 정보, 접속 일시',
    timing: '홈페이지 접속 시 네트워크를 통해 전송',
    purpose: '홈페이지 호스팅 및 보안',
    retention: 'Vercel 보관 정책에 따름',
  },
]

/** 개인정보 제3자 제공. 제공하지 않으면 빈 배열로 둡니다. */
export const THIRD_PARTIES: { recipient: string; purpose: string; items: string; retention: string }[] = [
  {
    recipient: '보험계약을 인수하는 보험회사',
    purpose: '보험계약 체결·유지, 보험금 청구 및 지급',
    items: '성명, 주민등록번호, 소속 회사, 가입자와의 관계, 보험기간, 병명·치료 정보, 사고 경위',
    retention: '제공받는 자의 보유기간(관계 법령에 따름)',
  },
  {
    recipient: '손해사정법인(보험회사가 선임한 경우)',
    purpose: '손해사정',
    items: '보험금 청구 관련 항목', // 구체적 항목 기재 필요
    retention: '제공받는 자의 보유기간',
  },
  {
    recipient: '재보험회사',
    purpose: '재보험 계약 체결·관리',
    items: '계약 체결에 관한 항목', // 구체적 항목 기재 필요
    retention: '제공받는 자의 보유기간',
  },
]

/** 쿠키 사용 여부. 분석 도구 등을 추가하면 true로 바꾸고 문구를 보완합니다. */
export const USES_COOKIES = false

/** 노란색: 빈 값이거나 물결표(~) 부분이 있는 값 */
export function isUnconfirmed(v: string): boolean {
  if (!v.trim()) return true
  return v.split('').some((s) => s.trim().startsWith(''))
}

/** 파란색: 통합본 반영 후 최종 검토가 남은 값 */
export function isPendingReview(v: string): boolean {
  return v.split('').some((s) => s.trim().startsWith(''))
}

/** 노란색·파란색 값이 하나라도 있으면 초안으로 봅니다. 비워 두면 표시하지 않는 항목(보호책임자 전화)은 제외합니다. */
export function isDraft(): boolean {
  const optional = [PRIVACY_OFFICER.phone].filter((v) => v.trim())
  const values = [
    EFFECTIVE_DATE,
    PRIVACY_OFFICER.name,
    PRIVACY_OFFICER.title,
    PRIVACY_OFFICER.email,
    ...optional,
    ...Object.values(PRIVACY_MANAGER),
    ...Object.values(PRIVACY_DEPARTMENT),
    COLLECTION_SOURCE,
    SENSITIVE_INFO,
    UNIQUE_ID_INFO,
    ...PROCESSING.flatMap((p) => [p.purpose, p.items, p.retention]),
    ...PROCESSORS.flatMap((p) => [p.company, p.task]),
    ...TRANSFERS.flatMap((t) => [t.recipient, t.country, t.contact, t.items, t.timing, t.purpose, t.retention]),
    ...THIRD_PARTIES.flatMap((t) => [t.recipient, t.purpose, t.items, t.retention]),
  ]
  return values.some((v) => isUnconfirmed(v) || isPendingReview(v))
}

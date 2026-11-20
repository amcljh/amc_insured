/* =====================================================================
   개인정보 처리방침 데이터 — 담당자·업체·기간이 정해지면 이 파일만 수정하면 됩니다.
   · 빈 문자열('')로 둔 항목은 화면에 "[확인 필요]"로 표시됩니다.
   · 모든 항목이 채워지고 EFFECTIVE_DATE를 입력하면 상단 "초안" 표시가 사라집니다.
   · 내용 확정 전 기업문화팀 확인과 법률 검토를 거쳐 주세요.
   최종 수정: 2026-11-17 (초안)
   ===================================================================== */

/** 시행일(YYYY-MM-DD). 확정 전에는 비워 둡니다. */
export const EFFECTIVE_DATE = ''

/** 이전 처리방침 시행일. 변경 이력 표시에 사용합니다. */
export const PREVIOUS_VERSIONS: { date: string; note: string }[] = [
  { date: '2025-08-28', note: '영문 처리방침 최초 게시' },
]

/** 개인정보 보호책임자. 성명 대신 직책만 적어도 됩니다(부서·연락처는 필수). */
export const PRIVACY_OFFICER = {
  title: '', // 직책 (예: 이사)
  name: '', // 성명 (선택)
  department: '', // 담당 부서 (예: 기업문화팀)
  phone: '', // 전화번호 (예: 02-0000-0000)
  email: '', // 전자우편 (예: privacy@amcrs.co.kr)
}

/** 개인정보 처리 목적과 처리 항목 */
export const PROCESSING: { purpose: string; items: string; retention: string }[] = [
  {
    purpose: '홈페이지를 통한 문의 응대(전자우편)',
    items: '성명, 전자우편 주소, 회사명·직위 등 문의 시 기재한 정보, 문의 내용과 첨부파일',
    retention: '', // 보유기간 (예: 문의 처리 완료 후 3년)
  },
  {
    purpose: '홈페이지 접속 기록 관리(보안·장애 대응)',
    items: '접속 IP 주소, 브라우저 정보, 접속 일시(서비스 이용 과정에서 자동 생성)',
    retention: '', // 보유기간 (호스팅 업체 보관 기간 확인 필요)
  },
  {
    purpose: '', // 보험중개 업무(계약자·피보험자 정보) 처리 목적 — 기업문화팀 확인 후 기재
    items: '',
    retention: '',
  },
]

/** 민감정보 처리 여부와 내용. 처리하지 않으면 빈 문자열 그대로 두지 말고 '처리하지 않음'으로 적습니다. */
export const SENSITIVE_INFO = '' // 예: 보험금 청구 지원 시 건강정보를 정보주체의 별도 동의를 받아 처리

/** 개인정보 처리 위탁 */
export const PROCESSORS: { company: string; task: string }[] = [
  { company: 'Vercel Inc.', task: '홈페이지 호스팅 및 접속 기록 처리' },
  { company: '', task: '전자우편 시스템 운영' }, // 메일 서비스 업체명 확인 필요
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
    country: '', // 서버 소재 국가 확인 필요 (예: 미국)
    contact: '', // 이전받는 자의 개인정보 담당 연락처 확인 필요
    items: '접속 IP 주소, 브라우저 정보, 접속 일시',
    timing: '홈페이지 접속 시 네트워크를 통해 전송',
    purpose: '홈페이지 호스팅 및 보안',
    retention: '', // 호스팅 업체 보관 기간 확인 필요
  },
]

/** 개인정보 제3자 제공. 제공하지 않으면 빈 배열로 둡니다. */
export const THIRD_PARTIES: { recipient: string; purpose: string; items: string; retention: string }[] = []

/** 쿠키 사용 여부. 분석 도구 등을 추가하면 true로 바꾸고 문구를 보완합니다. */
export const USES_COOKIES = false

/** 값이 하나라도 비어 있으면 초안으로 봅니다. */
export function isDraft(): boolean {
  const values = [
    EFFECTIVE_DATE,
    PRIVACY_OFFICER.department,
    PRIVACY_OFFICER.phone,
    PRIVACY_OFFICER.email,
    SENSITIVE_INFO,
    ...PROCESSING.flatMap((p) => [p.purpose, p.items, p.retention]),
    ...PROCESSORS.flatMap((p) => [p.company, p.task]),
    ...TRANSFERS.flatMap((t) => [t.recipient, t.country, t.contact, t.items, t.timing, t.purpose, t.retention]),
  ]
  return values.some((v) => !v.trim())
}

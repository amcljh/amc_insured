/* =====================================================================
   SITE DATA — 구성원·파트너 변동 시 이 파일만 수정하면 됩니다.
   · 추가: 해당 팀 members 배열에 한 줄 추가하고 public/people/ 폴더에 사진(4:5 비율, 600x750 권장) 저장
   · 삭제: 해당 줄 삭제 (사진 파일도 함께 삭제)
   · 팀 소개: expertise(전문 분야 꼬리표)와 clients(주요 고객군, 업종으로만 표기)를 고치면 팀 이름 아래 패널이 바뀝니다.
   · 순서: 배열 순서대로 화면에 표시됩니다. 팀장은 leader: true 로 표시하고 맨 앞에 둡니다.
   최종 수정: 2026-11-17
   ===================================================================== */

export type Member = {
  name: string
  role?: string
  leader?: boolean
  /** public/people/ 안의 파일명. 비워 두면 "Photo to follow" 자리표시가 나옵니다. */
  photo: string
}

export type Team = {
  team: string
  teamKo?: string
  expertise?: string[]
  clients?: string
  members: Member[]
}

export type Company = { en: string; ko: string }

export const LEADERSHIP: Member[] = [
  { name: 'Jang Han Lee', role: 'CEO', photo: 'jang-han-lee.jpg' },
  { name: 'H. Michael Chung', role: 'EVP', photo: 'h-michael-chung.jpg' },
  { name: 'Brian Park', role: 'EVP', photo: 'brian-park.jpg' },
  { name: 'Jeong Hee Yoon', role: 'Sales Director', photo: 'jeong-hee-yoon.jpg' },
]

export const TEAMS: Team[] = [
  {
    team: 'Client Management Team',
    teamKo: '기업1팀',
    expertise: [
      'Insured Value Adequacy Review',
      'Construction Risks',
      'Third-Party Claims During Construction',
      'Property',
      'Machinery Breakdown',
      'Business Interruption',
      'Directors & Officers (D&O)',
    ],
    clients:
      'Retailers, Contractors, Manufacturers, Food & Beverage Companies, Asset Management Companies, Private Equity Funds (PEF)',
    members: [
      { name: 'HW Kim', leader: true, photo: 'hw-kim.jpg' },
      { name: 'EH Hwang', role: 'Liability / Property', photo: 'eh-hwang.jpg' },
      { name: 'JH Lee', role: 'Property / Business Interruption', photo: 'jh-lee.jpg' },
      { name: 'WC Kim', role: 'Construction Risks / Third-Party Claims During Construction', photo: 'wc-kim.jpg' },
      { name: 'BC Kim', role: 'Machinery Breakdown / Property', photo: 'bc-kim.jpg' },
      { name: 'JS Kim', role: 'Directors & Officers (D&O) / Liability', photo: 'js-kim.jpg' },
    ],
  },
  {
    team: 'Claim Control Team',
    teamKo: '기업2팀',
    expertise: [
      'Bodily Injury & Property Damage Liability',
      'Key Person',
      'Directors & Officers (D&O)',
      'Group Accident',
      'Personal Accident',
    ],
    clients: 'Hotels & Resorts, Shopping Malls, Sports Clubs, Golf Clubs, Franchises, Healthcare Providers',
    members: [
      { name: 'JH Choi', leader: true, photo: 'jh-choi.jpg' },
      { name: 'J Park', role: 'Group Accident / Personal Accident / Directors & Officers (D&O)', photo: 'j-park.jpg' },
      { name: 'SJ Shin', role: 'Group Accident / Personal Accident', photo: 'sj-shin.jpg' },
      { name: 'JH Yu', role: 'Bodily Injury & Property Damage Liability / Directors & Officers (D&O)', photo: 'jh-yu.jpg' },
    ],
  },
  {
    team: 'Marine & Reinsurance Team',
    teamKo: '해상팀',
    expertise: ['Reinsurance', 'Cargo', 'Hull', 'P&I', 'Project Cargo', 'Port & Terminal Package', 'Fine Arts'],
    clients: 'Shipping Companies, Logistics Companies, Manufacturers, Retailers, Auction Houses',
    members: [
      { name: 'CH Jang', leader: true, photo: 'ch-jang.jpg' },
      { name: 'YD Kim', role: 'Cargo / Hull / P&I / Fine Arts', photo: 'yd-kim.jpg' },
      { name: 'DE Kwak', role: 'Reinsurance / Cargo', photo: 'de-kwak.jpg' },
      { name: 'HS Moon', role: 'Cargo / Port & Terminal Package', photo: 'hs-moon.jpg' },
    ],
  },
  {
    team: 'HR & General Affairs Team',
    teamKo: '기업문화팀',
    members: [
      { name: 'SE You', role: 'HR & General Affairs', photo: 'se-you.jpg' },
      { name: 'SS An', role: 'Finance', photo: 'ss-an.jpg' },
    ],
  },
]

/* 재보험자: 알파벳순 */
export const REINSURERS: string[] = [
  'AXA XL',
  'Beazley',
  'Berkshire Hathaway',
  'China Re',
  'Everest',
  'Great American Insurance Group',
  'Hannover Re',
  'Lloyd’s',
  'Markel',
  'Munich Re',
  'PartnerRe',
  'Swiss Re',
]

/* 국내 원수보험사: 금융감독원 전자공시(DART) 기업개황 기준 (2026-11-13 확인). en = 영문 상호, ko = 국문 상호 */
export const INSURERS: Company[] = [
  { en: 'Samsung Fire & Marine Insurance Co., Ltd.', ko: '삼성화재해상보험㈜' },
  { en: 'Hyundai Marine & Fire Insurance Co., Ltd.', ko: '현대해상화재보험㈜' },
  { en: 'DB Insurance Co., Ltd.', ko: 'DB손해보험㈜' },
  { en: 'KB Insurance Co., Ltd.', ko: '㈜KB손해보험' },
  { en: 'Meritz Fire & Marine Insurance Co., Ltd.', ko: '메리츠화재해상보험㈜' },
  { en: 'Hanwha General Insurance Co., Ltd.', ko: '한화손해보험㈜' },
  { en: 'NongHyup Property & Casualty Insurance Co., Ltd.', ko: 'NH농협손해보험' },
  { en: 'Lotte Non-Life Insurance Co., Ltd.', ko: '롯데손해보험㈜' },
  { en: 'Heungkuk Fire & Marine Insurance Co., Ltd.', ko: '흥국화재해상보험㈜' },
]

/* 국내 손해사정회사: 앞 4곳 DART 기준, 뒤 2곳 각 사 홈페이지 기준 */
export const ADJUSTERS: Company[] = [
  { en: 'DASCA Loss Adjusters & Surveyors Co., Ltd.', ko: '㈜다스카손해사정화재해상' },
  { en: 'INCOK Loss & Average Adjusters Co., Ltd.', ko: '인코크화재해상손해사정㈜' },
  { en: 'IASCO Co., Ltd.', ko: '㈜국제손해사정' },
  { en: 'Asia Claims Adjusters Co., Ltd.', ko: '아세아손해사정㈜' },
  { en: 'Chungang Adjusters Co., Ltd.', ko: '중앙화재특종손해사정㈜' },
  { en: 'Hanil Surveyors & Adjusters Co., Ltd.', ko: '한일손해사정㈜' },
]

/** 팀 이름을 앵커 id로 변환 (예: "Marine & Reinsurance Team" → "marine-and-reinsurance-team") */
export function teamId(team: string): string {
  return team
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** 하단 회사 정보 — 출처: 사업자등록증(영등포세무서, 2024-09-26 발급) */
export const COMPANY_INFO = {
  nameKo: '㈜에이엠씨손해보험중개',
  ceo: '이장한',
  bizRegNo: '507-88-02190',
  addressKo: '서울특별시 영등포구 국제금융로 70, 1402호(여의도동, 미원빌딩)',
}

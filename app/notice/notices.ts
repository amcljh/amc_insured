/* =====================================================================
   홈페이지 공지 — 메인 첫 화면 공지 띠와 공지 페이지가 이 값을 씁니다.
   · bannerFrom ~ bannerUntil 기간(한국 시간, 양 끝 날짜 포함)에만 메인 상단 공지 띠가 보입니다.
   · 공지 페이지(/notice/...)는 기간이 지나도 남아 있습니다. 내리려면 페이지 폴더를 삭제하세요.
   ===================================================================== */

export type Notice = {
  /** 공지 페이지 주소 */
  href: string
  /** 띠·목록에 표시할 분류 */
  label: string
  title: string
  /** 게시문에 적힌 게시 기간 */
  postedFrom: string
  postedUntil: string
  /** 메인 공지 띠 표시 기간 (YYYY-MM-DD, 한국 시간 기준, 양 끝 포함) */
  bannerFrom: string
  bannerUntil: string
  /** 원본 게시문 PDF (public 폴더 기준 경로) */
  pdf: string
}

export const AMC_AIR_NOTICE: Notice = {
  href: '/notice/amc-air',
  label: '개인정보 유출 통지',
  title: 'AMC air 개인정보 유출 사실 안내',
  postedFrom: '2026-11-20',
  postedUntil: '2026-12-20',
  bannerFrom: '2026-11-20',
  bannerUntil: '2026-12-21', // 게시 기간(30일)에 하루 여유를 둠
  pdf: '/notice/amc-air-privacy-notice-20261120.pdf',
}

/** 한국 시간 기준 오늘 날짜(YYYY-MM-DD) */
export function todayKST(now: Date = new Date()): string {
  return new Date(now.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10)
}

export function isBannerActive(notice: Notice, now: Date = new Date()): boolean {
  const today = todayKST(now)
  return today >= notice.bannerFrom && today <= notice.bannerUntil
}

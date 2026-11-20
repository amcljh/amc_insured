'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { isBannerActive, type Notice } from '../../app/notice/notices'

/** 메인 첫 화면 상단 공지 띠. 표시 기간이 지나면 방문자 브라우저에서 자동으로 숨깁니다. */
export function NoticeBar({ notice }: { notice: Notice }) {
  // 빌드 시점 판단은 page.tsx에서 하고, 여기서는 방문 시점에 한 번 더 확인합니다.
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(isBannerActive(notice))
  }, [notice])

  if (!visible) return null

  return (
    <div className='notice-bar' role='region' aria-label='공지' lang='ko'>
      <Link href={notice.href} className='wrap'>
        <span className='nb-label'>[{notice.label}]</span>
        <span className='nb-title'>{notice.title}</span>
        <span className='nb-more' aria-hidden='true'>
          자세히 보기 →
        </span>
      </Link>
    </div>
  )
}

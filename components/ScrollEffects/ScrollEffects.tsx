'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, inView, scroll, stagger } from 'motion'

/* 스크롤 인터랙션 모음 (메인 페이지 전용)
   · 섹션 제목·본문과 카드 묶음이 화면에 들어올 때 아래에서 위로 나타남(카드는 순차 등장)
   · 성과 수치(25.6% 등)가 0부터 올라가는 카운트
   · 상단 스크롤 진행 막대, 맨 위로 버튼
   · 사용자가 OS에서 "동작 줄이기"를 켠 경우 등장·카운트 효과는 적용하지 않음
   대상 요소는 아래 선택자로 지정하므로 page.tsx 마크업은 바꿀 필요가 없습니다. */

/** 하나씩 나타나는 요소 */
const SINGLE = [
  '.band .eyebrow',
  '.band h2',
  '.band .lede',
  '.vision blockquote',
  '.vision .goal',
  '.pillars-lead',
  '.exp-block > h3',
  '.exp-block > p',
  '.hub',
  '.team-group > h3',
  '.team-panel',
  '.partners-more',
]

/** 자식 요소가 순서대로 나타나는 묶음 */
const GROUPS = [
  '.pillars',
  '.qualities',
  '.deliver',
  '.services',
  '.areas',
  '.tiles',
  '.duo',
  '.people',
  '.pgroup',
  '.contact dl',
]

const EASE = [0.22, 1, 0.36, 1] as const
const HIDDEN = { opacity: '0', transform: 'translateY(28px)' }

function belowFold(el: Element) {
  return el.getBoundingClientRect().top > window.innerHeight * 0.92
}

function hide(els: HTMLElement[]) {
  els.forEach((el) => Object.assign(el.style, HIDDEN))
}

/** 등장이 끝나면 인라인 스타일을 지워 CSS 호버 효과가 정상 동작하게 함 */
function reveal(els: HTMLElement[], options: Parameters<typeof animate>[2]) {
  animate(els, { opacity: 1, transform: 'translateY(0px)' }, options).finished.then(() => {
    els.forEach((el) => {
      el.style.opacity = ''
      el.style.transform = ''
    })
  })
}

export function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const root = document.querySelector('.amc')
    if (!root) return
    const stops: (() => void)[] = []

    // 스크롤 진행 막대 + 맨 위로 버튼 표시
    stops.push(
      scroll((progress: number) => {
        if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
      })
    )
    const onScroll = () => setShowTop(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    stops.push(() => window.removeEventListener('scroll', onScroll))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return () => stops.forEach((s) => s())

    // 단일 요소 등장
    root.querySelectorAll<HTMLElement>(SINGLE.join(',')).forEach((el) => {
      if (!belowFold(el)) return
      hide([el])
      stops.push(
        inView(
          el,
          () => {
            reveal([el], { duration: 0.7, ease: EASE })
          },
          { margin: '0px 0px -8% 0px' }
        )
      )
    })

    // 묶음 순차 등장
    root.querySelectorAll<HTMLElement>(GROUPS.join(',')).forEach((group) => {
      if (!belowFold(group)) return
      const items = Array.from(group.children) as HTMLElement[]
      if (items.length === 0) return
      hide(items)
      stops.push(
        inView(
          group,
          () => {
            reveal(items, { duration: 0.65, ease: EASE, delay: stagger(0.08) })
          },
          { margin: '0px 0px -10% 0px' }
        )
      )
    })

    // 성과 수치 카운트 (예: "25.6%", "60%+")
    root.querySelectorAll<HTMLElement>('.duo-card.premium dt').forEach((dt) => {
      const node = dt.firstChild
      if (!node || node.nodeType !== Node.TEXT_NODE) return
      const match = (node.textContent || '').match(/^([\d.]+)(.*)$/)
      if (!match) return
      const target = parseFloat(match[1])
      const decimals = (match[1].split('.')[1] || '').length
      const suffix = match[2]
      const write = (v: number) => {
        node.textContent = v.toFixed(decimals) + suffix
      }
      write(0)
      stops.push(
        inView(
          dt,
          () => {
            animate(0, target, { duration: 1.4, ease: EASE, onUpdate: write })
          },
          { margin: '0px 0px -10% 0px' }
        )
      )
    })

    return () => stops.forEach((s) => s())
  }, [])

  return (
    <>
      <div className='scroll-bar' aria-hidden='true'>
        <div ref={barRef} />
      </div>
      <button
        type='button'
        className={showTop ? 'to-top show' : 'to-top'}
        aria-label='Back to top'
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M12 19V5M5 12l7-7 7 7' />
        </svg>
      </button>
    </>
  )
}

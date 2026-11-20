'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export type SiteNavItem = {
  label: string
  href: string
  sub?: { label: string; labelKo?: string; href: string }[]
}

export function SiteHeader({ items }: { items: SiteNavItem[] }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const close = () => setOpen(false)

  // 스크롤하면 헤더에 그림자
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 현재 보고 있는 섹션의 메뉴 강조 (하위 메뉴 대상 섹션도 상위 메뉴로 묶음)
  useEffect(() => {
    const owner = new Map<string, string>()
    items.forEach((item) => {
      owner.set(item.href.slice(1), item.href)
      item.sub?.forEach((s) => owner.set(s.href.slice(1), item.href))
    })
    const sections = Array.from(owner.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el && el.tagName === 'SECTION')

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(owner.get(hit.target.id) || '')
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [items])

  return (
    <header className={scrolled ? 'site-head scrolled' : 'site-head'}>
      <div className='wrap'>
        <a href='#top' aria-label='AMC Insured home'>
          <Image className='logo' src='/brand/logo-color.png' alt='AMC' width={300} height={112} priority />
        </a>
        <nav className={open ? 'nav open' : 'nav'} id='site-nav' aria-label='Main'>
          {items.map((item) => (
            <div className='nav-item' key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className={active === item.href ? 'active' : undefined}
                aria-current={active === item.href ? 'location' : undefined}
              >
                {item.label}
              </a>
              {item.sub && item.sub.length > 0 && (
                <div className='sub'>
                  {item.sub.map((s) => (
                    <a href={s.href} key={s.href + s.label} onClick={close}>
                      {s.labelKo && (
                        <span className='tko' lang='ko'>
                          {s.labelKo}
                        </span>
                      )}
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          className={open ? 'menu-btn open' : 'menu-btn'}
          type='button'
          aria-expanded={open}
          aria-controls='site-nav'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

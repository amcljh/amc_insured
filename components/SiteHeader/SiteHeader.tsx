'use client'

import { useState } from 'react'
import Image from 'next/image'

export type SiteNavItem = {
  label: string
  href: string
  sub?: { label: string; labelKo?: string; href: string }[]
}

export function SiteHeader({ items }: { items: SiteNavItem[] }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className='site-head'>
      <div className='wrap'>
        <a href='#top' aria-label='AMC Insured home'>
          <Image className='logo' src='/brand/logo-color.png' alt='AMC' width={300} height={112} priority />
        </a>
        <nav className={open ? 'nav open' : 'nav'} id='site-nav' aria-label='Main'>
          {items.map((item) => (
            <div className='nav-item' key={item.href}>
              <a href={item.href} onClick={close}>
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
          className='menu-btn'
          type='button'
          aria-expanded={open}
          aria-controls='site-nav'
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}

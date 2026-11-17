'use client'

import { useRef, useState } from 'react'

/** 이메일 링크와 "Copy" 버튼. 클립보드를 쓸 수 없으면 주소를 선택 상태로 만들어 직접 복사할 수 있게 합니다. */
export function CopyEmail({ email }: { email: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [copied, setCopied] = useState(false)

  const selectText = () => {
    const node = linkRef.current
    const selection = window.getSelection()
    if (!node || !selection) return
    const range = document.createRange()
    range.selectNodeContents(node)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  const handleCopy = () => {
    if (!navigator.clipboard?.writeText) {
      selectText()
      return
    }
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }, selectText)
  }

  return (
    <>
      <a href={`mailto:${email}`} ref={linkRef}>
        {email}
      </a>
      <button className='copy-btn' type='button' onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </>
  )
}

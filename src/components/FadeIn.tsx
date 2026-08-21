"use client"

import { useEffect, useRef } from "react"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
}

export default function FadeIn({ children, className = "", stagger = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
      { threshold: 0.07 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${stagger ? "stagger" : "fade"} ${className}`}>
      {children}
    </div>
  )
}

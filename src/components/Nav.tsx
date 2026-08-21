"use client"

import { useEffect, useState } from "react"

interface NavProps {
  name: string
  locale: "en" | "th"
  onToggle: () => void
}

export default function Nav({ name, locale, onToggle }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href="#" className="nav-name">{name}</a>
        <div className="nav-right"></div>
        <ul className="nav-links">
  <li><a href="#about">{locale === "en" ? "about" : "เกี่ยวกับ"}</a></li>
  <li><a href="#skills">{locale === "en" ? "skills" : "ทักษะ"}</a></li>
  <li><a href="#experience">{locale === "en" ? "experience" : "ประสบการณ์"}</a></li>
  <li><a href="#projects">{locale === "en" ? "projects" : "โปรเจกต์"}</a></li>
  <li><a href="#education">{locale === "en" ? "education" : "การศึกษา"}</a></li>
  <li><a href="#contact">{locale === "en" ? "contact" : "ติดต่อ"}</a></li>
</ul>
         <button onClick={onToggle} className="lang-toggle">
            {locale === "en" ? "TH" : "EN"}
          </button>
      </div>
    </nav>
  )
}

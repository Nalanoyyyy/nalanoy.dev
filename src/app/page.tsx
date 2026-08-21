"use client"
import { useState, useEffect } from "react"
import { resumeData } from "@/data"
import { resumeDataTH } from "@/data.th"
import Nav from "@/components/Nav"
import FadeIn from "@/components/FadeIn"
import Image from "next/image"

export default function Home() {
  const [locale, setLocale] = useState<"en" | "th">("en")
  const d = locale === "en" ? resumeData : resumeDataTH
  const { name, bio, about, location, contact, skills, experience, projects, education } = d

  // ── Typing animation ──────────────────────────────────────
  const roles = locale === "en"
    ? ["Aspiring Developer", "Frontend Enthusiast", "Class of 2026"]
    : ["ว่าที่นักพัฒนาซอฟต์แวร์", "Frontend Developer", "จบปี 2026"]

  const [displayed, setDisplayed] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500)
      } else if (deleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [charIndex, deleting, roleIndex, locale])

  useEffect(() => {
    setDisplayed("")
    setCharIndex(0)
    setRoleIndex(0)
    setDeleting(false)
  }, [locale])

  return (
    <>
      {/* ── NAV ──────────────────────────────────────────────── */}
      <Nav
        name="nalanoy.dev"
        locale={locale}
        onToggle={() => setLocale(locale === "en" ? "th" : "en")}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="container">
          <div>
            <p className="hero-role">
              // {displayed}<span className="cursor">|</span>
            </p>
            <h1 className="hero-title">
              {locale === "en" ? "Hi, I'm" : "สวัสดี ฉันชื่อ"}<br />
              <strong>{name}</strong>
            </h1>
            <p className="hero-bio">{bio}</p>
            <div className="hero-links">
              <a className="btn btn-primary" href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`} target="_blank" rel="noreferrer">
                {locale === "en" ? "Contact Me" : "ติดต่อฉัน"}
              </a>
              <a className="btn" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href={`https://${contact.github}`} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="avatar">
            <Image src="/profile.png" alt={name} width={500} height={500} style={{ objectFit: "cover" , objectPosition: "center 0%" }} />
          </div>
        </div>
      </header>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="container">
          <FadeIn>
            <p className="section-header">{locale === "en" ? "about me" : "เกี่ยวกับฉัน"}</p>
            <p className="about-text">{about}</p>
          </FadeIn>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section className="section" id="skills">
        <div className="container">
          <p className="section-header">{locale === "en" ? "skills & tools" : "ทักษะ & เครื่องมือ"}</p>
          <FadeIn stagger>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.group} className="skill-group">
                  <p className="skill-group-name">{group.group}</p>
                  <div className="tags">
                    {group.tags.map((tag) => (
                      <span key={tag} className={"gray" in group && group.gray ? "tag-gray" : "tag"}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section className="section" id="experience">
        <div className="container">
          <FadeIn>
            <p className="section-header">{locale === "en" ? "experience" : "ประสบการณ์"}</p>
            <div className="exp-list">
              {experience.map((exp) => (
                <div key={exp.company} className="exp-item">
                  <div className="exp-period">{exp.period}</div>
                  <div>
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-company">{exp.company}</p>
                    <div className="exp-desc">
                      <ul>
                        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="section" id="projects">
        <div className="container">
          <p className="section-header">{locale === "en" ? "projects" : "โปรเจกต์"}</p>
          <FadeIn stagger>
            <div className="projects-grid">
              {projects.map((p) => (
                <a key={p.title} className="project-card" href={p.href} target="_blank" rel="noreferrer">
                  <p className="project-title">{p.title}</p>
                  <p className="project-desc">{p.desc}</p>
                  <p className="project-note">{p.note}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                  </div>
                  <span className="project-link">{locale === "en" ? "View Project ↗" : "ดูโปรเจกต์ ↗"}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────── */}
      <section className="section" id="education">
        <div className="container">
          <FadeIn>
            <p className="section-header">{locale === "en" ? "education" : "การศึกษา"}</p>
            {education.map((edu) => (
              <div key={edu.school} className="edu-item">
                <div className="edu-year">{edu.period}</div>
                <div>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-detail">{edu.detail}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="container">
          <p className="section-header">{locale === "en" ? "contact" : "ติดต่อ"}</p>
          <FadeIn stagger>
            <div className="contact-grid">
              <a className="contact-item" href={`mailto:${contact.email}`}>
                <span className="contact-label">{locale === "en" ? "email" : "อีเมล"}</span>
                <span className="contact-value">{contact.email}</span>
              </a>
              <a className="contact-item" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
                <span className="contact-label">linkedin</span>
                <span className="contact-value">{contact.linkedin}</span>
              </a>
              <a className="contact-item" href={`https://${contact.github}`} target="_blank" rel="noreferrer">
                <span className="contact-label">github</span>
                <span className="contact-value">{contact.github}</span>
              </a>
              <div className="contact-item">
                <span className="contact-label">{locale === "en" ? "location" : "ที่อยู่"}</span>
                <span className="contact-value">{location}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer>
        <div className="container">
          <p>© 2026 {name}</p>
          <p>built with next.js · hosted on vercel</p>
        </div>
      </footer>
    </>
  )
}
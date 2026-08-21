// ============================================================
//  📝 แก้ข้อมูลของคุณที่นี่ที่เดียว ไม่ต้องแตะไฟล์อื่น
// ============================================================

export const resumeData = {
  // ── ข้อมูลส่วนตัว ─────────────────────────────────────────
  name: "Kritteera Chaloemdit",
  role: "Aspiring Developer / Class of 2026",
  bio: "Detail-oriented aspiring Frontend Developer passionate about interactive design. Ready to turn concepts into beautiful, user-friendly, and high-performance web experiences using Next.js, React, and Tailwind CSS.",
  about: "I am an aspiring Frontend Developer with a keen eye for interactive design. My journey in web development is fueled by the desire to build intuitive, user-centric applications. Whether I'm crafting responsive UI components or writing clean, scalable code with Next.js, React, TypeScript, and Vite, I focus on delivering seamless experiences. I believe in combining clean, minimalist layouts with creative visual storytelling to make every web project both functional and memorable.",
  location: "Bangkok, Thailand",
  avatar: "/profile.png",  // ← ใส่รูปตัวเองใน /public/photo.jpg แล้วเอา comment ออก

  // ── ช่องทางติดต่อ ──────────────────────────────────────────
  contact: {
    email: "kritteeranoina@gmail.com",
    linkedin: "linkedin.com/in/nalanoy",
    github: "github.com/Nalanoyyyy",
  },

  // ── ทักษะ ──────────────────────────────────────────────────
  skills: [
    {
      group: "Core Skills",
      tags: ["Frontend Development", "Interactive Design", "Responsive Web Design", "Component-Driven Architecture"],
    },
    {
      group: "Languages",
      tags: ["TypeScript", "JavaScript"],
    },
    {
      group: "Frameworks & Libraries",
      tags: ["Next.js", "React","Tailwind CSS"],
    },
     {
      group: "Build Tools & Version Control",
      tags: ["Vite", "Git / GitHub"],
    },
    {
    group: "Languages (Human)",  // อันนี้แหละที่ควรเป็นสีเทา
    tags: ["Thai (Native)", "English (Intermediate)"],
    gray: true,  // ✅ ย้ายมาไว้ที่นี่แทน
  },
  ],

  // ── ประสบการณ์ทำงาน ────────────────────────────────────────
  experience: [
    {
      period: "JUNE - JULY 2025",
      role: "Frontend Developer Intern ",
      company: "Thai Nam Poly Pack Co., Ltd.",
      bullets: [
        "Redesigned and modernized the user interface for the internal production department's website to significantly improve usability and streamline workflows.",
        "Reorganized the navigation bar and structured the content hierarchy, successfully reducing menu click-through rates by approximately 50% compared to the legacy version.",
        "Developed responsive and dynamic frontend components utilizing React, JavaScript, and Tailwind CSS.",
      ],
    },
    
  ],

  // ── โปรเจกต์ ───────────────────────────────────────────────
  projects: [
    {
      title: "RentBook: Book Rental & Management Platform (Academic Project)",
      desc: "Developed as a university course project, RentBook is a proof-of-concept web application designed to simplify the process of online book rentals. Operating as a digital rental shop, the platform allows users to easily discover and rent books directly from the website's catalog. Please note that as an academic prototype, some features and functionalities may still be in development",
      note: "* As an academic project developed within a limited timeframe, this application focuses primarily on core functionalities. Some secondary features (such as [e.g., the payment gateway / advanced recommendation system]) remain in the prototype phase, demonstrating the system's scalable architecture and future potential.",
      stack: ["TypeScript", "React", "Tailwind CSS", "Vite"],
      href: "https://rentbook-project.vercel.app/",
    },
  ],
  
  // ── การศึกษา ───────────────────────────────────────────────
  education: [
    {
      period: "2022 — 2026 (Expected)",
      degree: "Bachelor of Technology (Digital Technology and Innovation)",
      school: "Southeast Asia University",
      detail: "GPX 2.20",
    },

    
  ],
} as const

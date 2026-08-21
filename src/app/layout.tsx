import type { Metadata } from "next"
import { Kanit, DM_Mono } from "next/font/google"
import "./globals.css"
import { resumeData } from "@/data"

const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
})

export const metadata: Metadata = {
  title: `Kritteera | Resume`,
  description: resumeData.bio,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  )
}

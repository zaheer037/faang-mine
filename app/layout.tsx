import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FAANG Tech Lab - Master Coding Skills for Top Tech Companies",
  description:
    "Join FAANG Tech Lab and master programming skills to land your dream job at Facebook, Amazon, Apple, Netflix, Google, and other top tech companies. Expert-led courses, hands-on projects, and career support.",
  keywords:
    "coding bootcamp, programming courses, FAANG jobs, tech careers, web development, data science, system design, interview preparation",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/images/faang-logo-svg.svg', type: 'image/svg+xml' },
      { url: '/images/faang-logo.jpg', sizes: '32x32', type: 'image/jpeg' },
    ],
    shortcut: '/images/faang-logo-svg.svg',
    apple: { url: '/images/faang-logo.jpg', sizes: '180x180' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

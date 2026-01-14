import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuffixSec - Enterprise Vulnerability Detection",
  description:
    "Advanced AI-powered security scanning platform. Detect zero-day vulnerabilities, simulate attacks, and get real-time security reports for your applications.",
  applicationName: "SuffixSec",
  icons: {
    icon: "/icon-192x192.jpg",
    apple: "/icon-192x192.jpg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SuffixSec",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#10b981",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SuffixSec" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-TileImage" content="/icon-192x192.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192x192.jpg" />
      </head>
      <body className={`${geistSans.className} antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

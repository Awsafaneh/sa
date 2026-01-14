"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import Features from "@/components/landing/features"
import Stats from "@/components/landing/stats"
import Pricing from "@/components/landing/pricing"
import Contact from "@/components/landing/contact"
import Footer from "@/components/landing/footer"
import PWAInstall from "@/components/pwa/pwa-install"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("suffixsec_user")
    if (user) {
      setIsLoggedIn(true)
      router.push("/dashboard")
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <PWAInstall />
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

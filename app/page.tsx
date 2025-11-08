"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import MarketAnalysis from "@/components/market-analysis"
import ClientSegments from "@/components/client-segments"
import BusinessModel from "@/components/business-model"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Process />
      <MarketAnalysis />
      <ClientSegments />
      <BusinessModel />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

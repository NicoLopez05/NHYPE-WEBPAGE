"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, Loader } from "lucide-react"
import { useState } from "react"

// Fictional company data
const DEMO_COMPANIES = [
  {
    id: 1,
    name: "TechStart Innovations",
    industry: "Software SaaS",
    logo: "TS",
    color: "bg-blue-500",
    brief: "Campaña de lanzamiento de nueva plataforma de IA para pequeñas empresas",
    targetAudience: "Emprendedores y pymes tech-savvy",
  },
]

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "active" as const },
  { id: 3, label: "Storyboard", status: "pending" as const },
  { id: 4, label: "Generación", status: "pending" as const },
  { id: 5, label: "Edición", status: "pending" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

export default function DemoPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const company = DEMO_COMPANIES[0]

  const handleStartDemo = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/analysis")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={0} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Empresa Registrada */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Bienvenido a tu Demo
          </h1>
          <p className="text-xl text-foreground/70 mb-12">
            Simularemos el flujo completo de producción para una empresa ficticia
          </p>
        </div>

        {/* Company Card */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-6 mb-6">
            <div
              className={`${company.color} w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-2xl`}
            >
              {company.logo}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                {company.name}
              </h2>
              <p className="text-muted-foreground">{company.industry}</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                Brief del Proyecto
              </label>
              <p className="text-lg text-foreground mt-2">{company.brief}</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                Audiencia Objetivo
              </label>
              <p className="text-lg text-foreground mt-2">{company.targetAudience}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleStartDemo}
            disabled={isLoading}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isLoading
                ? "bg-primary text-white opacity-70 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105"
            }`}
          >
            {isLoading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Iniciando...
              </>
            ) : (
              <>
                Comenzar Demo
                <ArrowRight size={20} />
              </>
            )}
          </button>
          <p className="text-foreground/60 text-sm mt-6">Duración aproximada: 5 minutos</p>
        </div>
      </div>
    </main>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "active" as const },
  { id: 2, label: "Brief", status: "pending" as const },
  { id: 3, label: "Storyboard", status: "pending" as const },
  { id: 4, label: "Generación", status: "pending" as const },
  { id: 5, label: "Edición", status: "pending" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

const ANALYSIS_METRICS = [
  {
    icon: Users,
    title: "Mercado Objetivo",
    data: "Emprendedores y Pymes",
    insights: "Audiencia tech-savvy entre 25-45 años con presupuesto digital disponible",
  },
  {
    icon: TrendingUp,
    title: "Oportunidad de Mercado",
    data: "8.5M de empresas",
    insights: "En Latinoamérica buscando soluciones de marketing digital en 2025",
  },
  {
    icon: Target,
    title: "Objetivo de Campaña",
    data: "Awareness + Leads",
    insights: "Posicionamiento de marca + Captura de contactos de empresas interesadas",
  },
]

export default function AnalysisPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/brief")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={0} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 1: Análisis Estratégico
          </h1>
          <p className="text-xl text-foreground/70">
            Nuestro equipo ha analizado a fondo el brief de tu proyecto y el contexto de mercado
          </p>
        </div>

        {/* Analysis Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ANALYSIS_METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.title} className="bg-card border border-border rounded-xl p-8">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "Poppins" }}>
                  {metric.data}
                </p>
                <p className="text-sm text-foreground/70">{metric.insights}</p>
              </div>
            )
          })}
        </div>

        {/* Key Findings */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Hallazgos Clave
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground/80">
                Tu público objetivo valora la autenticidad y la innovación. Los videos con testimonios y demostraciones
                reales generan 3x más engagement.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground/80">
                La mejor ventana de publicación es entre martes a jueves, 10-14hs. Recomendamos 3-4 versiones de 30-45
                segundos.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground/80">
                El formato vertical (9:16) tiene mejor performance en redes, mientras que 16:9 es ideal para YouTube.
              </p>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 border border-border rounded-full font-semibold text-foreground hover:bg-muted transition-all"
          >
            Atrás
          </button>
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
              isLoading
                ? "bg-primary text-white opacity-70 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
            }`}
          >
            Siguiente
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  )
}

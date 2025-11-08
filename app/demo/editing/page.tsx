"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, Wand2 } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "completed" as const },
  { id: 3, label: "Storyboard", status: "completed" as const },
  { id: 4, label: "Generación", status: "completed" as const },
  { id: 5, label: "Edición", status: "active" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

const EDITING_TASKS = [
  {
    title: "Montaje Principal",
    description: "Secuencia de 45 segundos en formato 16:9",
    status: "completed",
  },
  {
    title: "Color Grading",
    description: "Aplicación de paleta de marca (blues, purples, whites)",
    status: "completed",
  },
  {
    title: "Sincronización de Audio",
    description: "Lip-sync del avatar con música y efectos de sonido",
    status: "completed",
  },
  {
    title: "Transiciones Dinámicas",
    description: "Efectos suave entre escenas para máximo impacto",
    status: "completed",
  },
  {
    title: "Optimización para Redes",
    description: "Adaptación automática a 9:16, 1:1 y otros formatos",
    status: "completed",
  },
  {
    title: "Subtítulos e Iframes",
    description: "Tipografía animada y textos informativos",
    status: "completed",
  },
]

export default function EditingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/proposals")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={4} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 5: Edición y Postproducción
          </h1>
          <p className="text-xl text-foreground/70">
            Refinamiento profesional de todos los elementos visuales y de audio
          </p>
        </div>

        {/* Editing Tasks */}
        <div className="space-y-4 mb-16">
          {EDITING_TASKS.map((task, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{task.title}</h3>
                  <p className="text-sm text-foreground/60">{task.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-bold text-green-700">Completado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Preview */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Wand2 size={48} className="text-white/40 mx-auto mb-4" />
              <p className="text-white/60">Vista previa del video final</p>
              <p className="text-white/40 text-sm">45 segundos • 4K • Color Graded</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-2">Versiones Disponibles</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["9:16 (Vertical)", "1:1 (Square)", "16:9 (YouTube)", "4:3 (Stories)"].map((format) => (
                <div key={format} className="bg-muted p-3 rounded-lg text-center">
                  <p className="text-xs font-semibold text-foreground">{format}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-foreground/60 mb-2">Calidad Visual</p>
            <p className="text-3xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
              4K
            </p>
            <p className="text-xs text-foreground/60 mt-1">Ultra HD 60fps</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-lg p-6">
            <p className="text-sm text-foreground/60 mb-2">Sincronización Audio</p>
            <p className="text-3xl font-bold text-secondary" style={{ fontFamily: "Poppins" }}>
              99%
            </p>
            <p className="text-xs text-foreground/60 mt-1">Precisión en lip-sync</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20 rounded-lg p-6">
            <p className="text-sm text-foreground/60 mb-2">Impacto Visual</p>
            <p className="text-3xl font-bold text-green-600" style={{ fontFamily: "Poppins" }}>
              A+
            </p>
            <p className="text-xs text-foreground/60 mt-1">Calificación profesional</p>
          </div>
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

"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, ImageIcon } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "completed" as const },
  { id: 3, label: "Storyboard", status: "active" as const },
  { id: 4, label: "Generación", status: "pending" as const },
  { id: 5, label: "Edición", status: "pending" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

const STORYBOARD_SCENES = [
  {
    frame: 1,
    time: "0-5s",
    title: "Gancho Visual",
    description: "Transición dinámica con tipografía 3D animada",
    bg: "bg-gradient-to-br from-blue-600 to-purple-600",
  },
  {
    frame: 2,
    time: "5-15s",
    title: "Problema - Escena 1",
    description: "Empresario trabajando en laptop, estrés, documentos dispersos",
    bg: "bg-slate-200",
  },
  {
    frame: 3,
    time: "15-25s",
    title: "Problema - Escena 2",
    description: "Montaje rápido de reuniones, procesos lentos, frustración",
    bg: "bg-red-100",
  },
  {
    frame: 4,
    time: "25-35s",
    title: "Solución - Demostración",
    description: "Interfaz de plataforma, avatar IA explicando beneficios",
    bg: "bg-gradient-to-br from-green-400 to-blue-500",
  },
  {
    frame: 5,
    time: "35-42s",
    title: "Beneficios",
    description: "Iconos animados: velocidad, calidad, escalabilidad",
    bg: "bg-yellow-100",
  },
  {
    frame: 6,
    time: "42-45s",
    title: "Call to Action",
    description: "Website, logo de empresa, botón de acción destacado",
    bg: "bg-gradient-to-br from-slate-900 to-slate-700",
  },
]

export default function StoryboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/generation")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={2} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 3: Storyboard Visual
          </h1>
          <p className="text-xl text-foreground/70">Vista secuencial de cada escena que será generada con IA</p>
        </div>

        {/* Storyboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {STORYBOARD_SCENES.map((scene) => (
            <div
              key={scene.frame}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Frame Preview */}
              <div
                className={`${scene.bg} h-40 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <ImageIcon size={40} className="text-white/80 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Frame {scene.frame}</p>
                </div>
              </div>

              {/* Frame Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {scene.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                    {scene.time}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{scene.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Production Notes */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Notas de Producción
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-foreground/80">
                Se utilizarán recursos generados con IA para optimizar tiempos, manteniendo supervisión creativa humana
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-foreground/80">
                Transiciones dinámicas para captar atención en primeros 3 segundos (vital para redes sociales)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-foreground/80">
                Avatar IA con lip-sync en español, permitiendo traducción futura sin re-grabación
              </p>
            </div>
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

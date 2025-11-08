"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, Zap, Video } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "completed" as const },
  { id: 3, label: "Storyboard", status: "completed" as const },
  { id: 4, label: "Generación", status: "active" as const },
  { id: 5, label: "Edición", status: "pending" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

const GENERATION_ASSETS = [
  { name: "Avatar IA - Presentador", type: "Video", status: "Completado", color: "bg-green-500" },
  { name: "Escenas de Problema", type: "Footage", status: "Completado", color: "bg-green-500" },
  { name: "Animaciones de UI", type: "Motion Graphics", status: "Completado", color: "bg-green-500" },
  { name: "Efectos Visuales", type: "VFX", status: "Completado", color: "bg-green-500" },
  { name: "Música y Sonido", type: "Audio", status: "Completado", color: "bg-green-500" },
  { name: "Transiciones", type: "Effects", status: "Completado", color: "bg-green-500" },
]

export default function GenerationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/editing")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={3} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 4: Generación de Activos
          </h1>
          <p className="text-xl text-foreground/70">
            Todos los elementos visuales han sido generados con IA bajo supervisión creativa
          </p>
        </div>

        {/* Generation Status */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                Generación Completada
              </h2>
              <p className="text-sm text-foreground/70">Todos los activos están listos para edición</p>
            </div>
          </div>
        </div>

        {/* Assets Generated */}
        <div className="space-y-4 mb-16">
          {GENERATION_ASSETS.map((asset) => (
            <div
              key={asset.name}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`${asset.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                    <Video size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{asset.name}</h3>
                    <p className="text-sm text-foreground/60">{asset.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-green-500/20 text-green-700 px-3 py-1 rounded-full">
                    {asset.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Generation Insights */}
        <div className="bg-card border border-border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Detalles Técnicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Especificaciones</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Resolución: 4K (3840x2160)</li>
                <li>Frame Rate: 60fps</li>
                <li>Codec: H.264</li>
                <li>Tamaño Total: 2.4GB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Herramientas Utilizadas</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>IA Generativa (Visuals)</li>
                <li>Motion Capture (Avatar)</li>
                <li>Stock Footage Database</li>
                <li>Sonido Ambiental IA</li>
              </ul>
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

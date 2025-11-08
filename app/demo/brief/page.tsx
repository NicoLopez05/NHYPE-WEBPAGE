"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowRight, FileText, Zap } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "active" as const },
  { id: 3, label: "Storyboard", status: "pending" as const },
  { id: 4, label: "Generación", status: "pending" as const },
  { id: 5, label: "Edición", status: "pending" as const },
  { id: 6, label: "Propuestas", status: "pending" as const },
]

export default function BriefPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/demo/storyboard")
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={1} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 2: Brief y Guión
          </h1>
          <p className="text-xl text-foreground/70">
            Hemos desarrollado un guión profesional basado en tu estrategia de marketing
          </p>
        </div>

        {/* Brief Information */}
        <div className="space-y-8">
          {/* Format & Duration */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                Especificaciones
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Duración</label>
                <p className="text-2xl font-bold text-foreground mt-2">45 segundos</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Formatos</label>
                <p className="text-lg text-foreground mt-2">9:16 • 1:1 • 16:9</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Plataformas</label>
                <p className="text-lg text-foreground mt-2">TikTok • Instagram • LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Script */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-secondary" size={28} />
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                Guión Narrativo
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  time: "0-5s",
                  scene: "Gancho (Hook)",
                  text: "Pantalla negra: 'Tu negocio crece con el video.'",
                  visual: "Transición dinámica con tipografía animada",
                },
                {
                  time: "5-25s",
                  scene: "Problema",
                  text: "Montaje de empresarios frustrados, reuniones largas, procesos manuales.",
                  visual: "Stock video + animación de UI con IA generada",
                },
                {
                  time: "25-40s",
                  scene: "Solución",
                  text: "TechStart Innovations te ayuda a crear contenido en minutos, no días.",
                  visual: "Demostración de plataforma + avatar IA hablando",
                },
                {
                  time: "40-45s",
                  scene: "CTA",
                  text: "Visita techstart.com - Prueba gratis hoy.",
                  visual: "Pantalla de website + logo + botón destacado",
                },
              ].map((scene) => (
                <div key={scene.time} className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-bold bg-primary text-white px-3 py-1 rounded-full">{scene.time}</span>
                    <h3 className="font-semibold text-foreground">{scene.scene}</h3>
                  </div>
                  <p className="text-foreground/80 mb-2">{scene.text}</p>
                  <p className="text-sm text-foreground/60 italic">Visual: {scene.visual}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone & Style */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-secondary" size={28} />
              <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                Tono y Estilo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Características</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Dinámico y energético
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Profesional pero accesible
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Foco en soluciones
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Paleta Visual</h3>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white border-2 border-foreground rounded-lg"></div>
                  <div className="w-12 h-12 bg-slate-900 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
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

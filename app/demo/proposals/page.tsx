"use client"

import { useRouter } from "next/navigation"
import { TimelineProgress } from "@/components/timeline-progress"
import { ArrowLeft, Download, Share2, Palette, Lightbulb, Film } from "lucide-react"
import { useState } from "react"

const TIMELINE_STEPS = [
  { id: 1, label: "Análisis", status: "completed" as const },
  { id: 2, label: "Brief", status: "completed" as const },
  { id: 3, label: "Storyboard", status: "completed" as const },
  { id: 4, label: "Generación", status: "completed" as const },
  { id: 5, label: "Edición", status: "completed" as const },
  { id: 6, label: "Propuestas", status: "active" as const },
]

const PROPOSALS = [
  {
    id: 1,
    title: "Propuesta Versión 1: Énfasis en Innovación",
    description: "Versión dinámica con énfasis en la tecnología IA y modernidad",
    colors: ["#0A0A23", "#FF4E50", "#EDEDED"],
    concepts: ["Tech-forward", "Energético", "Futurista"],
    images: [
      "Pantalla negra con tipografía dinámica en rojo coral",
      "Montaje rápido de código y IA",
      "Avatar futurista presentando solución",
      "Interfaz neon animada",
    ],
  },
  {
    id: 2,
    title: "Propuesta Versión 2: Enfoque en Resultados",
    description: "Versión orientada a casos de uso reales y ROI medible",
    colors: ["#FF9A00", "#0A0A23", "#EDEDED"],
    concepts: ["Data-driven", "Confiable", "Profesional"],
    images: [
      "Gráficos de crecimiento en naranja vibrante",
      "Testimonios de empresas reales",
      "Métricas de éxito animadas",
      "CTA con garantía de resultados",
    ],
  },
  {
    id: 3,
    title: "Propuesta Versión 3: Conexión Emocional",
    description: "Versión narrativa con enfoque en historias de éxito humanas",
    colors: ["#FF4E50", "#FF9A00", "#0A0A23"],
    concepts: ["Inspirador", "Relatable", "Transformador"],
    images: [
      "Empresarios sonriendo, antes y después",
      "Historias de transformación digital",
      "Comunidad de clientes celebrando",
      "Visión de futuro compartido",
    ],
  },
]

const CONCEPT_TIMELINE = [
  {
    phase: "Ideación",
    description: "Brainstorming creativo de conceptos",
    timeline: "Día 1",
  },
  {
    phase: "Research",
    description: "Análisis de datos y tendencias de mercado",
    timeline: "Día 1-2",
  },
  {
    phase: "Diseño",
    description: "Creación de paletas y guiones narrativos",
    timeline: "Día 2",
  },
  {
    phase: "Producción",
    description: "Generación de activos con IA",
    timeline: "Día 3-4",
  },
  {
    phase: "Edición",
    description: "Postproducción y refinamiento",
    timeline: "Día 5",
  },
  {
    phase: "Entrega",
    description: "Versiones finales en múltiples formatos",
    timeline: "Día 5",
  },
]

export default function ProposalsPage() {
  const router = useRouter()
  const [selectedProposal, setSelectedProposal] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <TimelineProgress steps={TIMELINE_STEPS} currentStep={5} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
            Fase 6: Propuestas Finales
          </h1>
          <p className="text-xl text-foreground/70">Tres versiones creativas con diferentes enfoques estratégicos</p>
        </div>

        {/* Proposal Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PROPOSALS.map((proposal, index) => (
            <button
              key={proposal.id}
              onClick={() => setSelectedProposal(index)}
              className={`text-left p-6 rounded-xl transition-all border-2 ${
                selectedProposal === index
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                {proposal.title}
              </h3>
              <p className="text-sm text-foreground/70 mb-4">{proposal.description}</p>

              {/* Color Palette Preview */}
              <div className="flex gap-2">
                {proposal.colors.map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-lg border border-border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Proposal Details */}
        <div className="bg-card border-2 border-primary rounded-2xl p-10 mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "Poppins" }}>
              {PROPOSALS[selectedProposal].title}
            </h2>
            <p className="text-lg text-foreground/70">{PROPOSALS[selectedProposal].description}</p>
          </div>

          {/* Conceptos Clave */}
          <div className="mb-8">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb size={20} className="text-secondary" />
              Conceptos Clave
            </h3>
            <div className="flex flex-wrap gap-3">
              {PROPOSALS[selectedProposal].concepts.map((concept) => (
                <span key={concept} className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Paleta de Colores */}
          <div className="mb-8">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Palette size={20} className="text-primary" />
              Paleta de Colores
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {PROPOSALS[selectedProposal].colors.map((color, idx) => (
                <div key={color} className="text-center">
                  <div
                    className="w-full h-32 rounded-lg mb-3 border-2 border-border"
                    style={{ backgroundColor: color }}
                  ></div>
                  <code className="text-sm font-mono text-foreground/70">{color}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Escenas Propuestas */}
          <div className="mb-8">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Film size={20} className="text-secondary" />
              Escenas Propuestas
            </h3>
            <div className="space-y-3">
              {PROPOSALS[selectedProposal].images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{idx + 1}</span>
                  </div>
                  <p className="text-foreground/80">{image}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              <Download size={18} />
              Descargar Propuesta
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all">
              <Share2 size={18} />
              Compartir
            </button>
          </div>
        </div>

        {/* Production Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "Poppins" }}>
            Línea de Tiempo de Producción
          </h2>

          {/* Timeline Visualization */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {CONCEPT_TIMELINE.map((item, index) => (
                  <div key={item.phase} className="text-center">
                    {/* Circle */}
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-white ${
                          index <= 5
                            ? "bg-gradient-to-r from-primary to-secondary border-primary"
                            : "bg-muted border-border"
                        }`}
                      >
                        <span className="text-lg">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-foreground mb-1">{item.phase}</h3>
                    <p className="text-xs text-foreground/60 mb-2">{item.description}</p>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.timeline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poppins" }}>
            Listo para Comenzar tu Proyecto
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Esta es solo una simulación. Contacta con nuestro equipo para discutir tus necesidades reales y recibir una
            propuesta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:shadow-lg transition-all">
              Solicitar Presupuesto
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Volver al Inicio
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 text-foreground font-semibold hover:text-primary transition-all"
          >
            <ArrowLeft size={18} />
            Volver atrás
          </button>
        </div>
      </div>
    </main>
  )
}

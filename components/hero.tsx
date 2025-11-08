"use client"

import Link from "next/link"
import { Clapperboard } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase">Innovación Audiovisual</p>
            <h1
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              Creatividad humana,
              <br />
              <span className="text-primary">potencia artificial</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              Producción audiovisual digital que combina inteligencia artificial con talento humano especializado para
              crear videos personalizados de alto impacto.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/demo"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-lg hover:scale-105 transition-all inline-block"
              >
                Comenzar Ahora
              </Link>
              <Link
                href="/portafolio"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all inline-block"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <Clapperboard size={80} className="mx-auto mb-4" />
              <p className="text-xl font-bold">Videos en Minutos</p>
              <p className="text-sm opacity-90">Guión • Storyboard • Producción</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-border">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
              85%
            </p>
            <p className="text-sm text-foreground/70">Empresas aumentarán inversión en video 2025</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary" style={{ fontFamily: "Poppins" }}>
              2.6x
            </p>
            <p className="text-sm text-foreground/70">Mayor engagement con video</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
              70%
            </p>
            <p className="text-sm text-foreground/70">Creadores enfrentan falta de recursos</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-secondary" style={{ fontFamily: "Poppins" }}>
              456B
            </p>
            <p className="text-sm text-foreground/70">USD en video ads globales 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { BarChart3, PieChart, TrendingUp } from "lucide-react"

export default function MarketAnalysis() {
  return (
    <section id="market" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Análisis de Mercado</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Oportunidad de mercado en Latinoamérica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all">
            <BarChart3 size={32} className="mb-4" />
            <p className="text-sm uppercase tracking-widest font-semibold opacity-90">TAM (Total Addressable Market)</p>
            <p className="text-4xl font-bold mt-2" style={{ fontFamily: "Poppins" }}>
              $155B
            </p>
            <p className="text-sm mt-2 opacity-90">Mercado global de marketing en video digital</p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all">
            <PieChart size={32} className="mb-4" />
            <p className="text-sm uppercase tracking-widest font-semibold opacity-90">
              SAM (Serviceable Available Market)
            </p>
            <p className="text-4xl font-bold mt-2" style={{ fontFamily: "Poppins" }}>
              $15B
            </p>
            <p className="text-sm mt-2 opacity-90">Mercado latinoamericano (10% del TAM)</p>
          </div>

          <div className="bg-gradient-to-br from-primary/80 to-primary rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all">
            <TrendingUp size={32} className="mb-4" />
            <p className="text-sm uppercase tracking-widest font-semibold opacity-90">
              SOM (Serviceable Obtainable Market)
            </p>
            <p className="text-4xl font-bold mt-2" style={{ fontFamily: "Poppins" }}>
              $75M
            </p>
            <p className="text-sm mt-2 opacity-90">Objetivo inicial en Perú, Chile, México</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
              Ámbito Geográfico
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-foreground">Latinoamérica como región objetivo</p>
                  <p className="text-foreground/70">Con enfoque inicial en Perú, Chile y México</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-foreground">Crecimiento acelerado del marketing digital</p>
                  <p className="text-foreground/70">Adopción de IA creativa en aumento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
              Ventaja Competitiva
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-foreground">vs. IA Pura (Runway, Synthesia)</p>
                  <p className="text-foreground/70">Añadimos dirección creativa profesional</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-foreground">vs. Agencias Tradicionales</p>
                  <p className="text-foreground/70">Más rápido, económico y escalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Film, Sparkles, TrendingUp } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Video Conceptual",
    description: "Desarrollo de idea, guion y storyboard, integrando elementos visuales generados con IA.",
    icon: Sparkles,
    color: "bg-primary",
    features: ["Guión Original", "Storyboard IA", "Elementos Visuales"],
  },
  {
    id: 2,
    title: "Producción Completa",
    description: "Video final con edición, montaje y acabados profesionales, incorporando recursos visuales con IA.",
    icon: Film,
    color: "bg-secondary",
    features: ["Edición Profesional", "Montaje IA", "Postproducción"],
  },
  {
    id: 3,
    title: "Campañas Audiovisuales",
    description: "Series de videos orientadas a objetivos estratégicos, adaptadas a plataformas digitales.",
    icon: TrendingUp,
    color: "bg-primary",
    features: ["Estrategia Integral", "Multiformato", "Optimización Digital"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Nuestros Servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Tres líneas de servicio adaptadas a tus necesidades
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Desde conceptos innovadores hasta campañas completas, NHYPE ofrece soluciones audiovisuales escalables y
            personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`${service.color} p-8 text-white flex items-center justify-center h-32 group-hover:shadow-lg transition-all`}
                >
                  <Icon size={48} />
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>

                  <div className="pt-6 space-y-2 border-t border-border">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all">
                    Conocer más
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Users, Briefcase, Zap, Building2 } from "lucide-react"

const segments = [
  {
    icon: Zap,
    title: "Emprendedores / PYMEs",
    need: "Promocionar productos o servicios en redes",
    solution: "Videos rápidos, económicos y personalizados",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Agencias de Marketing",
    need: "Escalar producción sin contratar más staff",
    solution: "Servicio de outsourcing con IA + revisión humana",
    color: "bg-secondary",
  },
  {
    icon: Briefcase,
    title: "Creadores de Contenido",
    need: "Crear contenido frecuente y visualmente atractivo",
    solution: "Plantillas IA adaptadas a su estilo",
    color: "bg-primary",
  },
  {
    icon: Building2,
    title: "Corporaciones / Educación",
    need: "Videos institucionales y formativos",
    solution: "Producción profesional optimizada por IA",
    color: "bg-secondary",
  },
]

export default function ClientSegments() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Segmentos de Clientes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Cuatro segmentos de mercado principales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div
                  className={`${segment.color} p-6 text-white flex items-center justify-center h-20 group-hover:scale-105 transition-transform`}
                >
                  <Icon size={40} />
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {segment.title}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">Necesidad</p>
                      <p className="text-foreground/80">{segment.need}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                        Solución NHYPE
                      </p>
                      <p className="text-foreground/80">{segment.solution}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-opacity-90 transition-all text-sm">
                    Solicitar Demo
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

"use client"

import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, BarChart3 } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    company: "TechStart Innovations",
    industry: "SaaS",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    challenge: "Necesitaban generar contenido promocional para su lanzamiento sin presupuesto para agencia tradicional",
    solution: "Creamos una campaña de 3 videos con NHYPE en 2 semanas",
    results: [
      { metric: "45.2K", label: "Vistas en 30 días" },
      { metric: "+340%", label: "Aumento en conversiones" },
      { metric: "$12K", label: "En ingresos generados" },
    ],
    testimonial:
      "NHYPE nos permitió lanzar nuestra campaña en tiempo récord sin sacrificar calidad. El equipo fue muy profesional.",
    author: "CEO, TechStart Innovations",
  },
  {
    id: 2,
    company: "EcoWear Fashion",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1579268231707-52733149ef71?w=800&h=500&fit=crop",
    challenge: "Necesitaban contenido consistente para redes sociales pero no tenían equipo creativo interno",
    solution: "Implementamos un modelo de suscripción mensual con 4 videos optimizados por plataforma",
    results: [
      { metric: "120%", label: "Aumento en engagement" },
      { metric: "2.5M", label: "Alcance mensual" },
      { metric: "18%", label: "ROI en ads" },
    ],
    testimonial: "Con NHYPE, nuestra marca está siempre presente en redes sin consumir recursos internos.",
    author: "Marketing Manager, EcoWear",
  },
  {
    id: 3,
    company: "FoodHub Delivery",
    industry: "Alimentos",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=500&fit=crop",
    challenge: "Competencia feroz en redes, necesitaban destacar con contenido visual de alta calidad",
    solution: "Producción completa con edición profesional, efectos IA y optimización multiformato",
    results: [
      { metric: "78.5K", label: "Vistas promedio por video" },
      { metric: "3.2%", label: "CTR mejorado" },
      { metric: "+250%", label: "Pedidos nuevos" },
    ],
    testimonial: "Los videos de NHYPE convirtieron nuestras redes en un canal de ventas real.",
    author: "Director Digital, FoodHub",
  },
]

export default function CasosExito() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-6 w-fit">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
            Casos de Éxito
          </h1>
          <p className="text-lg text-white/90">Descubre cómo NHYPE transformó los resultados de nuestros clientes</p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative h-80 rounded-2xl overflow-hidden border border-border ${index % 2 === 1 ? "md:col-start-2" : ""}`}
              >
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div>
                  <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
                    {study.industry}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
                    {study.company}
                  </h2>
                </div>

                <div className="space-y-4 border-l-2 border-primary pl-4">
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">Desafío</p>
                    <p className="text-foreground/80">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">Solución</p>
                    <p className="text-foreground/80">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 py-6 bg-muted rounded-xl p-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                        {result.metric}
                      </p>
                      <p className="text-xs text-foreground/60 mt-1">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <p className="text-foreground/80 italic">"{study.testimonial}"</p>
                  <p className="text-sm font-semibold text-foreground">{study.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "Poppins" }}>
            Impacto Global de NHYPE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-3">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                50+
              </p>
              <p className="text-foreground/70">Clientes Satisfechos</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-3">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto" />
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                320%
              </p>
              <p className="text-foreground/70">ROI Promedio</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-3">
              <BarChart3 className="w-12 h-12 text-primary mx-auto" />
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                12M+
              </p>
              <p className="text-foreground/70">Visualizaciones Totales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-lg text-white/90 mb-8">Descubre cómo NHYPE puede llevar tu negocio al siguiente nivel</p>
          <Link
            href="/demo"
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all inline-block"
          >
            Solicitar Demo Gratis
          </Link>
        </div>
      </section>
    </main>
  )
}

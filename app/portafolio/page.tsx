"use client"

import Link from "next/link"
import { ArrowLeft, Eye, Heart } from "lucide-react"

const portfolioProjects = [
  {
    id: 1,
    title: "TechStart Innovations - Campaña de Lanzamiento",
    category: "Campaña Audiovisual",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    views: "45.2K",
    likes: "1.2K",
    description: "Serie de 3 videos para el lanzamiento de plataforma SaaS",
  },
  {
    id: 2,
    title: "EcoWear - Identidad Visual en Video",
    category: "Video Conceptual",
    image: "https://images.unsplash.com/photo-1579268231707-52733149ef71?w=600&h=400&fit=crop",
    views: "32.8K",
    likes: "890",
    description: "Video institucional con elementos visuales generados con IA",
  },
  {
    id: 3,
    title: "FoodHub - Producción Completa",
    category: "Producción Completa",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
    views: "78.5K",
    likes: "2.1K",
    description: "Video promocional con edición profesional y efectos IA",
  },
  {
    id: 4,
    title: "CreativeFlow - Campaña de Redes",
    category: "Campaña Audiovisual",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    views: "156.3K",
    likes: "4.5K",
    description: "Multiformato optimizado para TikTok, Instagram y YouTube",
  },
  {
    id: 5,
    title: "HealthPlus - Educación Digital",
    category: "Video Conceptual",
    image: "https://images.unsplash.com/photo-1576091160550-112173e7f7ed?w=600&h=400&fit=crop",
    views: "89.2K",
    likes: "3.2K",
    description: "Serie educativa sobre bienestar con narración IA",
  },
  {
    id: 6,
    title: "DesignStudio - Showreel Corporativo",
    category: "Producción Completa",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    views: "123.4K",
    likes: "5.6K",
    description: "Portafolio visual interactivo con efectos dinámicos",
  },
]

export default function Portfolio() {
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
            Nuestro Portafolio
          </h1>
          <p className="text-lg text-white/90">Explora 50+ proyectos audiovisuales que hemos realizado</p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{project.description}</p>

                  {/* Stats */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-foreground/60">
                      <Eye size={16} />
                      <span className="text-xs">{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-foreground/60">
                      <Heart size={16} />
                      <span className="text-xs">{project.likes}</span>
                    </div>
                  </div>

                  <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-opacity-90 transition-all text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Poppins" }}>
            ¿Tu proyecto podría ser el próximo?
          </h2>
          <p className="text-lg text-white/90 mb-8">Contáctanos para conocer cómo NHYPE puede transformar tu visión</p>
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

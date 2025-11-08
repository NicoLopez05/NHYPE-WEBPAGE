"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Poppins" }}
          >
            ¿Listo para transformar tu contenido?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Comenzamos con un análisis gratuito de tus necesidades audiovisuales y te presentamos una propuesta
            personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all text-lg inline-block text-center"
            >
              Solicitar Demo Gratis
            </Link>

            <Link
              href="/casos-exito"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all text-lg inline-block text-center"
            >
              Ver Casos de Éxito
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-8">
            Respuesta en máximo 24 horas • Sin compromiso • Consulta confidencial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "Poppins" }}>
              12+
            </p>
            <p className="text-foreground/70">Proyectos completados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-secondary mb-2" style={{ fontFamily: "Poppins" }}>
              95%
            </p>
            <p className="text-foreground/70">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "Poppins" }}>
              24/7
            </p>
            <p className="text-foreground/70">Soporte disponible</p>
          </div>
        </div>
      </div>
    </section>
  )
}

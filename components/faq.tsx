"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo funciona el proceso de producción?",
    answer:
      "Comenzamos con un brief detallado, luego nuestro equipo desarrolla guión y storyboard. Utilizamos IA para generar elementos visuales que un equipo profesional edita y perfecciona, entregando videos en 7-14 días.",
  },
  {
    question: "¿Qué diferencia hay entre NHYPE y otras plataformas de IA?",
    answer:
      "La diferencia clave es que NHYPE combina creatividad humana profesional con IA. Mientras que herramientas como Runway o Synthesia usan solo IA, nosotros añadimos dirección creativa, guiones profesionales y edición experta.",
  },
  {
    question: "¿Puedo editar los videos después de entregarlos?",
    answer:
      "Sí. Ofrecemos edición simple (colores, logos, textos, CTA) para ajustes finos. También proporcionamos archivos en múltiples formatos (9:16, 1:1, 16:9) listos para cualquier plataforma.",
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer:
      "Los tiempos típicos son 7-14 días según la complejidad. Esto es 50% más rápido que agencias tradicionales. Ofrecemos revisiones sin costo adicional hasta alcanzar la perfección.",
  },
  {
    question: "¿Qué pasa con los derechos de autor y licencias?",
    answer:
      "NHYPE garantiza cumplimiento de políticas de anuncios y derechos de uso. Toda música, voces e imágenes cuentan con licencias apropiadas. Tú tienes derechos totales sobre el contenido producido.",
  },
  {
    question: "¿Ofrecen análisis de desempeño?",
    answer:
      "Sí. Entregamos reportes de desempeño con métricas de CTR, VTR, CPA y ROAS. Estos datos nos permiten aprender qué creatividad funciona mejor y optimizar futuras campañas automáticamente.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Preguntas Frecuentes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
            Resuelve tus dudas
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-foreground pr-4" style={{ fontFamily: "Poppins" }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && <p className="text-foreground/70 mt-4 leading-relaxed">{faq.answer}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

const steps = [
  {
    number: "01",
    title: "Brief & Estrategia",
    description: "Análisis de tu marca, objetivo y audiencia para definir la dirección creativa perfecta.",
  },
  {
    number: "02",
    title: "Guión & Storyboard",
    description: "Nuestro equipo de guionistas desarrolla narrativas impactantes con apoyo visual de IA.",
  },
  {
    number: "03",
    title: "Generación IA",
    description: "Creamos elementos visuales, avatares y escenarios innovadores con tecnología de IA.",
  },
  {
    number: "04",
    title: "Edición Profesional",
    description: "Montaje, color grading y efectos finales realizados por editores especializados.",
  },
  {
    number: "05",
    title: "Optimización",
    description: "Adaptación a múltiples formatos (9:16, 1:1, 16:9) para cada plataforma digital.",
  },
  {
    number: "06",
    title: "Entrega & Análisis",
    description: "Videos listos + reportes de desempeño para optimizar futuras campañas.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Nuestro Proceso</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            De la idea al video final en 6 pasos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                7-14
              </p>
              <p className="text-foreground/70">Días de entrega típica</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary" style={{ fontFamily: "Poppins" }}>
                50%
              </p>
              <p className="text-foreground/70">Más rápido que agencias tradicionales</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                ∞
              </p>
              <p className="text-foreground/70">Revisiones sin costo adicional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

const pillars = [
  {
    title: "Propuesta de Valor",
    items: ["Creatividad humana profesional", "Apoyo tecnológico mediante IA", "Resultados personalizados"],
  },
  {
    title: "Canales de Distribución",
    items: [
      "Página web oficial con portafolio",
      "Redes sociales para captación",
      "Alianzas estratégicas con agencias",
      "Campañas digitales Meta & Google Ads",
    ],
  },
  {
    title: "Fuentes de Ingresos",
    items: [
      "Venta directa por proyecto",
      "Paquetes/suscripciones mensuales",
      "Campañas audiovisuales completas",
      "Servicios complementarios",
    ],
  },
  {
    title: "Recursos Clave",
    items: [
      "Equipo creativo especializado",
      "Herramientas IA visuales",
      "Software de edición profesional",
      "Plataforma de gestión de proyectos",
    ],
  },
  {
    title: "Actividades Clave",
    items: [
      "Desarrollo de ideas y guiones",
      "Creación de recursos visuales con IA",
      "Edición y postproducción",
      "Estrategia de difusión digital",
    ],
  },
  {
    title: "Socios Clave",
    items: [
      "Plataformas IA y software",
      "Freelancers creativos",
      "Incubadoras e instituciones educativas",
      "Agencias colaboradoras",
    ],
  },
]

export default function BusinessModel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Modelo de Negocio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
            Canvas de Modelo de Negocio
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Estructura completa del ecosistema NHYPE basada en creatividad + tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "Poppins" }}>
                {pillar.title}
              </h3>

              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
                Relación con Clientes
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Comunicación personalizada en todas las etapas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Asesoría creativa continua
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Entregas de avances y revisiones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Postventa y seguimiento recurrente
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Poppins" }}>
                Estructura de Costos
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Licencias de software y herramientas IA
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Honorarios del equipo creativo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Gastos operativos y marketing digital
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Mantenimiento de plataforma web
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

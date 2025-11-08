"use client"

import { Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: "Poppins" }}>
                NHYPE
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Producción audiovisual digital que potencia tu creatividad con inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Video Conceptual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Producción Completa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Campañas Audiovisuales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
              Empresa
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">© 2025 NHYPE. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

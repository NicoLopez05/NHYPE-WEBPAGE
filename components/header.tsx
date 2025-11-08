"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Mercado", href: "#market" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              N
            </span>
          </div>
          <span className="font-bold text-xl text-foreground" style={{ fontFamily: "Poppins" }}>
            NHYPE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex gap-4">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-opacity-90 transition-all">
            Contactar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-opacity-90 transition-all">
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

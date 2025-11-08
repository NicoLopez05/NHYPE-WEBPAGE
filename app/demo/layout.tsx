import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demo - NHYPE",
  description: "Simulación interactiva del flujo de producción audiovisual",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-background">{children}</div>
}

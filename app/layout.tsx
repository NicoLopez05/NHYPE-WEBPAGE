import type React from "react"
import type { Metadata } from "next"
import { Poppins, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
})
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "NHYPE - Creatividad humana, potencia artificial",
  description:
    "Producción audiovisual digital que combina inteligencia artificial con talento humano especializado para crear videos personalizados de alto impacto",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`} style={{ fontFamily: `${nunitoSans.style.fontFamily}, sans-serif` }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

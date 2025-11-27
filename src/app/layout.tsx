import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RealAIze Capital | Where Real Estate Meets Intelligence',
  description: 'Investment y Asset Management impulsados por inteligencia artificial. Inversión inmobiliaria inteligente en España.',
  keywords: 'inversión inmobiliaria, real estate, inteligencia artificial, AI, asset management, España',
  authors: [{ name: 'RealAIze Capital' }],
  openGraph: {
    title: 'RealAIze Capital | Where Real Estate Meets Intelligence',
    description: 'Investment y Asset Management impulsados por inteligencia artificial.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-realaize-cream text-realaize-navy antialiased">
        {children}
      </body>
    </html>
  )
}

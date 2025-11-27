'use client'

import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-realaize-navy border-t border-realaize-navy-light">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-realaize-gold font-semibold text-lg mb-2">
              Real<span className="text-realaize-gold-light">AI</span>ze Capital
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Calle de Zurbano 34, Madrid</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <a 
              href="mailto:hola@realaize.capital" 
              className="text-realaize-gold hover:text-realaize-gold-light transition-colors"
            >
              hola@realaize.capital
            </a>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} RealAIze Capital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

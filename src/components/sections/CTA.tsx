'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-realaize-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, transparent 0%, white 100%)`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg text-white mb-6">
            Únete a la inversión del{' '}
            <span className="text-realaize-gold">futuro</span>
          </h2>
          
          <p className="text-body text-gray-300 mb-10">
            Descubre cómo la inteligencia artificial está transformando 
            el sector inmobiliario. Solicita información sin compromiso.
          </p>

          <motion.a
            href="mailto:hola@realaize.capital"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar información
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <p className="text-gray-500 text-sm mt-8">
            hola@realaize.capital
          </p>
        </motion.div>
      </div>
    </section>
  )
}

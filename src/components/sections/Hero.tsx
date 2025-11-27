'use client'

import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-realaize-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo placeholder */}
          <div className="mb-8">
            <h1 className="text-realaize-gold text-2xl md:text-3xl font-semibold tracking-wider">
              Real<span className="text-realaize-gold-light">AI</span>ze Capital
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="heading-xl text-white mb-6">
            Where Real Estate Meets{' '}
            <span className="text-realaize-gold">Intelligence</span>
          </h2>

          {/* Subtitle */}
          <p className="text-body text-gray-300 max-w-2xl mx-auto mb-12">
            Investment y Asset Management impulsados por inteligencia artificial
          </p>

          {/* CTA */}
          <motion.a
            href="mailto:hola@realaize.capital"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar información
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-realaize-gold/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-1 h-2 bg-realaize-gold rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'motion/react'

const strategies = [
  { label: 'BTS', desc: 'Build to Sell' },
  { label: 'BTR', desc: 'Build to Rent' },
  { label: 'Alternative Living', desc: 'Coliving, Flex Living, Senior Living' },
  { label: 'Hospitality', desc: 'Hoteles, Hostels y otros alojamientos' },
]

export default function Strategy() {
  return (
    <section className="section-padding bg-realaize-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-realaize-navy mb-6">
            Estrategia de Inversión
          </h2>
          <p className="text-body text-realaize-navy/70 max-w-2xl mx-auto">
            Enfoque diversificado en activos inmobiliarios con alto potencial de revalorización 
            en el mercado español.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm text-center shadow-sm"
            >
              <p className="text-realaize-gold font-semibold text-lg mb-1">
                {strategy.label}
              </p>
              <p className="text-sm text-realaize-navy/60">
                {strategy.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

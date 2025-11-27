'use client'

import { motion } from 'motion/react'

const stats = [
  { value: '+575k', label: 'Compraventas anuales' },
  { value: '62%', label: 'Inversión internacional' },
  { value: '4-8%', label: 'Rentabilidades yield' },
]

export default function Market() {
  return (
    <section className="section-padding bg-realaize-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-realaize-navy mb-6">
              España como <span className="text-realaize-gold">Oportunidad</span>
            </h2>
            <p className="text-body text-realaize-navy/80 mb-8">
              El mercado inmobiliario español ofrece un contexto único para la inversión: 
              demanda sostenida, atractivo internacional y rentabilidades competitivas 
              en comparación con otros mercados europeos.
            </p>
            <p className="text-body-sm text-realaize-navy/60">
              Las ciudades secundarias ofrecen yields de hasta el 8%, mientras que 
              los mercados prime mantienen la estabilidad y liquidez que buscan 
              los inversores institucionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-sm shadow-sm border border-realaize-sand"
              >
                <p className="text-3xl md:text-4xl font-semibold text-realaize-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-realaize-navy/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

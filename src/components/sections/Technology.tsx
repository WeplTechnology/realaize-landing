'use client'

import { motion } from 'motion/react'
import { Brain, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'IA Predictiva',
    description: 'Análisis de mercado con modelos de machine learning para identificar las mejores oportunidades de inversión.',
  },
  {
    icon: Users,
    title: 'Captación Inteligente',
    description: 'Sistema de Smart CRM que optimiza la relación con propietarios, inquilinos e inversores.',
  },
  {
    icon: BarChart3,
    title: 'Gestión Automatizada',
    description: 'Reporting en tiempo real y automatización de procesos para maximizar la eficiencia operativa.',
  },
]

export default function Technology() {
  return (
    <section className="section-padding bg-realaize-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-white mb-6">
            Tecnología <span className="text-realaize-gold">Propia</span>
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Estamos desarrollando una plataforma tecnológica que transforma
            la manera de invertir en el sector inmobiliario.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-realaize-gold/10 mb-6">
                <feature.icon className="w-8 h-8 text-realaize-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-body-sm text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

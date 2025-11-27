'use client'

import { motion } from 'motion/react'
import { Eye, Target, Zap, Lightbulb, Leaf, Gem } from 'lucide-react'

const principles = [
  { icon: Eye, title: 'Transparencia', desc: 'Comunicación clara y reporting continuo' },
  { icon: Target, title: 'Precisión', desc: 'Decisiones basadas en datos objetivos' },
  { icon: Zap, title: 'Eficiencia', desc: 'Optimización de procesos y recursos' },
  { icon: Lightbulb, title: 'Innovación', desc: 'Tecnología al servicio de la inversión' },
  { icon: Leaf, title: 'Sostenibilidad', desc: 'Compromiso ESG en cada proyecto' },
  { icon: Gem, title: 'Exclusividad', desc: 'Acceso a oportunidades seleccionadas' },
]

export default function Principles() {
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
            Nuestros Principios
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Seis valores fundamentales que guían cada decisión de inversión.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-realaize-navy-light rounded-sm border border-realaize-gold/20 hover:border-realaize-gold/40 transition-colors"
            >
              <principle.icon className="w-8 h-8 text-realaize-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-400">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

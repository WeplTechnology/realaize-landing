'use client'

import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="section-padding bg-realaize-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg text-realaize-navy mb-8">
            ¿Qué es RealAIze Capital?
          </h2>
          <p className="text-body text-realaize-navy/80 mb-12">
            RealAIze Capital es un vehículo de inversión inmobiliaria que combina la experiencia 
            de un equipo multidisciplinar con tecnología de inteligencia artificial propietaria. 
            Nuestro enfoque data-driven nos permite identificar oportunidades, optimizar la gestión 
            de activos y maximizar el retorno para nuestros inversores.
          </p>
        </motion.div>

        {/* Purpose, Mission, Vision */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Propósito',
              text: 'Democratizar el acceso a inversiones inmobiliarias de alta calidad mediante tecnología avanzada.',
            },
            {
              title: 'Misión',
              text: 'Generar valor sostenible para inversores y comunidades a través de decisiones basadas en datos.',
            },
            {
              title: 'Visión',
              text: 'Ser el referente en inversión inmobiliaria inteligente en el mercado español y europeo.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-realaize-sand"
            >
              <h3 className="text-realaize-gold font-semibold text-lg mb-4 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-body-sm text-realaize-navy/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

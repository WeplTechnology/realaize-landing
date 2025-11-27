'use client'

import { motion } from 'motion/react'
import { Leaf, Award, TrendingDown } from 'lucide-react'

export default function ESG() {
  return (
    <section className="section-padding bg-realaize-sand">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Compromiso ESG
          </div>
          
          <h2 className="heading-lg text-realaize-navy mb-6">
            Inversión Responsable
          </h2>
          
          <p className="text-body text-realaize-navy/70 mb-12">
            Integramos criterios ambientales, sociales y de gobernanza en cada decisión 
            de inversión. Nuestros proyectos buscan certificaciones BREEAM y LEED, 
            priorizando la eficiencia energética y la reducción de emisiones CO₂.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <TrendingDown className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="font-semibold text-realaize-navy">Reducción CO₂</p>
              <p className="text-sm text-realaize-navy/60 mt-1">Eficiencia energética</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="font-semibold text-realaize-navy">Certificaciones</p>
              <p className="text-sm text-realaize-navy/60 mt-1">BREEAM / LEED</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <Leaf className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="font-semibold text-realaize-navy">CAPEX Verde</p>
              <p className="text-sm text-realaize-navy/60 mt-1">Inversión sostenible</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

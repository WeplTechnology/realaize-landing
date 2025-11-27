import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Technology from '@/components/sections/Technology'
import Strategy from '@/components/sections/Strategy'
import Principles from '@/components/sections/Principles'
import Market from '@/components/sections/Market'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Technology />
      <Strategy />
      <Principles />
      <Market />
      <CTA />
      <Footer />
    </main>
  )
}

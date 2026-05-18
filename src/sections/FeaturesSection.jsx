import { motion } from 'framer-motion'
import { Handshake, Rocket, Sparkles } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { features } from '../data/siteData'
import useReveal from '../hooks/useReveal'

const icons = [Rocket, Sparkles, Handshake]

function FeaturesSection() {
  return (
    <section id="features" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Why Join" title="Designed for Outcomes, Not Just Learning" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i]
            const reveal = useReveal(i * 0.08)
            return (
              <motion.article key={feature.title} {...reveal} className="rounded-2xl border border-white/10 bg-surface p-6 shadow-glow">
                <Icon className="text-accent" size={24} />
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection

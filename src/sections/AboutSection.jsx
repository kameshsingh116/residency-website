import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import aboutVisual from '../assets/illustrations/about-visual.svg'

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="A Curated Ecosystem for High-Intent Builders" description="This residency blends product execution, deep mentorship, and hiring pathways in one performance-focused journey." />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <img src={aboutVisual} alt="Residency workflow visual" className="w-full rounded-3xl border border-white/10 shadow-glow" />
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutSection

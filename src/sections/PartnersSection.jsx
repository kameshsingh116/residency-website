import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { partners } from '../data/siteData'

function PartnersSection() {
  return (
    <section id="partners" className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading eyebrow="Partners" title="Trusted by Communities and Innovation Programs" />
        <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#061a2a] py-5">
          <motion.div
            className="flex w-max gap-4 px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={`${partner}-${i}`} className="rounded-xl border border-cyan-200/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100">
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default PartnersSection

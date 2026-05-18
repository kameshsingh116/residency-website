import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { mentors } from '../data/siteData'
import mentorVisual from '../assets/illustrations/mentor-visual.svg'

function MentorshipSection() {
  return (
    <section id="mentorship" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Mentorship" title="Guided by Experts Who Build at Scale" />
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.img
            src={mentorVisual}
            alt="Mentorship session visual"
            className="w-full rounded-2xl border border-white/10 shadow-glow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          />
          <div className="grid gap-5">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Users size={20} className="text-accent" />
                <h3 className="mt-4 text-lg font-bold">{mentor.name}</h3>
                <p className="text-sm text-accentSoft">{mentor.role}</p>
                <p className="mt-1 text-sm text-slate-300">{mentor.org}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MentorshipSection

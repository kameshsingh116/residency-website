import { Users } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { mentors } from '../data/siteData'

function MentorshipSection() {
  return (
    <section id="mentorship" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Mentorship" title="Guided by Experts Who Build at Scale" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Users size={20} className="text-accent" />
              <h3 className="mt-4 text-lg font-bold">{mentor.name}</h3>
              <p className="text-sm text-accentSoft">{mentor.role}</p>
              <p className="mt-1 text-sm text-slate-300">{mentor.org}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MentorshipSection

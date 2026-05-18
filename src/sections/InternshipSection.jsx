import { BriefcaseBusiness } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { opportunities } from '../data/siteData'

function InternshipSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Internship Opportunities" title="Translate Residency Performance Into Career Momentum" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {opportunities.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-surface p-5">
              <BriefcaseBusiness className="text-accent" size={20} />
              <p className="mt-3 text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default InternshipSection

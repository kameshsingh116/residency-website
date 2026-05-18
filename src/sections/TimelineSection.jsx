import { CalendarClock } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/siteData'

function TimelineSection() {
  return (
    <section id="timeline" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Program Flow" title="From Application to Internship Outcomes" />
        <div className="mt-10 space-y-4">
          {timeline.map((step, index) => (
            <div key={step.phase} className="rounded-xl border border-white/10 bg-surface p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">Step {index + 1}</p>
              <h3 className="mt-2 flex items-center gap-2 text-lg font-bold"><CalendarClock size={18} className="text-accent" />{step.phase}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TimelineSection

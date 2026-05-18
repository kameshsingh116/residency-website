import { GraduationCap } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { tracks } from '../data/siteData'

function ResidencySection() {
  return (
    <section id="residency" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Residency Program" title="Choose Your Track and Build in Real-World Pods" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tracks.map((track) => (
            <div key={track} className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm sm:text-base">
              <div className="flex items-center gap-3"><GraduationCap size={18} className="text-accent" />{track}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ResidencySection

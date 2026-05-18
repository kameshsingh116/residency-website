import { features, mentors, navLinks, opportunities, timeline, tracks } from '../data/siteData'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, CalendarClock, GraduationCap, Handshake, Menu, Rocket, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-sm font-bold uppercase tracking-[0.25em] text-accentSoft">Residency</a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-accent">{link.label}</a>)}
          <a href="#cta" className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-slate-950">Apply Now</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </Container>
      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => <a onClick={() => setOpen(false)} key={link.href} href={link.href} className="text-sm text-slate-200">{link.label}</a>)}
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="A Curated Ecosystem for High-Intent Builders" description="This residency blends product execution, deep mentorship, and hiring pathways in one performance-focused journey." />
      </Container>
    </section>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Why Join" title="Designed for Outcomes, Not Just Learning" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[Rocket, Sparkles, Handshake].map((Icon, i) => (
            <motion.article key={features[i].title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="rounded-2xl border border-white/10 bg-surface p-6 shadow-glow">
              <Icon className="text-accent" size={24} />
              <h3 className="mt-5 text-lg font-bold">{features[i].title}</h3>
              <p className="mt-3 text-sm text-slate-300">{features[i].description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ResidencySection() {
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

export function TimelineSection() {
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

export function MentorshipSection() {
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

export function InternshipSection() {
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

export function CtaSection() {
  return (
    <section id="cta" className="pb-20 sm:pb-24">
      <Container>
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-sky-300/10 to-cyan-500/5 p-8 text-center shadow-glow sm:p-12">
          <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold">Ready to Join the Next Residency Cohort?</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">Applications are reviewed on a rolling basis. Build boldly, learn rapidly, and ship with purpose.</p>
          <a href="#" className="mt-7 inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-bold text-slate-950">Start Application</a>
        </div>
      </Container>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row sm:items-center">
        <p>© 2026 Residency Program. Built for ambitious builders.</p>
        <p className="inline-flex items-center gap-1"><Handshake size={14} /> Powered by community, mentorship, and outcomes.</p>
      </Container>
    </footer>
  )
}

import { motion } from 'framer-motion'
import Container from '../components/Container'
import { heroStats } from '../data/siteData'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-grid pb-16 pt-28 sm:pb-24 sm:pt-32">
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">
            HackNITR 7.0 Inspired Residency
          </p>
          <h1 className="text-balance text-[clamp(2rem,7vw,5rem)] font-extrabold leading-[1.05]">
            Build Startup-Grade Skills Through a <span className="text-accent">Premium Residency Experience</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300 sm:text-lg">
            A modern hands-on ecosystem for ambitious builders to learn, ship, and earn internship opportunities.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#residency" className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-accentSoft">Explore Residency</a>
            <a href="#timeline" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">View Timeline</a>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-surface/75 p-5 text-center shadow-glow">
              <p className="text-3xl font-extrabold text-accent">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HeroSection

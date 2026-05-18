import { motion } from 'framer-motion'
import Container from '../components/Container'
import { heroStats } from '../data/siteData'
import heroVisual from '../assets/illustrations/hero-visual.svg'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-grid pb-16 pt-28 sm:pb-24 sm:pt-32">
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">
              HackNITR 7.0 Inspired Residency
            </p>
            <h1 className="text-balance text-[clamp(2rem,6vw,4.8rem)] font-extrabold leading-[1.05]">
              Build Startup-Grade Skills Through a <span className="text-accent">Premium Residency Experience</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-lg">
              A modern hands-on ecosystem for ambitious builders to learn, ship, and earn internship opportunities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#residency" className="rounded-xl bg-accent px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-accentSoft">Explore Residency</a>
              <a href="#timeline" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold transition hover:bg-white/10">View Timeline</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.img
              src={heroVisual}
              alt="Program dashboard visual"
              className="w-full rounded-3xl border border-white/10 shadow-glow"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -left-4 top-8 rounded-xl border border-white/10 bg-surface/90 p-3 text-xs text-slate-200 shadow-glow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Live Mentor Feedback
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-8 rounded-xl border border-white/10 bg-surface/90 p-3 text-xs text-slate-200 shadow-glow"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Portfolio + Internship Track
            </motion.div>
          </motion.div>
        </div>

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

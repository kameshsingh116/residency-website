import Container from '../components/Container'

function CtaSection() {
  return (
    <section id="cta" className="pb-20 sm:pb-24">
      <Container>
        <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/15 via-sky-300/15 to-cyan-500/10 p-8 text-center shadow-glow backdrop-blur-sm sm:p-12">
          <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-white">Ready to Join the Next Residency Cohort?</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-100 sm:text-base">Applications are reviewed on a rolling basis. Build boldly, learn rapidly, and ship with purpose.</p>
          <a href="#" className="mt-7 inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-bold text-slate-950">Start Application</a>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection

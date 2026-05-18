import { ExternalLink } from 'lucide-react'
import Container from '../components/Container'

function ApplySection() {
  return (
    <section id="apply" className="pb-20 sm:pb-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-surface/85 p-8 shadow-glow sm:p-10">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Application & Contact</h3>
          <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">All official social links are active below.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="https://www.linkedin.com/company/lenient-tree/posts/?feedView=all" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10">LinkedIn Page <ExternalLink size={14} className="ml-1 inline" /></a>
            <a href="https://www.instagram.com/lenient_tree" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10">Instagram Page <ExternalLink size={14} className="ml-1 inline" /></a>
            <a href="https://x.com/lenienttree" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10">X (Twitter) Page <ExternalLink size={14} className="ml-1 inline" /></a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ApplySection

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Container from '../components/Container'
import { navLinks } from '../data/siteData'

function Navbar() {
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

export default Navbar

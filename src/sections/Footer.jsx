import { Handshake } from 'lucide-react'
import Container from '../components/Container'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row sm:items-center">
        <p>© 2026 Residency Program. Built for ambitious builders.</p>
        <p className="inline-flex items-center gap-1"><Handshake size={14} /> Powered by community, mentorship, and outcomes.</p>
      </Container>
    </footer>
  )
}

export default Footer

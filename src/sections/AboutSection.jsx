import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="A Curated Ecosystem for High-Intent Builders" description="This residency blends product execution, deep mentorship, and hiring pathways in one performance-focused journey." />
      </Container>
    </section>
  )
}

export default AboutSection

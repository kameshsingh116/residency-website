import HeroSection from '../sections/HeroSection'
import { AboutSection, CtaSection, FeaturesSection, Footer, InternshipSection, MentorshipSection, Navbar, ResidencySection, TimelineSection } from '../sections/Sections'

function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ResidencySection />
        <TimelineSection />
        <MentorshipSection />
        <InternshipSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

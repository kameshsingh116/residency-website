import MainLayout from '../layouts/MainLayout'
import AboutSection from '../sections/AboutSection'
import CommunityGallerySection from '../sections/CommunityGallerySection'
import CtaSection from '../sections/CtaSection'
import FeaturesSection from '../sections/FeaturesSection'
import Footer from '../sections/Footer'
import HeroSection from '../sections/HeroSection'
import InternshipSection from '../sections/InternshipSection'
import MentorshipSection from '../sections/MentorshipSection'
import Navbar from '../sections/Navbar'
import ResidencySection from '../sections/ResidencySection'
import TimelineSection from '../sections/TimelineSection'

function HomePage() {
  return (
    <MainLayout>
      <Navbar />
      <main>
        <HeroSection />
        <CommunityGallerySection />
        <AboutSection />
        <FeaturesSection />
        <ResidencySection />
        <TimelineSection />
        <MentorshipSection />
        <InternshipSection />
        <CtaSection />
      </main>
      <Footer />
    </MainLayout>
  )
}

export default HomePage

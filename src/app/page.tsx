import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { PromoBanner } from '@/components/sections/PromoBanner'
import { VideoSection } from '@/components/sections/VideoSection'
import { GymPhotoBackground } from '@/components/ui/GymPhotoBackground'

export default function Home() {
  return (
    <>
      {/* Gym photo background with smoke — fixed, visible through all sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GymPhotoBackground />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <PromoBanner />
          <AboutSection />
          <VideoSection />
          <ProgramsSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  )
}

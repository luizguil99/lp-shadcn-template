import { Navbar } from './components/ui/navbar'
import { HeroSection } from './components/ui/hero-section'
import { FeatureSection } from './components/ui/feature-section'
import { TestimonialSection } from './components/ui/testimonial-section'
import { CTASection } from './components/ui/cta-section'
import { Footer } from './components/ui/footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App

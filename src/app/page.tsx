import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { Approach } from '@/components/sections/Approach'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <Approach />
      <Testimonials />
      <CTASection />
    </main>
  )
}

import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { Methodology } from '@/components/sections/Methodology'
import { IdeaTalk } from '@/components/sections/IdeaTalk'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <Methodology />
      <IdeaTalk />
    </main>
  )
}

import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { Approach } from '@/components/sections/Approach'
import { IdeaTalk } from '@/components/sections/IdeaTalk'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <Approach />
      <IdeaTalk />
    </main>
  )
}

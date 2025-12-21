import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { Methodology } from '@/components/sections/Methodology'
import { Methodology_Sticky } from '@/components/sections/Methodology_Sticky'
import { Methodology_Bento } from '@/components/sections/Methodology_Bento'
import { Methodology_Cards } from '@/components/sections/Methodology_Cards'
import { Methodology_Concrete } from '@/components/sections/Methodology_Concrete'
import { IdeaTalk } from '@/components/sections/IdeaTalk'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      
      {/* 
        Scegli la variante che preferisci de-commentandola:
        1. Methodology (Originale)
        2. Methodology_Sticky (Storytelling verticale)
        3. Methodology_Bento (Griglia tech moderna)
        4. Methodology_Cards (Classica pulita)
        5. Methodology_Concrete (Visual UI Reali) - ATTIVA
      */}
      
      {/* <Methodology /> */}
      {/* <Methodology_Sticky /> */}
      {/* <Methodology_Bento /> */}
      {/* <Methodology_Cards /> */}
      <Methodology_Concrete />

      <IdeaTalk />
    </main>
  )
}

'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { GlitchText } from '@/components/ui/GlitchText'
import { Workflow, GitMerge, Cpu } from 'lucide-react'

export function MethodologyHero() {
  return (
    <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Cyan Blob (Sintonia/Discovery) */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] opacity-40 pointer-events-none mix-blend-screen" />
        
        {/* Violet Blob (Fusione/Build) */}
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[128px] opacity-40 pointer-events-none mix-blend-screen" />
        
        {/* Orange/Primary Blob (Evoluzione/Growth) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border backdrop-blur-md text-xs font-mono text-cyan-400 mb-8 animate-pulse">
              <Workflow className="w-4 h-4" />
              <span>OPERATING PROTOCOLS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
              Dal Caos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-primary bg-300% animate-gradient">
                All&apos;Ordine
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              Non scriviamo solo codice. Costruiamo <GlitchText variant="subtle" trigger="hover" className="text-text-primary font-medium">sistemi evolutivi</GlitchText>. 
              Il nostro metodo fonde rigore ingegneristico e creatività aumentata dall&apos;AI per azzerare l&apos;incertezza.
            </div>

            {/* Stats / Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
               <div className="px-6 py-3 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Cpu className="w-5 h-5" />
                 </div>
                 <div className="text-left">
                    <div className="text-sm font-bold text-text-primary">AI-First</div>
                    <div className="text-xs text-text-secondary">Approach</div>
                 </div>
               </div>
               
               <div className="px-6 py-3 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
                    <GitMerge className="w-5 h-5" />
                 </div>
                 <div className="text-left">
                    <div className="text-sm font-bold text-text-primary">Agile</div>
                    <div className="text-xs text-text-secondary">Workflow</div>
                 </div>
               </div>
            </div>

          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

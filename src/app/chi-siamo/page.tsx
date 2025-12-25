import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/animations'
import { client } from '@/lib/sanity'
import { TeamMember } from '@/types/sanity'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CompanyHistory } from '@/components/sections/CompanyHistory'
import { CompanyValues } from '@/components/sections/CompanyValues'
import { GlitchText } from '@/components/ui/GlitchText'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, Code } from 'lucide-react'

async function getTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc) {
    name,
    role,
    bio,
    image,
    socialLinks
  }`
  const data = await client.fetch(query)
  return data
}

export const metadata = {
  title: 'Chi Siamo | SigmaLabs',
  description: 'Il team dietro SigmaLabs. Sviluppatori, designer e pionieri dell\'AI uniti per costruire il futuro del web.',
}

export default async function ChiSiamoPage() {
  const teamMembers: TeamMember[] = await getTeamMembers()

  return (
    <>
      {/* HERO SECTION */}
      <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] opacity-40 pointer-events-none" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border backdrop-blur-md text-xs font-mono text-primary mb-8 animate-pulse">
                <Code className="w-4 h-4" />
                <span>HUMANS IN THE LOOP</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
                Gli Architetti <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary bg-300% animate-gradient">
                  del Futuro
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                <GlitchText variant="subtle" trigger="hover" className="text-text-primary font-medium">
                  SigmaLabs
                </GlitchText> non è solo un&apos;agenzia. È un laboratorio dove l&apos;ingegno umano incontra la potenza computazionale per ridefinire ciò che è possibile sul web.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="#team">
                    Conosci il Team
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full group">
                  <Link href="/contatti">
                    Lavora con Noi <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* VALUES SECTION (Bento Grid) */}
      <CompanyValues />

      {/* HISTORY SECTION (Timeline) */}
      <CompanyHistory />

      {/* TEAM SECTION (Grid) */}
      <div id="team">
        <TeamGrid members={teamMembers} />
      </div>

      {/* CTA FINAL */}
      <Section className="py-24">
        <Container>
           <FadeIn>
            <div className="relative rounded-3xl overflow-hidden bg-surface border border-white/5 p-8 md:p-16 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Pronto a costruire il domani?
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  Siamo sempre alla ricerca di sfide impossibili e partner visionari. 
                  Se hai un&apos;idea che gli altri chiamano &quot;follia&quot;, noi la chiamiamo &quot;progetto&quot;.
                </p>
                <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg shadow-[0_0_30px_-5px_rgba(255,107,53,0.4)] hover:shadow-[0_0_50px_-5px_rgba(255,107,53,0.6)] transition-shadow">
                  <Link href="/contatti">
                    Inizia il Viaggio
                  </Link>
                </Button>
              </div>
            </div>
           </FadeIn>
        </Container>
      </Section>
    </>
  )
}

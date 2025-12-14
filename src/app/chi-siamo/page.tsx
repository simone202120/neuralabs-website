import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { FadeIn, StaggerContainer } from '@/components/animations'
import { client, urlFor } from '@/lib/sanity'
import { TeamMember } from '@/types/sanity'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Github, Linkedin, Twitter } from 'lucide-react'

const values = [
  {
    title: 'Innovazione Pratica',
    description: 'Applichiamo l&apos;AI per risolvere problemi reali e creare valore tangibile.',
  },
  {
    title: 'Partnership',
    description: 'Lavoriamo con i nostri clienti, non per loro, in un clima di fiducia e collaborazione.',
  },
  {
    title: 'Velocità',
    description: 'Crediamo nello sviluppo agile e nel rilasciare MVP in settimane, non mesi.',
  },
  {
    title: 'Trasparenza',
    description: 'Comunicazione chiara, prezzi onesti e un processo di sviluppo aperto.',
  },
]

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

export default async function ChiSiamoPage() {
  const teamMembers: TeamMember[] = await getTeamMembers()

  return (
    <>
      <Section>
        <Container>
          <FadeIn>
            <h1 className="text-4xl font-bold text-center">Chi Siamo</h1>
            <p className="mt-4 text-lg text-text-secondary text-center max-w-3xl mx-auto">
              Siamo un laboratorio creativo dove l&apos;intelligenza artificiale incontra lo sviluppo web per creare soluzioni innovative e su misura.
            </p>
          </FadeIn>

          <FadeIn className="mt-16">
            <h2 className="text-3xl font-bold text-center">La Nostra Missione</h2>
            <p className="mt-6 text-lg text-text-secondary max-w-3xl mx-auto text-center">
              La nostra missione è aiutare le aziende a sfruttare il potenziale dell&apos;intelligenza artificiale per automatizzare processi, migliorare l&apos;efficienza e creare esperienze digitali uniche. Crediamo in un futuro in cui l&apos;AI è un partner creativo e strategico per ogni business.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center">I Nostri Valori</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </FadeIn>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            staggerDelay={0.2}
          >
            {values.map((value, index) => (
              <FadeIn key={index}>
                <Card className="text-center h-full p-6">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-text-secondary">{value.description}</p>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center">Il Nostro Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </FadeIn>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            staggerDelay={0.2}
          >
            {teamMembers.map((member) => (
              <FadeIn key={member.name}>
                <Card className="text-center">
                  <div className="relative h-48 w-48 mx-auto mt-6 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src={urlFor(member.image).url()}
                      alt={member.name || 'Team Member'}
                      fill
                      sizes="192px"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                    <p className="mt-4 text-sm text-text-secondary">{member.bio}</p>
                    <div className="flex justify-center gap-4 mt-6">
                      {member.socialLinks?.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                          <Linkedin />
                        </a>
                      )}
                      {member.socialLinks?.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                          <Twitter />
                        </a>
                      )}
                      {member.socialLinks?.github && (
                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                          <Github />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  )
}
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.sigmalabs.it/#organization',
    name: 'SigmaLabs',
    alternateName: 'Sigma Labs',
    description: 'Agenzia italiana di sviluppo web moderno, AI Agents, sistemi RAG e automazioni intelligenti.',
    url: 'https://www.sigmalabs.it',
    logo: 'https://www.sigmalabs.it/android-chrome-512x512.png',
    image: 'https://www.sigmalabs.it/android-chrome-512x512.png',

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
      addressLocality: 'Italia',
    },

    sameAs: [
      // Aggiungi social profiles quando disponibili
      // 'https://www.linkedin.com/company/sigmalabs',
      // 'https://github.com/sigmalabs',
    ],

    priceRange: '€€€',

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Sviluppo Software',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo Web App',
            description: 'Sviluppo web application moderne con Next.js, React e TypeScript',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agents',
            description: 'Sviluppo AI agents personalizzati con LangChain e LLM',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemi RAG',
            description: 'Implementazione sistemi RAG per documenti aziendali',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automazioni',
            description: 'Automazioni intelligenti per processi aziendali',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SigmaLabs',
    url: 'https://www.sigmalabs.it',
    description: 'Il laboratorio dove nascono le idee intelligenti',
    inLanguage: 'it-IT',
    publisher: {
      '@id': 'https://www.sigmalabs.it/#organization',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

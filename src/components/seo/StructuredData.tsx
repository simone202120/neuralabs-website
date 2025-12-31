export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.sigmalabs.it/#organization',
    name: 'SigmaLabs',
    legalName: 'SigmaLabs',
    alternateName: 'Sigma Labs',
    description: 'Laboratorio di sviluppo software specializzato in web application moderne, AI Agents, sistemi RAG e automazioni intelligenti. Trasformiamo idee in soluzioni digitali concrete utilizzando Next.js, TypeScript, LangChain e tecnologie enterprise-grade.',
    url: 'https://www.sigmalabs.it',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.sigmalabs.it/android-chrome-512x512.png',
      width: '512',
      height: '512',
    },
    image: 'https://www.sigmalabs.it/android-chrome-512x512.png',

    foundingDate: '2024',

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
      addressLocality: 'Italia',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Italian', 'English'],
      // email e telephone da aggiungere quando disponibili
    },

    sameAs: [
      // Social profiles - da aggiungere quando disponibili
      // 'https://www.linkedin.com/company/sigmalabs',
      // 'https://github.com/sigmalabs',
      // 'https://twitter.com/sigmalabs',
    ],

    areaServed: {
      '@type': 'Country',
      name: 'Italia',
    },

    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'AI Development',
      'Artificial Intelligence',
      'Machine Learning',
      'LLM Integration',
      'RAG Systems',
      'AI Agents',
      'Automation',
      'Software Engineering',
      'Cloud Computing',
      'API Development',
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Sviluppo Software',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo Siti Web e Applicazioni Web',
            description: 'Piattaforme web moderne sviluppate con Next.js, React e TypeScript',
            provider: {
              '@id': 'https://www.sigmalabs.it/#organization',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software e AI Software',
            description: 'Software personalizzato con integrazioni AI avanzate',
            provider: {
              '@id': 'https://www.sigmalabs.it/#organization',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automazioni, Agenti AI, Sistemi RAG',
            description: 'Ecosistemi intelligenti autonomi con AI Agents e sistemi RAG',
            provider: {
              '@id': 'https://www.sigmalabs.it/#organization',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sviluppo MVP',
            description: 'Sviluppo rapido di MVP per validazione di mercato',
            provider: {
              '@id': 'https://www.sigmalabs.it/#organization',
            },
          },
        },
      ],
    },

    // Founders - da aggiungere quando disponibili i dati
    // founder: [
    //   {
    //     '@type': 'Person',
    //     name: 'Nome Fondatore',
    //     jobTitle: 'CEO & Founder',
    //     sameAs: [
    //       'https://www.linkedin.com/in/...',
    //     ],
    //   },
    // ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Manteniamo anche LocalBusinessSchema per compatibilità
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.sigmalabs.it/#localbusiness',
    name: 'SigmaLabs',
    alternateName: 'Sigma Labs',
    description: 'Laboratorio italiano di sviluppo web moderno, AI Agents, sistemi RAG e automazioni intelligenti.',
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

export function ServicesSchema() {
  const services = [
    {
      '@type': 'Service',
      '@id': 'https://www.sigmalabs.it/servizi#web-development',
      serviceType: 'Sviluppo Siti Web e Applicazioni Web',
      provider: {
        '@id': 'https://www.sigmalabs.it/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Italia',
      },
      description: 'Piattaforme web moderne sviluppate con tecnologie all\'avanguardia e best practices dell\'industria software. Dalla prima consultazione al lancio in produzione, curiamo ogni aspetto del tuo progetto web: design UI/UX su misura, sviluppo frontend in Next.js con TypeScript strict mode, integrazione CMS headless, ottimizzazione SEO on-page, performance tuning e analytics setup.',
      offers: {
        '@type': 'Offer',
        price: '5000',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '5000',
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 4,
          maxValue: 8,
          unitCode: 'WK',
        },
      },
      category: 'Web Development',
      additionalType: 'https://schema.org/WebApplication',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.sigmalabs.it/servizi#custom-software',
      serviceType: 'Custom Software e AI Software',
      provider: {
        '@id': 'https://www.sigmalabs.it/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Italia',
      },
      description: 'Software custom progettato con te, non per te. Analizziamo insieme le esigenze reali, definiamo priorità e costruiamo soluzioni con tecnologie affidabili e moderne. Backend scalabili, interfacce user-friendly e integrazioni AI quando portano benefici misurabili. Ogni progetto include architettura documentata, codice pulito e formazione del team.',
      offers: {
        '@type': 'Offer',
        price: '15000',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '15000',
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 8,
          maxValue: 16,
          unitCode: 'WK',
        },
      },
      category: 'Custom Software Development',
      additionalType: 'https://schema.org/SoftwareApplication',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.sigmalabs.it/servizi#ai-automations',
      serviceType: 'Automazioni, Agenti AI, Sistemi RAG',
      provider: {
        '@id': 'https://www.sigmalabs.it/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Italia',
      },
      description: 'Identifichiamo insieme i processi che ti costano tempo e risorse, poi costruiamo automazioni intelligenti che lavorano H24. Chatbot che rispondono basandosi sui tuoi documenti reali, workflow che sincronizzano dati tra applicazioni, agenti AI che smistano richieste. Tecnologie moderne (n8n, LangChain, sistemi RAG) ma implementazione pragmatica: partiamo da un processo, misuriamo il risparmio, scaliamo.',
      offers: {
        '@type': 'Offer',
        price: '8000',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '8000',
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 6,
          maxValue: 12,
          unitCode: 'WK',
        },
      },
      category: 'AI Automation',
      additionalType: 'https://schema.org/SoftwareApplication',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.sigmalabs.it/servizi#mvp-development',
      serviceType: 'Sviluppo MVP',
      provider: {
        '@id': 'https://www.sigmalabs.it/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Italia',
      },
      description: 'Sviluppo MVP con approccio "less is more": individuiamo la tua unique value proposition, costruiamo solo quello e lo mettiamo in mano agli utenti. Niente funzioni "nice to have", solo essenziale fatto bene. Stack semplice e moderno, architettura che non ti blocca dopo, supporto al lancio incluso. In settimane, non mesi, hai un prodotto funzionante per testare traction e product-market fit.',
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '3000',
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 2,
          maxValue: 4,
          unitCode: 'WK',
        },
      },
      category: 'MVP Development',
      additionalType: 'https://schema.org/SoftwareApplication',
    },
  ]

  return (
    <>
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  )
}

export function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto costa sviluppare un sito web con Next.js e TypeScript?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il costo dipende dalla complessità del progetto. Un sito web corporate parte da €5.000, una web app più complessa da €15.000, mentre un MVP può costare a partire da €3.000. I progetti includono sviluppo frontend con Next.js, TypeScript strict mode, design UI/UX, ottimizzazione SEO e deployment su Vercel o AWS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cosa sono gli AI Agents e come possono aiutare la mia azienda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gli AI Agents sono sistemi intelligenti autonomi che eseguono task complessi utilizzando LLM come GPT-4 o Claude. Possono gestire customer support H24, qualificare lead automaticamente, processare documenti, e automatizzare workflow ripetitivi. Riducono i costi operativi fino al 70% e migliorano la customer experience con risposte immediate e accurate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Che differenza c\'è tra un sistema RAG e un chatbot normale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un sistema RAG (Retrieval-Augmented Generation) risponde basandosi esclusivamente sui tuoi documenti aziendali reali, mentre un chatbot normale usa solo la conoscenza generica del modello AI. Il RAG recupera informazioni precise dai tuoi dati (manuali, policy, knowledge base) e genera risposte accurate e verificabili, eliminando le allucinazioni tipiche dei LLM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo serve per sviluppare una web application completa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I tempi variano in base alla complessità: un MVP richiede 2-4 settimane, un sito web corporate 4-8 settimane, un software custom 8-16 settimane, un sistema di automazioni AI 6-12 settimane. Utilizziamo metodologia agile con sprint settimanali, deployment continuo e review costanti per garantire tempi certi e zero sorprese.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quali tecnologie utilizzate per lo sviluppo web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stack moderno enterprise-grade: Next.js 14+ con App Router, React 18, TypeScript in strict mode, Tailwind CSS per lo styling, Framer Motion per animazioni, Supabase o PostgreSQL per database, Vercel per hosting e deployment, Docker per containerizzazione. Per AI: LangChain, OpenAI API, Pinecone, n8n per automazioni.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona il processo di sviluppo in SigmaLabs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Processo in 4 fasi: 1) Discovery - analisi esigenze e definizione requisiti; 2) Design - wireframe, mockup UI/UX e architettura sistema; 3) Development - sprint agili settimanali con review continue; 4) Deploy - lancio in produzione con monitoraggio e supporto. Tutto tracciato su GitHub, comunicazione trasparente, nessuna sorpresa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso scalare il progetto dopo il lancio iniziale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Assolutamente sì. Tutti i progetti sono sviluppati con architettura scalabile e modulare. Il codice è pulito, documentato e segue le best practices dell\'industria. Puoi aggiungere funzionalità, integrare nuovi servizi o aumentare la capacità senza riscrivere da zero. Forniamo anche documentazione completa e formazione al team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Offrite supporto e manutenzione dopo il lancio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, offriamo pacchetti di manutenzione continuativa che includono: monitoring 24/7, aggiornamenti di sicurezza, fix di bug, ottimizzazioni performance, supporto tecnico prioritario e backup automatici. Puoi scegliere tra supporto base (incident-based) o supporto dedicato con SLA garantito e disponibilità estesa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come posso integrare l\'intelligenza artificiale nel mio software esistente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Integrazione AI modulare senza riscrivere tutto: 1) Analisi software esistente e identificazione use case AI; 2) Sviluppo API layer per comunicazione con LLM; 3) Implementazione features AI (chatbot, automazioni, analisi dati); 4) Testing e deployment graduale. Supportiamo OpenAI, Anthropic Claude, modelli open-source e soluzioni on-premise.',
        },
      },
      {
        '@type': 'Question',
        name: 'SigmaLabs lavora solo con startup o anche con aziende enterprise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lavoriamo con entrambi. Per startup offriamo MVP rapidi e stack lean per validare product-market fit velocemente. Per aziende enterprise forniamo soluzioni custom scalabili, integrazioni complesse con sistemi legacy, compliance e security audit, architetture multi-tenant e supporto dedicato con SLA. Stesso livello di qualità, approccio diverso basato sulle esigenze.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

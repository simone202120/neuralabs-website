import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SigmaLabs - Il laboratorio dove nascono le idee intelligenti'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Σ
            </div>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              SigmaLabs
            </h1>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '36px',
              color: '#F1F5F9',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 0 40px 0',
              lineHeight: '1.4',
              fontWeight: '500',
            }}
          >
            Il laboratorio dove nascono le idee intelligenti
          </p>

          {/* Services */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            {['Sviluppo Web', 'AI Agents', 'Sistemi RAG', 'Automazioni'].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    padding: '12px 24px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                    color: '#94A3B8',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              background: '#10B981',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              color: '#94A3B8',
              fontSize: '18px',
              fontFamily: 'monospace',
            }}
          >
            www.sigmalabs.it
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

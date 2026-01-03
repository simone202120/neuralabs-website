import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Hexagon Logo Simplified for Favicon */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
           <defs>
              <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
          </defs>
          
          {/* Filled Hexagon with Gradient - High Visibility */}
          <path
            d="M16 2 L27 8.5 L27 23.5 L16 30 L5 23.5 L5 8.5 Z"
            fill="url(#faviconGradient)"
          />
          
          {/* White/Dark Core to create contrast */}
          <circle cx="16" cy="16" r="4" fill="white" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}

'use client'

import { useEffect, useState } from 'react'

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, event.key].slice(-konamiCode.length)

        if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
          callback()
          return []
        }

        return newKeys
      })
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [callback])
}

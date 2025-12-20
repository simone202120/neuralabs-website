'use client'

import { useEffect, useRef, useState } from 'react'

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

// Helper per comparare array senza JSON.stringify
function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false
  return a.every((val, index) => val === b[index])
}

export function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([])
  const callbackRef = useRef(callback)

  // Mantieni il callback aggiornato senza ricrearne l'event listener
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, event.key].slice(-konamiCode.length)

        if (arraysEqual(newKeys, konamiCode)) {
          callbackRef.current()
          return []
        }

        return newKeys
      })
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, []) // Empty deps - event listener non viene mai ricreato
}

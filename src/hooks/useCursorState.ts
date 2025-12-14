import { create } from 'zustand'

type CursorState = {
  cursorType: string
  setCursorType: (type: string) => void
}

export const useCursorState = create<CursorState>((set) => ({
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
}))

import { atom } from 'jotai'

const appearAtom = atom(false)
export const appearToggleAtom = atom(
  (get) => get(appearAtom),
  (get, set) => {
    set(appearAtom, true)
  },
)

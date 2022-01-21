import { atom } from 'recoil'

export const appearState = atom({
  key: "apparState",
  default: false
})

export const animationCountState = atom({
  key: "animationCountState",
  default: 0
})

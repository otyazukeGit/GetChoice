import { atom } from 'recoil'

export const appearState = atom({
  key: "apparState",
  default: false
})

export const animationCountState = atom({
  key: "animationCountState",
  default: 3
})

export const choiceListState = atom({
  key: "choiceListState",
  default: [
    'A',
    'B',
    'C'
  ]
})

export const modalVisibleState = atom({
  key: "modalVisibleState",
  default: false
})

export const textState = atom({
  key: "textState",
  default: ""
})


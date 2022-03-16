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
    {
      id: 1,
      choice: 'by walk',
    },
    {
      id: 2,
      choice: 'by car',
    },
    {
      id: 3,
      choice: 'by bus',
    },
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


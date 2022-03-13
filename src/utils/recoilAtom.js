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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      choice: 'by walk',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      choice: 'by car',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
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


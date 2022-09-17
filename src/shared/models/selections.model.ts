const selectionsObj = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
} as const

export type Selectable = typeof selectionsObj[keyof typeof selectionsObj]
export const selections = Object.values(selectionsObj)
import { Player } from "../../shared/models/player.model.js"
import { Selectable, selections } from "../../shared/models/selections.model.js"

const POSSIBLE_COMPUTER_NAMES: string[] = [
    'Carson',
    'Cam',
    'Cassidy',
    'Cory',
    'Kim',
    'Carter',
    'Chris',
    'Kyle',
  ]

function getComputerOpponent() {
    return new Player(getComputerUsername())
}
function getRandomSelection(): Selectable {
    const random = Math.floor(Math.random()* selections.length)
    return selections[random]!
}
function getComputerUsername() {
    const randomNameIndex = Math.floor(Math.random() * POSSIBLE_COMPUTER_NAMES.length)
    return 'Computer' + POSSIBLE_COMPUTER_NAMES[randomNameIndex]
}

export { getComputerOpponent, getRandomSelection }
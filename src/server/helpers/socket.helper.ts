
const generateTournamentPin = () => {
    let tPin = Math.floor(Math.random() * 10000)
    return tPin
}

export { generateTournamentPin }
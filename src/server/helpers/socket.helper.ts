
const generateTournamentPin = () => {
    return (Math.random() * 100000).toString(32).substring(5, 10)  
}
export { generateTournamentPin }
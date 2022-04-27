import { io } from './configs/socket.config.js';
import { generateTournamentPin } from './helpers/socket.helper.js';

const tournamentPool: any = {
  // tPin: [
  //     socketIds,
  //     socketIds,
  // ],
    // tPin: [
  //     socketIds,
  //     socketIds,
  // ]
}

export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id)

    socket.on('create-tournament', () => {
      let tPin = generateTournamentPin()
      let joinedPlayers: any
      let tournamentKey  = tPin.toString()
      socket.emit('generate tournament pin', {tournamentPin: tPin })
      socket.join(tournamentKey)

          if ( tournamentPool[tournamentKey] == undefined){
            joinedPlayers = new Array<string>(socket.id)
            tournamentPool[tPin] = joinedPlayers
          }
          console.log(tournamentPool)
    })
  
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});
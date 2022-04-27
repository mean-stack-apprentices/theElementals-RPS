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

    socket.on('create-tournament', (socketID,cb) => {

      let tPin = generateTournamentPin()
      let joinedPlayers: any
      cb(tPin);
      socket.join(tPin)

          if (tournamentPool[tPin] == undefined){
            joinedPlayers = new Array(socket.id)
            tournamentPool[tPin] = joinedPlayers
          } 

          console.log(tournamentPool)

    })
  
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});
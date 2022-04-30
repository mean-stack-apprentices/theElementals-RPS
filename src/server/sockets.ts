import { io } from './configs/socket.config.js';
import * as socketHelpers from './helpers/socket.helper.js';


// CONNECTION STATES

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

const createFindPool: any = {
  /*__pin__: {
    pLeft: __Player__,
    pRight: __Player__,
  }
  ]*/
}

export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id)

    socket.on('requesting to create match',(payload) => {
      const {emittingPlayer} = payload
      let pin = socketHelpers.getUniqueGamePin(createFindPool, socketHelpers.randomPin())
      createFindPool[pin] = {pLeft: emittingPlayer}
      socket.join(pin)
      socket.emit('match created, waiting for opponent', {gamePin: pin})
    })

    socket.on('find created game', (payload)=>{
      const {emittingPlayer, requestedGamePin} = payload
      if (createFindPool[requestedGamePin]) {
        socket.join(requestedGamePin)
        createFindPool[requestedGamePin].pRight = emittingPlayer
        socket.emit('found game, joining player', createFindPool[requestedGamePin])
      }
    })

    socket.on('create-tournament', (socketID, cb) => {
      let tPin = socketHelpers.getUniqueGamePin(tournamentPool, socketHelpers.randomPin())
      socket.join(tPin)         
      let joinedPlayers = new Array(socket.id)
      tournamentPool[tPin] = joinedPlayers
      cb(tPin);
      
      console.log(tournamentPool)
    })
    
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});
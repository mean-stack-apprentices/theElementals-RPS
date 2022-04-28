import { io } from './configs/socket.config.js';

// CONNECTION STATES

const createFindPool: any = {
  /*__pin__: {
    pLeft: __Player__,
    PRight: __Player__,
  }
  ]*/
}

export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id)

    socket.on('requesting to create match',(payload) => {
      const {emittingPlayer} = payload
      let pin = getUniqueGamePin(createFindPool, randomPin())
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

    socket.on('create tournament room', (room) => {
      socket.join(room)
      console.log('id: ', room)
    })
    
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});

function randomPin() {
  const length = 4;
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getUniqueGamePin(pool: any, pin:string): string {
  if (pool[pin]) {
    return getUniqueGamePin(pool, randomPin())
  } else {
  return pin
  }
}
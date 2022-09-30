import { Player } from '../shared/models/player.model.js';
import { io } from './configs/socket.config.js';
import * as socketHelpers from './helpers/socket.helper.js';
import * as computerHelper from './helpers/computer.helper.js';
import { Selectable } from '../shared/models/selections.model.js';


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

const gamePool: any = {
  /*
    {
      [pin:string]: ActiveGame
    }
  */
}

export default io.on("connection", (socket) => {
  console.log("user connected, ", socket.id)

  socket.on('find created game', (payload, clientCallback)=>{
    const {emittingPlayer, requestedGamePin} = payload
    if (!gamePool[requestedGamePin]) {
      console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST')
    } else {
      clientCallback() // setting active player
      socket.join(requestedGamePin)
      socket.emit('set game pin', requestedGamePin)
      gamePool[requestedGamePin].pRight = emittingPlayer
      io.to(requestedGamePin).emit('update game players', gamePool[requestedGamePin])
      io.to(requestedGamePin).emit('route', 'game')
    
    }
  })
  socket.on('create-tournament', (socketID, cb) => {
    let tPin = socketHelpers.getUniqueGamePin(tournamentPool, socketHelpers.randomPin())
    socket.join(tPin)
    let joinedPlayers = new Array(socket.id)
    tournamentPool[tPin] = joinedPlayers
    cb(tPin);
    
    console.log("tournament created ... id: " + tournamentPool)
  })
  socket.on('requesting to create match',(payload) => {
    const {emittingPlayer} = payload
    let pin = socketHelpers.getUniqueGamePin(gamePool, socketHelpers.randomPin())
    gamePool[pin] = {pLeft: emittingPlayer}
    socket.join(pin)
    socket.emit('set game pin', pin)
    socket.emit('route', 'online-match/game-pin-display')
  })
  socket.on('requesting to play computer',(payload) => {
    const {emittingPlayer} = payload
    let pin = socketHelpers.getUniqueGamePin(gamePool, socketHelpers.randomPin())
    gamePool[pin] = { isVsComputer: true, pLeft: emittingPlayer}
    socket.join(pin)
    socket.emit('set game pin', pin)
    gamePool[pin].pRight = computerHelper.getComputerOpponent()
    
    io.to(pin).emit('update game players', gamePool[pin])
    socket.emit('route', 'game')

    // mock computer readying up
    setTimeout(() => {
      gamePool[pin].pRight.ready = true
      io.to(pin).emit('update game players', gamePool[pin])
    }, socketHelpers.getRandomMilliseconds());
  })
  socket.on('request set both sides NOT ready', payload => {
    const {gamePin} = payload
      gamePool[gamePin]['pRight'].ready = false
      gamePool[gamePin]['pLeft'].ready = false
      io.to(gamePin).emit('update game players', gamePool[gamePin])
      
      if (gamePool[gamePin].isVsComputer && gamePool[gamePin].isStarted) {
        setTimeout(() => {
          const side = 'pRight'
          const selection = computerHelper.getRandomSelection()
          mangagePlayerSelectionIfBothReadyFindLoser({gamePin, side, selection})
        }, socketHelpers.getRandomMilliseconds(3000,6000));
      }
  })
  socket.on('request set isStarted', (payload) => {
    const {gamePin, bool} = payload
    if (!gamePool[gamePin]){
      console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST')
    } else {
      gamePool[gamePin].isStarted = bool
      io.to(gamePin).emit('set isStarted', bool)
    }
  })
  socket.on("request set player's selection", (payload) => {
    mangagePlayerSelectionIfBothReadyFindLoser(payload)
  })
  socket.on('request set side to NOT ready', payload => {
    const {gamePin, side} = payload
    if (!gamePool[gamePin]){
      console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST')
    } else {
      gamePool[gamePin][side].ready = false
      io.to(gamePin).emit('update game players', gamePool[gamePin])
    }
  })
  socket.on('request set side to ready', (payload) => {
    const {gamePin, side} = payload
    if (!gamePool[gamePin]){
      console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST')
    } else {
      gamePool[gamePin][side].ready = true
      io.to(gamePin).emit('update game players', gamePool[gamePin])
    }
  })

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});

function mangagePlayerSelectionIfBothReadyFindLoser(payload: {gamePin: string, side: string, selection: Selectable}) {
  const {gamePin, side, selection} = payload
  gamePool[gamePin][side].optionSelection = selection
  gamePool[gamePin][side].ready = true
  if (socketHelpers.yallBothReady(gamePool[gamePin])) {
    const losingSide: string = socketHelpers.findMeALoser(gamePool[gamePin])
    switch(losingSide){
      case 'pLeft':
      case 'pRight':
        gamePool[gamePin][losingSide].health -= 1
        break
      case 'draw':
        break
      default:
        console.log(losingSide, "^^^Error Finding a Loser")
    }
    io.to(gamePin).emit('set result', socketHelpers.getResultObj(losingSide))
  }
  io.to(gamePin).emit('update game players', gamePool[gamePin])
}
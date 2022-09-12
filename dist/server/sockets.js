import '../shared/models/player.model.js';
import { io } from './configs/socket.config.js';
import * as socketHelpers from './helpers/socket.helper.js';
import * as computerHelper from './helpers/computer.helper.js';
// CONNECTION STATES
const tournamentPool = {
// tPin: [
//     socketIds,
//     socketIds,
// ],
// tPin: [
//     socketIds,
//     socketIds,
// ]
};
const gamePool = {
/*__pin__: {
  isVsComputer: boolean
  pLeft: __Player__,
  pRight: __Player__,
}
]*/
};
export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id);
    socket.on('find created game', (payload, clientCallback) => {
        const { emittingPlayer, requestedGamePin } = payload;
        if (!gamePool[requestedGamePin]) {
            console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST');
        }
        else {
            clientCallback(); // setting active player
            socket.join(requestedGamePin);
            socket.emit('set game pin', requestedGamePin);
            gamePool[requestedGamePin].pRight = emittingPlayer;
            io.to(requestedGamePin).emit('update game players', gamePool[requestedGamePin]);
            io.to(requestedGamePin).emit('route', 'game');
        }
    });
    socket.on('create-tournament', (socketID, cb) => {
        let tPin = socketHelpers.getUniqueGamePin(tournamentPool, socketHelpers.randomPin());
        socket.join(tPin);
        let joinedPlayers = new Array(socket.id);
        tournamentPool[tPin] = joinedPlayers;
        cb(tPin);
        console.log(tournamentPool);
    });
    socket.on('requesting to create match', (payload) => {
        const { emittingPlayer } = payload;
        let pin = socketHelpers.getUniqueGamePin(gamePool, socketHelpers.randomPin());
        gamePool[pin] = { pLeft: emittingPlayer };
        socket.join(pin);
        socket.emit('set game pin', pin);
        socket.emit('route', 'online-match/game-pin-display');
    });
    socket.on('requesting to play computer', (payload) => {
        const { emittingPlayer } = payload;
        let pin = socketHelpers.getUniqueGamePin(gamePool, socketHelpers.randomPin());
        gamePool[pin] = { isVsComputer: true, pLeft: emittingPlayer };
        socket.join(pin);
        socket.emit('set game pin', pin);
        gamePool[pin].pRight = computerHelper.getComputerOpponent();
        io.to(pin).emit('update game players', gamePool[pin]);
        socket.emit('route', 'game');
    });
    socket.on('request set isStarted', (payload) => {
        const { gamePin, bool } = payload;
        if (!gamePool[gamePin]) {
            console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST');
        }
        else {
            gamePool[gamePin].isStarted = bool;
            io.to(gamePin).emit('set isStarted', bool);
        }
    });
    socket.on("request set player's selection", payload => {
        const { gamePin, side, selction } = payload;
        if (!gamePool[gamePin]) {
            console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST');
        }
        else {
            gamePool[gamePin][side].optionSelction = selction;
            gamePool[gamePin][side].ready = true;
            if (gamePool[gamePin].isVsComputer) {
                //getComputerSelection()
                //emitReady()
                //manage resultObj()
            }
            else if (socketHelpers.yallBothReady(gamePool[gamePin])) {
                const losingSide = socketHelpers.findMeALoser(gamePool[gamePin]);
                switch (losingSide) {
                    case 'pLeft':
                    case 'pRight':
                        gamePool[gamePin][losingSide].health -= 1;
                        break;
                    case 'draw':
                        break;
                    default:
                        console.log(losingSide, "^^^Error Finding a Loser");
                }
                io.to(gamePin).emit('set result', socketHelpers.getResultObj(losingSide));
            }
            io.to(gamePin).emit('update game players', gamePool[gamePin]);
        }
    });
    socket.on('request set side to NOT ready', payload => {
        const { gamePin, side } = payload;
        if (!gamePool[gamePin]) {
            console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST');
        }
        else {
            gamePool[gamePin][side].ready = false;
            io.to(gamePin).emit('update game players', gamePool[gamePin]);
        }
    });
    socket.on('request set side to ready', (payload) => {
        const { gamePin, side } = payload;
        if (!gamePool[gamePin]) {
            console.log('SOME THING IS VERY WRONG, GAME DOES NOT EXIST');
        }
        else {
            gamePool[gamePin][side].ready = true;
            io.to(gamePin).emit('update game players', gamePool[gamePin]);
        }
    });
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});
//# sourceMappingURL=sockets.js.map
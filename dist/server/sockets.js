import { io } from './configs/socket.config.js';
import * as socketHelpers from './helpers/socket.helper.js';
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
const createFindPool = {
/*__pin__: {
  pLeft: __Player__,
  pRight: __Player__,
}
]*/
};
export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id);
    socket.on('requesting to create match', (payload) => {
        const { emittingPlayer } = payload;
        let pin = socketHelpers.getUniqueGamePin(createFindPool, socketHelpers.randomPin());
        createFindPool[pin] = { pLeft: emittingPlayer };
        socket.join(pin);
        socket.emit('set game pin', pin);
        socket.emit('route', 'online-match/game-pin-display');
    });
    socket.on('find created game', (payload, clientCallback) => {
        const { emittingPlayer, requestedGamePin } = payload;
        if (!createFindPool[requestedGamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            socket.join(requestedGamePin);
            socket.emit('set game pin', requestedGamePin);
            clientCallback(createFindPool[requestedGamePin]); // setting active player
            createFindPool[requestedGamePin].pRight = emittingPlayer;
            io.to(requestedGamePin).emit('update game players', createFindPool[requestedGamePin]);
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
    socket.on("request decrease player's health", payload => {
        const { gamePin, side } = payload;
        if (!createFindPool[gamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            createFindPool[gamePin][side].health -= 1;
            io.to(gamePin).emit('update game players', createFindPool[gamePin]);
        }
    });
    socket.on('request set isStarted', (payload) => {
        const { gamePin, bool } = payload;
        if (!createFindPool[gamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            createFindPool[gamePin].isStarted = bool;
            io.to(gamePin).emit('set isStarted', bool);
        }
    });
    socket.on("request set player's selection", payload => {
        const { gamePin, side, selction } = payload;
        if (!createFindPool[gamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            createFindPool[gamePin][side].optionSelction = selction;
            io.to(gamePin).emit('update game players', createFindPool[gamePin]);
        }
    });
    socket.on('request set side to NOT ready', payload => {
        const { gamePin, side } = payload;
        if (!createFindPool[gamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            createFindPool[gamePin][side].ready = false;
            io.to(gamePin).emit('update game players', createFindPool[gamePin]);
        }
    });
    socket.on('request set side to ready', (payload) => {
        const { gamePin, side } = payload;
        if (!createFindPool[gamePin]) {
            console.log('SOME THING IS VERY WRONG');
        }
        else {
            createFindPool[gamePin][side].ready = true;
            io.to(gamePin).emit('update game players', createFindPool[gamePin]);
        }
    });
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});
//# sourceMappingURL=sockets.js.map
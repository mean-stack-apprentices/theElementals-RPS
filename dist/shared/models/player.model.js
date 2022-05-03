export class Player {
    username;
    socketId;
    constructor(username, socketId) {
        this.username = username;
        this.socketId = socketId;
    }
    health = 3;
    optionSelction = null;
    ready = false;
    makeReady() {
        this.ready = true;
    }
    notReady() {
        this.ready = false;
    }
    loseHealth() {
        this.health -= 1;
    }
    ;
}
//# sourceMappingURL=player.model.js.map
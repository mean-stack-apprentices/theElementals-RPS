export class Player {
    username;
    constructor(username) {
        this.username = username;
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
export class Player {
    
    constructor(public username: string){}
    
    health: number = 3

    loseHealth() {
        this.health - 1;
    }
}
export class Player {
    
    constructor(public username: string){}
    
    health: number = 3;
    ready:boolean = false;

    loseHealth() {
        this.health - 1;
    };
}
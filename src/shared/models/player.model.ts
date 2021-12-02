export class Player {
    
    constructor(public username: string){}
    
    health: number = 3;

    optionSelction: 'rock' | 'paper' | 'scissors' | null = null;
    ready:boolean = false;

    makeReady() {
        this.ready = true;
    }
    notReady() {
        this.ready = false;
    }

    loseHealth() {
        this.health - 1;
    };
}
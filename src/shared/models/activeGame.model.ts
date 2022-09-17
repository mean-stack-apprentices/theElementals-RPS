import { Player } from "./player.model";

export interface ActiveGame {
    isStarted: boolean,
    isVsComputer: boolean,
    pLeft: Player,
    pRight: Player,
}
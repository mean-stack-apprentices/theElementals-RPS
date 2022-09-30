export interface Result {
    draw: boolean,
    winner: "pLeft" | "pRight" | null,
    loser: "pLeft" | "pRight" | null,
}
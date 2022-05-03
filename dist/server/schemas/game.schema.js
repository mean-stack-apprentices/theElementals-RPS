import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const gameModel = new Schema({
    date: { type: Date },
    players: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    winner: { type: mongoose.Types.ObjectId, ref: "user" },
});
export const GameModel = model('game', gameModel);
//# sourceMappingURL=game.schema.js.map
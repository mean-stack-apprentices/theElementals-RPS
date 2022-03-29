import mongoose from 'mongoose';
import type { Game } from '../../shared/models/game.model';

const {Schema, model} = mongoose;

const gameModel = new Schema<Game>({
    pin: { type: String },
    date: { type: Date },
    players: [{type: mongoose.Types.ObjectId, ref: "user"}],
    winner: {type: mongoose.Types.ObjectId, ref: "user"},
    type: {type: String, enum: ["Game", "Tournament"]},

})

export const GameModel = model<Game>('game', gameModel)
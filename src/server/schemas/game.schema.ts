import mongoose from 'mongoose';
import type { Game } from '../../shared/models/game.model';

const {Schema, model} = mongoose;

const gameModel = new Schema<Game>({
    date: { type: Date },
    players: [{type: mongoose.Types.ObjectId, ref: "user"}],
    winner: {type: mongoose.Types.ObjectId, ref: "user"},

})

export const GameModel = model<Game>('game', gameModel)
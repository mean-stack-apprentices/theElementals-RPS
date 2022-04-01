import mongoose from "mongoose";
import { User } from '../models/user.model';

export interface Game {
    date: Date,
    players: [type: mongoose.Types.ObjectId | User],
    winner: {type: mongoose.Types.ObjectId | User},
    _id: string,
}
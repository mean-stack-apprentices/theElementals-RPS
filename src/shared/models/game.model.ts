import type mongoose from "mongoose";
import { User } from '../models/user.model';

export interface Game {
    pin: string,
    date: Date,
    players: [type: mongoose.Types.ObjectId | User],
    winner: {type: mongoose.Types.ObjectId | User},
    type: string,
    _id: string,
}
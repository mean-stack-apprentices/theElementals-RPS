import mongoose from "mongoose";
import type { User } from "../../shared/models/user.model";

const userSchema = new mongoose.Schema<User>({
    username:{type: String, required: true},
    password:{type: String, required: true},
    profilePic:{type: Image},
})
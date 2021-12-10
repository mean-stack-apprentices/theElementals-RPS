import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    //profilePic:{type: Image},
});
export const UserModel = mongoose.model('user', userSchema);
//# sourceMappingURL=user.schema.js.map
import express from 'express';
import { upload } from "../configs/db.config.js";
import { UserModel } from "../schemas/user.schema.js";
import { gfs } from '../configs/db.config.js';
export const imageRouter = express.Router();
imageRouter.post('/upload-profilePic', upload.single('profilePic'), function (req, res) {
    res.json({
        message: "profilePic landed",
        reqFile: req.file,
    });
});
imageRouter.get("/get-profilePic/:userId", async (req, res) => {
    const user = await UserModel.findById(req.params.userId).exec();
    if (user?.profilePic) {
        gfs
            .find({
            filename: user.profilePic.filename
        })
            .toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: "no files exist"
                });
            }
            gfs.openDownloadStreamByName(user.profilePic.filename).pipe(res);
        });
    }
    else {
        gfs
            .find({
            filename: "unknownChar.jpeg"
        })
            .toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: "no files exist"
                });
            }
            gfs.openDownloadStreamByName("unknownChar.jpeg").pipe(res);
        });
    }
});
//# sourceMappingURL=image.route.js.map
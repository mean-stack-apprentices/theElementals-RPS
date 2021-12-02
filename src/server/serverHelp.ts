import express from "express";
import cors from "cors";
import crypto from "crypto";
import path from "path";
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import type { GridFSBucket } from "mongodb";
import dotenv from "dotenv";

const __dirname = path.resolve();
const clientPath = path.join(__dirname, 'dist/client');

const app = express();
const PORT = process.env.PORT || 3000;
let gfs: GridFSBucket;
dotenv.config();

app.use(cors());
app.use(express.static(clientPath));

mongoose
  .connect(`${process.env.mongoURI}`)
  // .connect(mongoURI)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

// Storage
const storage = new GridFsStorage({
  url: `${process.env.mongoURI}`,
  // url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: file.originalname,
          bucketName: "uploads",
        }; 
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({
  storage,
});


app.post("/upload", upload.single("file"), (req, res) => {
  // res.json({file : req.file})
  res.redirect("/");
});

app.get("/files", (req, res) => {
  console.log('get files')
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "no files exist"
      });
    }
    return res.json(files);
  });
});

app.get("/image/:filename", (req, res) => {
  // console.log('id', req.params.id)
  console.log('get image')
  console.log(req.params.filename);
  gfs
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      console.log(files);
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

app.post("/files/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    res.redirect("/");
  });
});


app.listen(PORT, function () {
  console.log(`server started at http://localhost:${PORT}`);
});

app.all("*", function (req, res) {
  const filePath = path.join(clientPath, "index.html");
  console.log(filePath);
  res.sendFile(filePath);
  });
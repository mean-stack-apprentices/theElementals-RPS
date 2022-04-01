import express from "express";
import cors from "cors";
import path from 'path';
import mongoose from 'mongoose';
import http from 'http';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

import multer from 'multer';
import { GridFsStorage } from "multer-gridfs-storage";
import type { GridFSBucket } from "mongodb";
import crypto from 'crypto';

import { UserModel } from "./schemas/user.schema.js";
import { Server } from "socket.io";
import { authHandler } from "./middleware/auth.middleware.js";

const __dirname = path.resolve();
console.log(__dirname)
dotenv.config();
const port = process.env.PORT || 3000;
const saltRounds = 10;
const dbString = "mongodb://localhost:27017/theElementalRPS"

const mongo_uri = process.env.MONGO_URI as string;
const access_secret = process.env.ACCESS_SECRET as string;

let gfs: GridFSBucket;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

const storage = new GridFsStorage({
  // url: dbString,
  url: mongo_uri,
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

app.use(cors());
app.use(express.json())
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));



app.get('/test', function(req, res) {
  res.json({test: 'test'})
});
app.post('/api/upload-profilePic', upload.single('profilePic'), function(req, res) {
  res.json({message: "profilePic landed"})
});
app.get("/api/profilePic/:userId", authHandler, async (req, res) => {
  // console.log('id', req.params.id)
  console.log('get profilePic')
  const user = await UserModel.findById(req.params.userId)
  gfs
    .find({
      _id: user?.profilePic
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
app.post('/api/sign-up', async function(req, res) {
  const {username, password, profilePic} = req.body

  const found = await UserModel.findOne({username}).lean()
  if (found){
    res.json({message: "Username is taken. Please insert a unique username."})
  } else {}
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const user = new UserModel({
    username,
    password: hash,
    profilePic,
  });
  user.save()
  .then((data) => {
    res.json({ data });
  })
  .catch((err) => {
    res.status(501);
    res.json({ errors: err });
  });
})
app.post('/api/vaid-username', function(req, res) {
  const {username} = req.body

  UserModel.findOne({ username }).lean().then(username => {
    if (username) {
      res.json({validUsername: false})
    } else {
      res.json({validUsername: true})
    }
  })

});
app.post('/api/sign-in', async function(req, res) {
  const {username, password} = req.body
  UserModel.findOne({username}).then(user => {
    bcrypt.compare(password, `${user?.password}`, function(err, result) {
      if (result) {
        const accessToken = jwt.sign({user}, access_secret)
        res.cookie('jwt', accessToken, {
          httpOnly: true,
          maxAge: 3600 * 1000,
        })
        res.json({data: {username: username, profilePic: user?.profilePic}})
      } else {
        res.sendStatus(502);
      }
    })
  })
})

io.on("connection", (socket) => {
  console.log("user connected, ", socket.id)

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});

app.all('*', function(req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
})


server.listen(port, function (){
  console.log(`listening to port http://localhost:${port}`)
})

// app.listen(port, function() {
//   console.log(`running on http://localhost:${port}`)
// }) 



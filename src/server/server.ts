import express from "express";
import cors from "cors";
import path from 'path';
import mongoose from 'mongoose';
import http from 'http';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

import multer from 'multer';
import { GridFsStorage } from "multer-gridfs-storage";
import type { GridFSBucket } from "mongodb";
import crypto from 'crypto';

import { UserModel } from "./schemas/user.schema.js";
import { Server } from "socket.io";
import { domainToASCII } from "url";
import { profile } from "console";

const __dirname = path.resolve();
dotenv.config();
const port = 3000;
const saltRounds = 10;
const dbString = "mongodb://localhost:27017/rockPaperScissors"

let gfs: GridFSBucket;

const access_secret = process.env.ACCESS_SECRET as string;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://localhost:4200"] },
});

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

const storage = new GridFsStorage({
  url: dbString,
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

app.use(cors());
app.use(express.json())
app.use(express.static("public"));

io.on("connection", socket => {
})

app.get('/test', function(req, res) {
  res.json({test: 'test'})
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
      console.log(result)
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
app.all('*', function(req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
})

app.listen(port, function() {
  console.log(`running on http://localhost:${port}`)
}) 



import express from "express";
import cors from "cors";
import path from 'path';
import mongoose from 'mongoose';
import http from 'http';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import { UserModel } from "./schemas/user.schema.js";
import { Server } from "socket.io";

const __dirname = path.resolve();
const port = 3000;
const saltRounds = 10

const access_secret = process.env.ACCESS_TOKEN_SECRET as string;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://localhost:4200"] },
});

mongoose
  .connect("mongodb://localhost:27017/rockPaperScissors")
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

app.use(cors());
app.use(express.json())
app.use(express.static("public"));

io.on("connection", socket => {
})

app.get('/test', function(req, res) {
  res.json({test: 'test'})
});
app.post('/api/sign-up', async function(req, res) {
  const {username, password} = req.body

  const found = await UserModel.findOne({username}).lean()
  if (found){
    res.json({message: "Username is taken. Please insert a unique username."})
  } else {}
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const user = new UserModel({
    username,
    password: hash
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
app.post('/api/sign-in', async function(req, res) {
  const {username, password} = req.body

  UserModel.findOne({ username }).then(user => {
    bcrypt.compare(password, `${user?.password}`, function(err, result) {
      if (result) {
        const accessToken = jwt.sign({user}, access_secret)
        res.cookie('jwt', accessToken, {
          httpOnly: true,
          maxAge: 60 * 1000,
        })
        res.json({message: 'Successfully Logged In'})
      }
    })
  })
})
app.get('*', function(req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
})

app.listen(port, function() {
  console.log(`running on http://localhost:${port}`)
}) 



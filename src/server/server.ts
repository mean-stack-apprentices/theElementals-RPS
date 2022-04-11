import express from "express";
import cors from "cors";
import path from 'path';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';
import { dbConfig } from "./config/db.js";
import type { GridFSBucket } from "mongodb";
import { Server } from "socket.io";
import { apiRouter } from "./routes/api.routes.js";

const __dirname = path.resolve();
console.log(__dirname)
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://localhost:4200", "http://localhost:3000", "http://localhost:8080"] },
});

export let gfs: GridFSBucket

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: dbConfig.bucketName
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));


app.use(cors());
app.use(express.json())
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));


app.use('/api', apiRouter);


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





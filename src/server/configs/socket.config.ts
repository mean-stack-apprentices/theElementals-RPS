import dotenv from 'dotenv';
import { Server } from "socket.io";
import http from 'http';
import { app } from './express.config.js'

dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://localhost:4200", "http://localhost:8080"] },
});

const access_secret = process.env.ACCESS_SECRET as string;
const port = process.env.PORT || 3000;

export const socketConfig = {
    secret: access_secret,
}

io.on("connection", (socket) => {
    console.log("user connected, ", socket.id)
  
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});

server.listen(port, function (){
    console.log(`listening to port http://localhost:${port}`)
});


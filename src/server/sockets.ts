import { io } from './configs/socket.config.js';

export default io.on("connection", (socket) => {
    console.log("user connected, ", socket.id)
  
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
    })
});
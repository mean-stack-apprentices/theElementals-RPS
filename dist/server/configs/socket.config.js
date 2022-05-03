import { app } from './root.config.js';
import { Server } from "socket.io";
import http from 'http';
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: ["http://localhost:4200", "http://localhost:8080"] },
});
export { server, io };
//# sourceMappingURL=socket.config.js.map
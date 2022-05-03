import { app, envConfig, __dirname } from './configs/root.config.js';
import { apiRouter } from "./routes/api.routes.js";
import { server } from './configs/socket.config.js';
import './sockets.js';
import path from 'path';
app.use('/api', apiRouter);
app.all('*', function (req, res) {
    const filePath = path.join(__dirname, '/dist/client/index.html');
    res.sendFile(filePath);
});
server.listen(envConfig.port, function () {
    console.log(`listening to port http://localhost:${envConfig.port}`);
});
//# sourceMappingURL=server.js.map
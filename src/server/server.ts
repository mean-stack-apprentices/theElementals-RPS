import { app, envConfig } from './configs/root.config.js';
import { apiRouter } from "./routes/api.routes.js";
import path from 'path';
import { SERVER } from './configs/socket.config.js';
import io from './sockets.js';


app.use('/api', apiRouter);

app.all('*', function(req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
})

SERVER.listen(envConfig.port, function (){
  console.log(`listening to port http://localhost:${envConfig.port}`)
});





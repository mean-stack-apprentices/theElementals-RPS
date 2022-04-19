import { app, envConfig } from './configs/root.config.js';
import { apiRouter } from "./routes/api.routes.js";
import { SERVER } from './configs/socket.config.js';
import io from './sockets.js';


app.use('/api', apiRouter);


SERVER.listen(envConfig.port, function (){
  console.log(`listening to port http://localhost:${envConfig.port}`)
});





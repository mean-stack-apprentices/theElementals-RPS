import path from 'path';
import { apiRouter } from "./routes/api.routes.js";
import { app } from './configs/root.config.js'


app.use('/api', apiRouter);


app.all('*', function(req, res) {
  const filePath = path.join(__dirname, '/dist/client/index.html');
  res.sendFile(filePath);
})




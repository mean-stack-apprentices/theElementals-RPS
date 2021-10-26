import express from "express";
import cors from "cors";
import path from 'path';

const __dirname = path.resolve();
console.log(__dirname);
const port = 3000;

const app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.json({test: 'test'})
});
app.get('/users', function(req, res) {
  res.sendFile(path.join(__dirname, 'users.json'));
});

app.listen(port, function() {
  console.log(`running on http://localhost:${port}`)
}) 



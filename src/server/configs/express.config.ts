import express from "express";
import cors from "cors";
import path from 'path';

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/dist/client');

console.log(__dirname)

export const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(clientPath));



  








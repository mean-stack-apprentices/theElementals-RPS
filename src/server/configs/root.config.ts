import express from "express";
import cors from "cors";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
    mongo_uri: process.env.MONGO_URI as string,
    access_secret: process.env.ACCESS_SECRET as string,
    port: process.env.PORT || 3000,

}

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/dist/client');

console.log(__dirname)

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(clientPath));

export { app, envConfig, __dirname } 


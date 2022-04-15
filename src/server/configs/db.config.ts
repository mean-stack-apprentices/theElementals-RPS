import dotenv from 'dotenv';
import mongoose from 'mongoose';
import type { GridFSBucket } from 'mongodb';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import path from 'path';
import crypto from 'crypto'

dotenv.config();

const mongo_uri = process.env.MONGO_URI as string;

export let gfs: GridFSBucket;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB Successfully");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads'
    });
  })
  .catch((err) => console.log("Failed to Connect to DB", err));


const storage = new GridFsStorage({
    url: mongo_uri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: file.originalname,
            bucketName: 'uploads'
          }; 
          resolve(fileInfo);
        });
      });
    },
  });
  
  
  export const upload = multer({
    storage,
  })
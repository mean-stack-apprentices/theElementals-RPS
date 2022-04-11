import path from 'path';
import util from 'util';
import multer from 'multer';
import { GridFsStorage } from "multer-gridfs-storage";
import type { GridFSBucket } from "mongodb";
import crypto from 'crypto';
import { dbConfig } from '../config/db.js'


const storage = new GridFsStorage({
    // url: dbString,
    url: dbConfig.url,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: file.originalname,
            bucketName: dbConfig.bucketName
          }; 
          resolve(fileInfo);
        });
      });
    },
  });
  
  const upload = multer({
    storage,
  }).single('profilePic');

  export const uploadHandler = util.promisify(upload)
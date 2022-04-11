import dotenv from 'dotenv';

dotenv.config();

const mongo_uri = process.env.MONGO_URI as string;

export const dbConfig = {
    url: mongo_uri,
    bucketName: 'uploads'
}

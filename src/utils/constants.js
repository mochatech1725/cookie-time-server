import dotenv from 'dotenv'
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;
const SERVER_PORT = process.env.SERVER_PORT;

export {
    DATABASE_URI,
    SERVER_PORT
};
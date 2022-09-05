import * as dotenv from 'dotenv'
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;
const SERVER_PORT = 3333;

export {
    DATABASE_URI,
    SERVER_PORT
};
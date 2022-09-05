import mongoose from 'mongoose';
import { DATABASE_URI } from './utils/constants.js';

let database = null;

async function databaseConnect() {

    try {

        await mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true } );
        database = mongoose.connection;
        
        database.on("error", () => console.log("Database connection failure"));
        database.once("open", () => console.log("Connection opened!"));
    } catch(error) {
        throw error;
    }
}

function disconnect() {
    try {
        if (database) {
            console.log('Closing connection.')
            database.close();
        }
    } catch (error) {
        console.log(error);
        
    }
}

async function getDatabase() {
    if (!database) {
        await databaseConnect();
    }
    return database;
  }

  
export { getDatabase, databaseConnect };
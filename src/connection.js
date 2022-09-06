import mongoose from 'mongoose';
import { DATABASE_URI } from './utils/constants.js';

let database = null;

async function databaseConnect() {


    console.log('Connecting to mongodb ...');

    await mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true } );
    database = mongoose.connection;
    console.log('Connected!')
    
    database.on("error", () => console.log("Database connection failure"));
    database.once("open", () => console.log("Connection opened!"));
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
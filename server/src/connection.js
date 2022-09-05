import mongoose from 'mongoose';
import { DATABASE_URI } from './utils/constants.js';

class ConnectionManager {

    constructor() {
        this.db = undefined;
    }

    async connect() {

        let self = this;

        try {

            await mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true } );
            self.db = mongoose.connection;
            self.db.on("error", () => console.log("Database connection failure"));

            self.db.once("open", () => console.log("Connection opened!"));
        } catch(error) {
            throw error;
        }
    }

    disconnect() {
        let self = this;
        try {
            if (self.db) {
                console.log('Closing connection.')
                self.db.close();
            }
        } catch (error) {
            console.log(error);
            
        }
    }

}

export { ConnectionManager };
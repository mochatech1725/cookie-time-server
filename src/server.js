import express  from 'express';
import cors  from 'cors';
import { SERVER_PORT } from './utils/constants.js'
import { databaseConnect  } from './connection.js';
import bodyParser from 'body-parser';
import { mainRoute } from './routes/main.routes.js';

try {
    await databaseConnect();

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.options('localhost:8080', cors());
    app.use(bodyParser.urlencoded({extended: true}));

    // app.use(requestLogger()); // Add this in later
    // const sellersRouter = require('./routes/sellers');
    // const productsRouter = require('./routes/products');

    // app.use('/sellers', sellersRouter);
    // app.use('/products', productsRouter);
    app.use('/agent', mainRoute)
    app.use('/', mainRoute)
    const port = SERVER_PORT || 5500;
    console.log(`Connecting to server on port ${port}`)
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
} catch (error) {
    console.log(error)
}


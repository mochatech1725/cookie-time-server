import express  from 'express';
import cors  from 'cors';
import { SERVER_PORT } from './utils/constants.js'
import { ConnectionManager } from './connection.js';
import bodyParser from 'body-parser';
const connectionManager = new ConnectionManager();
await connectionManager.connect();

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
const port = SERVER_PORT || 5500;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
import Router, {request, response} from 'express';
import { ModelCollection } from '../models/model-collection.js';

const mainRoute = Router();
const modelCollection = new ModelCollection();

mainRoute.get("/agent/add", async (request, response) => {
    console.log('Route: /agent/add')
    const {first_name, last_name} = request.query;
    const result = await modelCollection.addAgent({first_name, last_name});
    console.log(result.toString());

    return response.status(200).send(result);

});

mainRoute.get("/agent/show_agents", async (request, response) => {

    console.log('Route: agent/show_agents');
    const results = await modelCollection.show_agents({});

    return response.status(200).send(results);
});


mainRoute.get("/agent/get", async (request, response) => {

    console.log('Route: agent/get');
    const {first_name, last_name} = request.query;
    const results = await modelCollection.show_agents( {first_name, last_name});

    return response.status(200).send(results);
});

mainRoute.get("/", async (request, response) => {

    console.log('Route:root');
    const results = await modelCollection.show_agents();

    return response.status(200).send(results);
});

export { mainRoute };
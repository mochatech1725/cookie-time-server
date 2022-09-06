import Router, {request, response} from 'express';
import { SalesAgentAction } from '../models/sale-agent-model.js'

const mainRoute = Router();

mainRoute.get("/agent/add", async (request, response) => {
    console.log('Route: /agent/add')
    const {first_name, last_name} = request.query;
    const result = await SalesAgentAction.addAgent({first_name, last_name});
    console.log(result.toString());

    return response.status(200).send(result);

});

mainRoute.get("/agent/get_agents", async (request, response) => {

    console.log('Route: agent/get_agents');

    const results = await SalesAgentAction.get_agents({});

    return response.status(200).send(results);
});


mainRoute.get("/agent/get_agent", async (request, response) => {

    console.log('Route: agent/get');
    const {first_name, last_name} = request.query;
    const results = await SalesAgentAction.get_agent( {first_name, last_name});

    return response.status(200).send(results);
});

mainRoute.get("/", async (request, response) => {

    console.log('Route:root');
    const results = await SalesAgentAction.get_agents();

    return response.status(200).send(results);
});

export { mainRoute };
import Router, {request, response} from 'express';
import { SalesAgentAction } from '../models/sale-agent-model.js'
import { ProductAction } from '../models/product-model.js'
import { CustomerAction } from '../models/customer-model.js'
import { InventoryAction } from '../models/inventory-order-model.js'
//import { OrderAction } from '../models/order-model'

const mainRoute = Router();

mainRoute.get("/agent/add", async (request, response) => {
    console.log('Route: /agent/add')
    const {first_name, last_name} = request.query;
    const result = await SalesAgentAction.addAgent({first_name, last_name});
    console.log(result.toString());

    return response.status(200).send(results);

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
    const results = await ProductAction.get_products({});

    return response.status(200).send(results);
});

mainRoute.get("/product/get_products", async (request, response) => {

    console.log('Route: /product/get_products"');

    const results = await ProductAction.get_products({});

    return response.status(200).send(results);
});


mainRoute.get("/customer/get_customers", async (request, response) => {

    console.log('Route: /customer/get_customers');
     const {campaign_id} = request.query;

    const results = await CustomerAction.get_customers({campaign_id});

    return response.status(200).send(results);
});


mainRoute.get("/inventory/get_inventory/", async (request, response) => {

    console.log('Route: /inventory/get_inventory/');
    const {campaign_id} = request.query;

    const results = await InventoryAction.get_inventory({campaign_id});

    return response.status(200).send(results);
});


export { mainRoute };
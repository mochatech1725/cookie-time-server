import Router, {request, response} from 'express';
import { SalesAgentAction } from '../models/sale-agent-model.js'
import { ProductAction } from '../models/product-model.js'
import { CustomerAction } from '../models/customer-model.js'
import { ProductInventoryAction } from '../models/product-inventory-model.js'
import { CustomerOrderAction } from '../models/customer-order-model.js'

const mainRoute = Router();
function convertInt(input, defaultValue=0) {

    if (input === 'undefined') return defaultValue;
    try {
        return parseInt(input)
    } catch (error) {
    }

    return defaultValue;
}
// **************  Agent Routes **************************
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

// **************  Product Routes **************************
mainRoute.get("/product/get_products", async (request, response) => {

    console.log('Route: /product/get_products"');

    const results = await ProductAction.get_products({});

    return response.status(200).send(results);
});

// **************  Customer Routes **************************
mainRoute.get("/customer/get_customers", async (request, response) => {

    console.log('Route: /customer/get_customers');
    const {campaign_id} = request.query;

    const results = await CustomerAction.get_customers({campaign_id});

    return response.status(200).send(results);
});

mainRoute.get("/customer/add", async (request, response) => {
    console.log('Route: /customer/add')
    const {first_name, last_name, city, state, zipcode, email_address, phone_number} = request.query;
    const result = await CustomerAction.add_customer({first_name, last_name, city, state, zipcode, email_address, phone_number});

    return response.status(200).send(result);
});

mainRoute.get("/customer/delete", async (request, response) => {
    console.log('Route: /customer/delete')
    const {customer_id} = request.query;
    const result = await CustomerAction.delete_customer(customer_id);

    return response.status(200).send(result);
});

// **************  Product Inventory Routes **************************
mainRoute.get("/product_inventory/create_inventory", async (request, response) => {
    console.log('Route: /product_inventory/create_inventory')
    const {campaign_id, thinmint,trefoil,samoa,dosido,tagalong,lemonup,toffee_tastic,smores,adventureful,raspberry_rally} = request.query;
    const result = await ProductInventoryAction.update_inventory({campaign_id, 
        thinmint: convertInt(thinmint),
        trefoil: convertInt(trefoil),
        samoa: convertInt(samoa),
        dosido: convertInt(dosido),
        tagalong: convertInt(tagalong),
        lemonup: convertInt(lemonup),
        toffee_tastic: convertInt(toffee_tastic),
        smores: convertInt(smores),
        adventureful: convertInt(adventureful),
        raspberry_rally: convertInt(raspberry_rally)
    });

    return response.status(200).send(result);
});

mainRoute.get("/product_inventory/get_inventory/", async (request, response) => {

    console.log('Route: /product_inventory/get_inventory/');
    const {campaign_id} = request.query;

    const results = await ProductInventoryAction.get_inventory(campaign_id );
    return response.status(200).send(results);
});

mainRoute.get("/product_inventory/update/", async (request, response) => {

    console.log('Route: /product_inventory/update/');
    const {campaign_id, thinmint,trefoil,samoa,dosido,tagalong,lemonup,toffee_tastic,smores,adventureful,raspberry_rally} = request.query;

    const results = await ProductInventoryAction.update_inventory({ campaign_id, 
        thinmint: convertInt(thinmint),
        trefoil: convertInt(trefoil),
        samoa: convertInt(samoa),
        dosido: convertInt(dosido),
        tagalong: convertInt(tagalong),
        lemonup: convertInt(lemonup),
        toffee_tastic: convertInt(toffee_tastic),
        smores: convertInt(smores),
        adventureful: convertInt(adventureful),
        raspberry_rally: convertInt(raspberry_rally)
    });

    return response.status(200).send(results);
});

// **************  Customer Order Routes **************************
mainRoute.get("/customer_order/add/", async (request, response) => {
    console.log('Route: /customer_order/add')
    const {campaign_id, customer_id,order_source,thinmint,trefoil,samoa,dosido,tagalong,lemonup,toffee_tastic,smores,adventureful,raspberry_rally} = request.query;
    const result = await CustomerOrderAction.new_order({campaign_id,
        customer_id,order_source,
        thinmint: convertInt(thinmint),
        trefoil: convertInt(trefoil),
        samoa: convertInt(samoa),
        dosido: convertInt(dosido),
        tagalong: convertInt(tagalong),
        lemonup: convertInt(lemonup),
        toffee_tastic: convertInt(toffee_tastic),
        smores: convertInt(smores),
        adventureful: convertInt(adventureful),
        raspberry_rally: convertInt(raspberry_rally)
    });

    return response.status(200).send(result);
});

mainRoute.get("/customer_order/get_orders/", async (request, response) => {

    console.log('Route: /customer_order/get_orders/');
    const {campaign_id} = request.query;

    const results = await CustomerOrderAction.get_orders(campaign_id);
    return response.status(200).send(results);
});

mainRoute.get("/customer_order/get_customer_orders/", async (request, response) => {

    console.log('Route: /customer_order/get_orders/');
    const {campaign_id, customer_id} = request.query;

    const results = await CustomerOrderAction.get_orders(campaign_id, customer_id);
    return response.status(200).send(results);
});

mainRoute.get("/customer_order/update/", async (request, response) => {

    console.log('Route: /customer_order/update/');
    const {customer_id, order_id,thinmint,trefoil,samoa,dosido,tagalong,lemonup,toffee_tastic,smores,adventureful,raspberry_rally} = request.query;

    const results = await CustomerOrderAction.update_order({ customer_id, 
        order_id, 
        thinmint: convertInt(thinmint),
        trefoil: convertInt(trefoil),
        samoa: convertInt(samoa),
        dosido: convertInt(dosido),
        tagalong: convertInt(tagalong),
        lemonup: convertInt(lemonup),
        toffee_tastic: convertInt(toffee_tastic),
        smores: convertInt(smores),
        adventureful: convertInt(adventureful),
        raspberry_rally: convertInt(raspberry_rally)
    });

    return response.status(200).send(results);
});
export { mainRoute };
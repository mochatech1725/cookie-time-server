import {SalesAgent} from './sale-agent-model.js';

class ModelCollection {

    constructor() {}

    async addAgent(record) {
        try {
            const result = await SalesAgent.create(record);
            console.log(result.toString());
            return result._doc;
        } catch (error) {
            console.log(error);
        }
        return {}
    }
    
    async show_agents(query_params) {
        try {
            const docs = await SalesAgent.find({}).exec();
            return docs; 
        } catch (error) {
            console.log(error);
        }
        return {}
    }


}

export { ModelCollection };
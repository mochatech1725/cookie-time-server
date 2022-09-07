import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SalesAgentSchema = new Schema({
  agent_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId(),required: true  },
  first_name: { type: String, required: true, },
  last_name: { type: String, required: true, },
  created_at: {type: Date, default: Date.now}
},
{collection: 'sales-agent'}
);
export const SalesAgent = mongoose.model('SalesAgent', SalesAgentSchema);

export class SalesAgentAction {
  constructor() {}

  static async addAgent(record) {
    try {
        const result = await SalesAgent.create(record);
        console.log(result.toString());
        return result._doc;
    } catch (error) {
        console.log(error);
    }
    return {}
}

  static async get_agent(agent_id) {
      try {
          const docs = await SalesAgent.find({agent_id}).exec();
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return {}
  }

  static async get_agents() {
      try {
          const docs = await SalesAgent.find({}).exec();
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return {}
  }
}

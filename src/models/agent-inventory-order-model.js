import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AgentInventoryOrderSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    agent_id:  { type: Schema.Types.ObjectId},
    order_date: { type: Date, required: true , default: Date.now},
    thinmint: {type: Schema.Types.Number, default: 0}, 
    trefoil: {type: Schema.Types.Number, default: 0}, 
    samoa: {type: Schema.Types.Number, default: 0}, 
    dosido: {type: Schema.Types.Number, default: 0}, 
    tagalong: {type: Schema.Types.Number, default: 0}, 
    lemonup: {type: Schema.Types.Number, default: 0}, 
    toffee_tastic: {type: Schema.Types.Number, default: 0}, 
    smores: {type: Schema.Types.Number, default: 0}, 
    adventureful: {type: Schema.Types.Number, default: 0}, 
    raspberry_rally: {type: Schema.Types.Number, default: 0}
  },
  {collection: 'agent-inventory-order'}
  );
export const AgentInventoryOrder = mongoose.model('AgentInventoryOrder', AgentInventoryOrderSchema);

export class AgentInventoryAction {

  constructor() {}

  static async get_inventory(campaign_id, agent_id) {
      try {
          const docs = await InventoryOrder.find({campaign_id, agent_id}).exec();
          
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }

  static async new_inventory(record) {
    try {
        const result = await AgentInventoryOrder.create(record);
        console.log(result.toString());
        return result._doc;
    } catch (error) {
        console.log(error);
    }
    return {}
  } 

  static async update_inventory(record) {
    try {
        const doc = await AgentInventoryOrder.find({campaign_id, agent_id}).exec();
        doc.thinmint = record.thinmint;
        doc.trefoil = record.trefoil;
        doc.samoa = record.samoa;
        doc.dosido = record.dosido;
        doc.tagalong = record.tagalong;
        doc.lemonup = record.lemonup;
        doc.toffee_tastic = record.toffee_tastic;
        doc.smores = record.smores;
        doc.adventureful = record.adventureful;
        doc.raspberry_rally = record.raspberry_rally;

        doc.save();
        return doc; 
    } catch (error) {
        console.log(error);
    }
    return []
  }
}
import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InventoryOrderSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},
    campaign_id: { type: Schema.Types.ObjectId, required: true },
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
  {collection: 'inventory-order'}
  );
export const InventoryOrder = mongoose.model('InventoryOrder', InventoryOrderSchema);

export class InventoryOrderAction {
  constructor() {}

  static async get_orders(campaign_id) {
    try {
        const docs = await InventoryOrder.find({campaign_id});
        
        return docs; 
    } catch (error) {
        console.log(error);
    }
    return []
}

  static async new_order(new_order) {
    try {
        const result = await InventoryOrder.create(new_order);
        console.log(result.toString());
        return result._doc;
    } catch (error) {
        console.log(error);
    }
    return {}
  } 

  static async update_order(record) {
    try {
      const options = { upsert: true, new: false, setDefaultsOnInsert: true };
      const query = { campaign_id:  mongoose.Types.ObjectId(record.campaign_id), 
        order_id:  mongoose.Types.ObjectId(record.order_id)};
    
      const result = await InventoryOrder.findOneAndUpdate(query, record,options);
      console.log(result.toString());
      return result._doc; 
    } catch (error) {
        console.log(error);
    }
    return {}
  }

  static async delete_order(order_id, campaign_id) {
    try {
        const result = await InventoryOrder.deleteOne({order_id, campaign_id});
        return result;
    } catch (error) {
        console.log(error);
    }

    return undefined;
  } 
}
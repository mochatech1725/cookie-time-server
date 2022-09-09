import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
import {InventoryOrderItemSchema } from './inventory-order-item-model.js'

export const InventoryOrderSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    agent_id:  { type: Schema.Types.ObjectId},
    order_date: { type: Date, required: true , default: Date.now},
    order_items: [InventoryOrderItemSchema]
  },
  {collection: 'inventory-order'}
  );
export const InventoryOrder = mongoose.model('InventoryOrder', InventoryOrderSchema);

export class InventoryAction {

  constructor() {}

  static async get_inventory(campaign_id) {
      try {
          const docs = await InventoryOrder.find({campaign_id: campaign_id}).exec();
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }
}
import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const InventoryOrderSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    agent_id:  { type: Schema.Types.ObjectId},
    order_date: { type: Date, required: true , default: Date.now},
    order_items: [InventoryOrderItemSchema]
  },
  {collection: 'inventory-order'}
  );
export const InventoryOrder = mongoose.model('InventoryOrder', InventoryOrderSchema);
import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const InventoryOrderItemSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, required: true  },
    quantity: { type: Number, required: true },
    returning: { type: Boolean, default: false },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'inventory-order-item'}
  );
export const InventoryOrderItem = mongoose.model('InventoryOrderItem', InventoryOrderItemSchema);
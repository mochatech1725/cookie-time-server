import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InventoryOrderItemSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, required: true  },
    quantity: { type: Number, required: true },
    returning: { type: Boolean },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'inventory-order-item'}
  );
export const InventoryOrderItem = mongoose.model('InventoryOrderItem', InventoryOrderItemSchema);
import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { ProductInventoryItemSchema } from './product-inventory-item-model.js';

const ProductInventoryItemSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    inventory_items: [ProductInventoryItemSchema],
    quantity: { type: Number, required: true },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'product-inventory'}
  );
export const ProductInventoryItem = mongoose.model('ProductInventory', ProductInventorySchema);

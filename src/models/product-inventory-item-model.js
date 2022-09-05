import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductInventoryItemSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, required: true },
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'product-inventory-item'}
  );
export const ProductInventoryItem = mongoose.model('ProductInventoryItem', ProductInventoryItemSchema);

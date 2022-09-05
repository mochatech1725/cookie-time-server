import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { OrderItemSchema } from './order-item-model.js';

const CustomerOrderSchema = new Schema({
    customer_id: { type: Schema.Types.ObjectId, required: true },
    order_id: { type: Schema.Types.ObjectId, required: true },
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    order_source: {type: String, required: true},
    payment_id: {type: Schema.Types.ObjectId}, 
    order_date: { type: Date, required: true , default: Date.now},
    order_items: [OrderItemSchema]
  },
  {collection: 'customer-order'}
  );
export const CustomerOrder = mongoose.model('CustomerOrder', CustomerOrderSchema);
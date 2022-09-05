import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, required: true },
    customer_id: { type: Schema.Types.ObjectId, required: true },
    order_id: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'order-item'}
  );
export const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
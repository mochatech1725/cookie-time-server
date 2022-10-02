import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const CustomerPaymentSchema = new Schema({
    payment_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    customer_id: { type: Schema.Types.ObjectId},
    payment_date: {type: Date, required: true},
    payment_amount: { type: Number, required: true },
    payment_type: {type: String, required: true, enum : ['AGENT_PAYMENT','TROOP_PAYMENT','CUSTOMER_PAYMENT'],},
    payment_method: {type: String, required: true},
    campaign_id: { type: Schema.Types.ObjectId, required: true }
  },
  {collection: 'customer-payment'}
  );
export const CustomerPayment = mongoose.model('CustomerPayment', CustomerPaymentSchema);
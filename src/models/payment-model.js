import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const PaymentSchema = new Schema({
    customer_id: { type: Schema.Types.ObjectId, required: true },
    payment_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    payment_type: {type: String, required: true, enum : ['AGENT_PAYMENT','TROOP_PAYMENT'],},
    payment_method: {type: String, required: true},
    payment_date: {type: Date, required: true},
    payment_amount: { type: Number, required: true }
  },
  {collection: 'payment'}
  );
export const Payment = mongoose.model('Payment', PaymentSchema);
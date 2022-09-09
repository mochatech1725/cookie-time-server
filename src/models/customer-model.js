import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    customer_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId(),required: true  },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
    email_address: { type: String },
    phone_number: { type: String, required: true },
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'customer'}
  );
export const Customer = mongoose.model('Customer', CustomerSchema);

export class CustomerAction {
  constructor() {}

  static async get_customers() {
      try {
          const docs = await Customer.find({}).exec();
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }
}

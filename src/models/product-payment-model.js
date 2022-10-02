import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProjectPaymentSchema = new Schema({
    payment_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    payment_date: {type: Date, required: true},
    payment_amount: { type: Number, required: true },
    payment_method: {type: String, required: true},
    campaign_id: { type: Schema.Types.ObjectId, required: true }
  },
  {collection: 'product-payment'}
  );
export const ProductPayment = mongoose.model('ProductPayment', ProductPaymentSchema);

export class ProductPaymentAction {
    constructor() {}
  
    static async get_payments(campaign_id) {
        try {
            const docs = await ProductPayment.find({campaign_id}).exec();
            return docs; 
        } catch (error) {
            console.log(error);
        }
        return []
    }

    static async add_payment(new_payment) {
          try {
              const result = await ProductPayment.create(new_payment);
              console.log(result.toString());
              return result._doc;
          } catch (error) {
              console.log(error);
          }
          return {}
    } 
  
    static async update_payment(payment) {
      try {
          const options = { upsert: true, new: true, setDefaultsOnInsert: true };
          const query = { payment_id: payment.payment_id};
          const result = await ProductPayment.findOneAndUpdate(query, payment,options);
          console.log(result.toString());
          return result._doc;
      } catch (error) {
          console.log(error);
      }
      return {}
   } 
  
      static async delete_payment(payment_id) {
          try {
              const result = await ProductPayment.deleteOne({payment_id});
              return result;
          } catch (error) {
              console.log(error);
          }
  
          return undefined;
      } 
}
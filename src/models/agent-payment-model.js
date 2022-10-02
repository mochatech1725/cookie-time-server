import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const AgentPaymentSchema = new Schema({
    payment_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    agent_id: { type: Schema.Types.ObjectId, required: true},
    payment_date: {type: Date, required: true},
    payment_amount: { type: Number, required: true },
    payment_method: {type: String, required: true},
    campaign_id: { type: Schema.Types.ObjectId, required: true }
  },
  {collection: 'agent-payment'}
  );
export const AgentPayment = mongoose.model('AgentPayment', AgentPaymentSchema);

export class AgentPaymentAction {
    constructor() {}
  
    static async get_payments(campaign_id) {
        try {
            const docs = await AgentPayment.find({campaign_id}).exec();
            return docs; 
        } catch (error) {
            console.log(error);
        }
        return []
    }
    static async get_agent_payment(campaign_id, agent_id) {
        try {
            const docs = await AgentPayment.find({campaign_id, agent_id}).exec();
            return docs; 
        } catch (error) {
            console.log(error);
        }
        return []
    }

    static async add_payment(new_payment) {
          try {
              const result = await AgentPayment.create(new_payment);
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
          const result = await AgentPayment.findOneAndUpdate(query, payment,options);
          console.log(result.toString());
          return result._doc;
      } catch (error) {
          console.log(error);
      }
      return {}
   } 
  
      static async delete_payment(payment_id) {
          try {
              const result = await AgentPayment.deleteOne({payment_id});
              return result;
          } catch (error) {
              console.log(error);
          }
  
          return undefined;
      } 
}
  
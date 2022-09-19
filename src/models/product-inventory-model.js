import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductInventorySchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, required: true },
    thinmint: {type: Schema.Types.Number, default: 0}, 
    trefoil: {type: Schema.Types.Number, default: 0}, 
    samoa: {type: Schema.Types.Number, default: 0}, 
    dosido: {type: Schema.Types.Number, default: 0}, 
    tagalong: {type: Schema.Types.Number, default: 0}, 
    lemonup: {type: Schema.Types.Number, default: 0}, 
    toffee_tastic: {type: Schema.Types.Number, default: 0}, 
    smores: {type: Schema.Types.Number, default: 0}, 
    adventureful: {type: Schema.Types.Number, default: 0}, 
    raspberry_rally: {type: Schema.Types.Number, default: 0},
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'product-inventory'}
  );
export const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);

export class ProductInventoryAction {

  constructor() {}

  static async get_inventory(campaign_id) {
      try {
         let docs;
          if (campaign_id === undefined) {
            docs = await ProductInventory.find({}).exec();
          } else {
            docs = await ProductInventory.find({campaign_id}).exec();
          }
          
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }

  static async update_inventory(record) {
    try {
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      const query = { campaign_id: record.campaign_id};
      const result = await ProductInventory.findOneAndUpdate(query, record,options);
      return result._doc; 
    } catch (error) {
        console.log(error);
    }
    return []
  }
}
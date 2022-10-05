import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId(), required: true },
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    year_introduced: { type: Number },
    active: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'product'}
  );
export const Product = mongoose.model('Product', ProductSchema);

export class ProductAction {
  constructor() {}

  static async get_products() {
      try {
          const docs = await Product.find({});
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }

  static async new_product(product) {
    try {
        const result = await Product.create(product);
        console.log(result.toString());
        return result._doc;
    } catch (error) {
        console.log(error);
    }
    return {}
  } 

  static async update_product(record) {
    try {
      const options = { upsert: true, new: false, setDefaultsOnInsert: true };
      const query = { product_id:  mongoose.Types.ObjectId(record.product_id), 
        product_name:  record.product_name, 
        year_introduced:  record.year_introduced,
        active: record.active
      };
    
      const result = await Product.findOneAndUpdate(query, record,options);
      console.log(result.toString());
      return result._doc; 
    } catch (error) {
        console.log(error);
    }
    return {}
  }

  static async delete_product(product_id) {
    try {
        const result = await Product.deleteOne({product_id});
        return result;
    } catch (error) {
        console.log(error);
    }

    return undefined;
} 
}

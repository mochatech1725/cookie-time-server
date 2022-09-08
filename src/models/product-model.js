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

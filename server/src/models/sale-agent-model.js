import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SalesAgentSchema = new Schema({
  agent_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
  first_name: { type: String, required: true, },
  last_name: { type: String, required: true, },
  created_at: {type: Date, default: Date.now}
},
{collection: 'sales-agent'}
);
export const SalesAgent = mongoose.model('SalesAgent', SalesAgentSchema)
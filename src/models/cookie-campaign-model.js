import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CookieCampaignSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    campaign_name: { type: String, required: true },
    campaign_year: {type: Number, required: true},
    created_at: {type: Date, default: Date.now}
  },
  {collection: 'cookie-campaign'}
  );
export const CookieCampaign = mongoose.model('CookieCampaign', CookieCampaignSchema);

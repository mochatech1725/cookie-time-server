import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CampaignDonationSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId(), required: true },
    customer_id: { type: Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    payment_method: { type: String, required: true },
    donation_date: { type: Date, required: true}
  },
  {collection: 'campaign-donation'}
  );
export const CampaignDonation = mongoose.model('CampaignDonation', CampaignDonationSchema);
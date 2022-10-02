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

export class CookieCampaignAction {
  constructor() {}

  static async get_campaigns() {
      try {
          const docs = await CookieCampaign.find({}).sort({campaign_year:-1});
          return docs; 
      } catch (error) {
          console.log(error);
      }
      return []
  }

  static async add_campaign(new_campaign) {
        try {
            const result = await CookieCampaign.create(new_campaign);
            console.log(result.toString());
            return result._doc;
        } catch (error) {
            console.log(error);
        }
        return {}
  } 

  static async update_campaign(campaign) {
    try {
        const options = { upsert: true, new: true, setDefaultsOnInsert: true };
        const query = { campaign_id: campaign.campaign_id};
        const result = await CookieCampaign.findOneAndUpdate(query, campaign,options);
        console.log(result.toString());
        return result._doc;
    } catch (error) {
        console.log(error);
    }
    return {}
 } 

    static async delete_customer(campaign_id) {
        try {
            const result = await CookieCampaign.deleteOne({campaign_id});
            return result;
        } catch (error) {
            console.log(error);
        }

        return undefined;
    } 
}

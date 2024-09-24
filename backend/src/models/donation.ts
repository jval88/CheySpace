import mongoose, { Document, Schema } from "mongoose";

interface IDonation extends Document {
  name: string;
  email: string;
  message: string;
  amount: number;
}

const donationSchema: Schema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  email: { type: String, required: true },
  message: { type: String },
});

const Donation = mongoose.model<IDonation>("Donation", donationSchema);

export default Donation;

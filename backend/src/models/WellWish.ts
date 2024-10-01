import mongoose, { Document, Schema } from "mongoose";

interface IWellWish extends Document {
  name: string;
  message: string;
  date: Date;
}

const WellWishSchema: Schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const WellWish = mongoose.model<IWellWish>("WellWish", WellWishSchema);

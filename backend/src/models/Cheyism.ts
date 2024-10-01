import mongoose, { Document, Schema } from "mongoose";

interface ICheyism extends Document {
  content: string;
}

const CheyismSchema: Schema = new Schema({
  content: { type: String, required: true },
});

export const Cheyism = mongoose.model<ICheyism>("Cheyism", CheyismSchema);

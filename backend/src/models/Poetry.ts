import mongoose, { Document, Schema } from "mongoose";

interface IPoetry extends Document {
  title: string;
  content: string;
  author: string;
}

const PoetrySchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

export const Poetry = mongoose.model<IPoetry>("Poetry", PoetrySchema);

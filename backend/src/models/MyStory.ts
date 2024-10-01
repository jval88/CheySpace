import mongoose, { Document, Schema } from "mongoose";

interface IMyStory extends Document {
  name: string;
  message: string;
  imageUrl: string;
  date: Date;
}

const MyStorySchema: Schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const MyStory = mongoose.model<IMyStory>("MyStory", MyStorySchema);

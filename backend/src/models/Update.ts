import mongoose, { Document, Schema } from "mongoose";

interface IUpdate extends Document {
  name: string;
  message: string;
  date: Date;
}

const UpdateSchema: Schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Update = mongoose.model<IUpdate>("Update", UpdateSchema);

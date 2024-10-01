import mongoose, { Document, Schema } from "mongoose";

interface ISocialMediaLink extends Document {
  platform: string;
  url: string;
}

const SocialMediaLinkSchema: Schema = new Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
});

export const SocialMediaLink = mongoose.model<ISocialMediaLink>(
  "SocialMediaLink",
  SocialMediaLinkSchema
);

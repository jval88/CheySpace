import express from "express";
import { ensureAdmin } from "../middleware/authMiddleware";
import { MyStory } from "../models/MyStory";
import { Poetry } from "../models/Poetry";
import { Cheyism } from "../models/Cheyism";
import { Update } from "../models/Update";
import { SocialMediaLink } from "../models/SocialMediaLink"; // Assuming these models are set up

const router = express.Router();

// Manage MyStory
router.get("/mystory", ensureAdmin, async (req, res) => {
  const stories = await MyStory.find();
  res.json(stories);
});

// Manage Poetry
router.get("/poetry", ensureAdmin, async (req, res) => {
  const poems = await Poetry.find();
  res.json(poems);
});

// Manage Cheyisms
router.get("/cheyisms", ensureAdmin, async (req, res) => {
  const cheyisms = await Cheyism.find();
  res.json(cheyisms);
});

// Manage Updates
router.get("/updates", ensureAdmin, async (req, res) => {
  const updates = await Update.find();
  res.json(updates);
});

// Manage Social Media Links
router.get("/social-media", ensureAdmin, async (req, res) => {
  const links = await SocialMediaLink.find();
  res.json(links);
});

export default router;

import express from "express";
import { MyStory } from "../models/MyStory";
import { ensureAdmin } from "../middleware/authMiddleware";

const router = express.Router();

// Get all MyStory entries (Public)
router.get("/", async (req, res) => {
  try {
    const stories = await MyStory.find();
    res.json(stories);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

// Get a single MyStory entry by ID (Admin only)
router.get("/:id", ensureAdmin, async (req, res) => {
  try {
    const story = await MyStory.findById(req.params.id);
    if (!story) return res.status(404).json({ message: "Story not found" });
    res.json(story);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;

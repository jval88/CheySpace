import express from "express";
import multer from "multer";
import { MyStory } from "../models/MyStory";
import { ensureAdmin } from "../middleware/authMiddleware";
import { Request } from "express";
// import { FileArray, UploadedFile } from "express-fileupload";

const router = express.Router();

// Extend the Request interface to include multer's file and files properties
export interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Create a new MyStory entry (Admin only) with image upload
router.post(
  "/",
  ensureAdmin,
  upload.single("imageFile"),
  async (req: express.Request, res) => {
    const request = req as MulterRequest; // Type casting the request to MulterRequest
    try {
      const { name, message } = request.body;
      const imageUrl = request.file
        ? `/uploads/${request.file.filename}`
        : null;
      const newStory = new MyStory({ name, message, imageUrl });
      const savedStory = await newStory.save();
      res.status(201).json(savedStory);
    } catch (err) {
      res.status(500).json({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }
);

// Update an existing MyStory entry (Admin only)
router.put("/:id", ensureAdmin, async (req, res) => {
  try {
    const { name, message, imageUrl } = req.body;
    const updatedStory = await MyStory.findByIdAndUpdate(
      req.params.id,
      { name, message, imageUrl },
      { new: true }
    );
    if (!updatedStory)
      return res.status(404).json({ message: "Story not found" });
    res.json(updatedStory);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

// Delete a MyStory entry (Admin only)
router.delete("/:id", ensureAdmin, async (req, res) => {
  try {
    const deletedStory = await MyStory.findByIdAndDelete(req.params.id);
    if (!deletedStory)
      return res.status(404).json({ message: "Story not found" });
    res.json({ message: "Story deleted" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;

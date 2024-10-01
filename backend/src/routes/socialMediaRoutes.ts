// src/routes/socialMediaLinks.ts
import { Router, Request, Response } from "express";
import { SocialMediaLink } from "../models/SocialMediaLink";

const router = Router();

// Get all social media links
router.get("/social-media-links", async (req: Request, res: Response) => {
  try {
    const links = await SocialMediaLink.find();
    res.json(links);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Add a new social media link
router.post("/social-media-links", async (req: Request, res: Response) => {
  const { platform, url } = req.body;

  try {
    const newLink = new SocialMediaLink({ platform, url });
    await newLink.save();
    res.json(newLink);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

export default router;

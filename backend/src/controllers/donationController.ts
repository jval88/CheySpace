import { Request, Response } from "express";
import Donation from "../models/donation";

export const getDonations = async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createDonation = async (req: Request, res: Response) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

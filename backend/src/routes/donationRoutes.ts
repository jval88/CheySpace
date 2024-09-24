import express = require("express");
import {
  getDonations,
  createDonation,
} from "../controllers/donationController";

const router = express.Router();

router.route("/").get(getDonations).post(createDonation);

export default router;

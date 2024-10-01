import { Request, Response, Router } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const router = Router();

router.post("/donate", async (req: Request, res: Response) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error processing payment:", error);
      res.status(500).json({ message: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

export default router;

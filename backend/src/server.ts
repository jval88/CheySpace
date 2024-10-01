import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import donationRoutes from "./routes/donationRoutes";
import myStoryRoutes from "./routes/myStoryRoutes";
import adminMyStoryRoutes from "./routes/adminMyStoryRoutes";
import socialMediaRoutes from "./routes/socialMediaRoutes";
import adminRoutes from "./routes/adminRoutes";
import authRoutes from "./routes/authRoutes"; // Import the auth routes
import session from "express-session";
import passport from "passport";
import "./config/passport";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Update this if your frontend runs on a different port
    credentials: true,
  })
);

app.use(express.json()); // To parse JSON bodies

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_fallback_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Google Authentication Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/admin");
  }
);

app.get("/admin", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Admin Dashboard");
  } else {
    res.redirect("/auth/google");
  }
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Authentication Routes
app.use("/auth", authRoutes);

// Donation Routes
app.use("/api/donations", donationRoutes);

// MyStory Routes
app.use("/api/mystory", myStoryRoutes);
app.use("/admin/mystory", adminMyStoryRoutes);

// SocialMedia Routes
app.use("/api/socialMedia", socialMediaRoutes);

// Admin Routes
app.use("/admin", adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

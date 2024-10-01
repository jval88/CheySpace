import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Hardcoded admin credentials from .env
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.status(200).json({ message: "Login successful", isAdmin: true });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ message: "Logged out" });
  });
});

// Simplified Admin Check Route
router.get("/check-admin", (req, res) => {
  // Since all users are admins, just return a success response
  res.json({ isAdmin: true });
});

// Simplified Auth Check Route
router.get("/check-auth", (req, res) => {
  // Assuming `req.isAuthenticated()` is a method that checks if the user is logged in
  if (req.isAuthenticated()) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

export default router;

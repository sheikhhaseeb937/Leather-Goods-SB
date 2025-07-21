// index.js or server.js (in root)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoConnect from "./src/config/db.js"; // ✅ FIXED path
import authRoutes from "./src/routes/auth.route.js";
import imageRoutes from "./src/routes/image.routes.js";

// Load .env variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: "*", // 🔒 Consider restricting this in production
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json()); // To parse incoming JSON

// Connect to MongoDB
mongoConnect(); // Ensure this has a try/catch or promise error handling

// Routes
app.use("/api/auth", authRoutes);     // Example: POST /api/auth/login
app.use("/api/images", imageRoutes);  // Example: POST /api/images/upload

// Port
const PORT = process.env.PORT || 8000;

// Start Server (for local testing)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Optional: export for Vercel if using serverless functions
export default app;

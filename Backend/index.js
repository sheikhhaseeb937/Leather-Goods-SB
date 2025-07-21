import express from "express";
import cors from "cors";
import mongoConnect from "../backend/src/config/db.js";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import imageroutes from "./src/routes/image.routes.js";

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Port
const PORT = 8000;

// CORS Middleware
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Body Parser Middleware
app.use(express.json());

// Connect to MongoDB
mongoConnect();



///api
app.use("/",authRoutes)

///api images user
app.use("/",imageroutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// index.js or server.js (in root)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoConnect from "./src/config/db.js"; 
import authRoutes from "./src/routes/auth.route.js";

import imageroutes from "./src/routes/image.routes.js";
import productRoute from "./src/routes/product.route.js";
import { orderRoutes } from "./src/routes/order.routes.js";

// Load .env variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json()); // To parse incoming JSON

// Connect to MongoDB
mongoConnect(); // Ensure this has a try/catch or promise error handling

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Loan Application API");
})

///api
app.use("/api",authRoutes)

///api images user ///product images
app.use("/api",imageroutes) 

///api Product create
app.use("/api",productRoute) 
///order api
app.use("/api",orderRoutes)



// Port
const PORT = process.env.PORT || 8000;

// Start Server (for local testing)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Optional: export for Vercel if using serverless functions
export default app;

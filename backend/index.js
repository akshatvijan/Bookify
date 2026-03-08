const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// ✅ Routes
const bookRoutes = require("./src/books/bookroute.js");
const orderRoutes = require("./src/orders/orderRoute.js");
const userRoutes = require("./src/users/userRoute.js");
const adminRoutes = require("./src/stats/adminStats.js");

// ✅ Admin creator import
const { createDefaultAdmin } = require("./src/users/userContoller");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// ✅ MongoDB Connection
const db = process.env.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(db);
    console.log("✅ Connected to MongoDB");

    // 🔥 Automatically create default admin
    await createDefaultAdmin();
  } catch (err) {
    console.log("❌ Database connection error:", err);
  }
}

main();

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("🚀 Bookify Backend Running...");
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
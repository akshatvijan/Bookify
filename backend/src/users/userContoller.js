const jwt = require("jsonwebtoken");
const User = require("./userModel");
const bcrypt = require("bcrypt");

// 🔥 Create default admin if not exists
module.exports.createDefaultAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ username: "admin" });

    if (!existingAdmin) {
      await User.create({
        username: "admin",
        password: "admin123",
        role: "admin",
      });

      console.log("✅ Default Admin Created (username: admin, password: admin123)");
    } else {
      console.log("ℹ️ Admin already exists");
    }
  } catch (err) {
    console.log("Error creating default admin:", err);
  }
};

// 🔐 Admin Login
module.exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const jwtSecret = process.env.JWT_SECRET_KEY;

  try {
    const admin = await User.findOne({ username });

    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).send({
      message: "Authentication successful",
      token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (err) {
    console.log("Failed to login the admin", err);
    res.status(500).send({ message: "Failed to login the admin" });
  }
};
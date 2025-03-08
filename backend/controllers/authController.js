const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, email, password, phone, userType } = req.body;

  if (!name || !email || !password || !phone || !userType) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING user_id, name, email, role",
      [name, email, hashedPassword, phone, userType]
    );

    const newUser = result.rows[0];

    const token = jwt.sign(
      { user_id: newUser.user_id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token,
    });

  } catch (err) {
    console.error(err);
    
    if (err.code === "23505") { 
      return res.status(400).json({ message: "Email or phone already in use" });
    }

    res.status(500).json({ message: "Registration failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { user_id: user.user_id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token, role: user.role });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

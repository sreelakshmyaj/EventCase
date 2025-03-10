const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Handle "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Make sure user object contains user_id
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

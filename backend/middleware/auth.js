const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized. Missing or Invalid Token." });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Token Missing." });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode?.id) {
      return res.status(401).json({ success: false, message: "Not Authorized. Invalid Token." });
    }

    req.user = await User.findById(tokenDecode.id).select("-password");
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid or Expired Token" });
  }
};

module.exports = userAuth;

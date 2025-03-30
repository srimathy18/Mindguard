import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Missing or Invalid Token.' });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Token Missing.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Invalid Token.' });
    }

    req.userId = decoded.id; // Store userId in req.userId
    req.user = decoded; // Store entire decoded token in req.user for full access
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ success: false, message: 'Invalid or Expired Token' });
  }
};

export default userAuth;

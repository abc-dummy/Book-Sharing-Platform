// middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AyushBookMittalSpaceMemory';

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

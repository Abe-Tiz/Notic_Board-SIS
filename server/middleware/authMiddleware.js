// authMiddleware.js
const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN_VALUE

    if (!token) {
       console.log("Access denied. No token provided.");
    return res
      .status(403)
          .send({ message: "Access denied. No token provided." });
     
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("decoded:", decoded);
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token." });
  }
};

module.exports = isAuthenticated;

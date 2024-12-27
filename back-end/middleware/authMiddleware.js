const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming the format is "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace with your actual secret
    req.user = decoded; // Attach the decoded user information to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { authenticate };
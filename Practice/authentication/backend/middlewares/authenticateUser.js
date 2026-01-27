import { getTokenData } from '../services/JWT.js';

// -------------------- Authenticate User --------------------
export const authenticateUser = (req, res, next) => {
  try {
    const token = req.cookies?.s_id; // JWT stored in cookie
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided.',
      });
    }

    const userData = getTokenData(token);
    if (!userData) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid or expired token.',
      });
    }

    // Attach user data to request object
    req.user = userData;
    next(); // Proceed to next middleware or route
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong during authentication.',
    });
  }
};

// -------------------- Authorize Users by Role --------------------
export const authorizeUsers = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No user data found.',
      });
    }

    const { role } = req.user;

    // Check if user's role is allowed
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: You are not authorized to access this resource.',
      });
    }

    // User is authorized
    next();
  };
};

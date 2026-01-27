import { getSession } from '../services/session.js';

export function restrictToLoggedinUserOnly(req, res, next) {
  // Allow public routes
  if (req.path === '/login' || req.path === '/signup') {
    return next();
  }

  // Get token from cookies (cookie-parser required)
  const cookieToken = req.cookies?.u_id;

  if (!cookieToken) {
    req.user = null;
    return res.redirect('/login');
  }

  const user = getSession(cookieToken);

  if (!user) {
    req.user = null;
    return res.redirect('/login');
  }

  // Attach user to request
  req.user = user;
  next();
}

export function checkAuthoried(role = []) {
  return (req, res, next) => {
    if (!req.user) {
      res.redirect('/login');
    }
    if (!role.includes(req.user.role)) {
      return res.end('unauthorized');
    }
    next();
  };
}

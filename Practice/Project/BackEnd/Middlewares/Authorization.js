import { verifyJWT } from '../Services/JWT.js';

export const checkAuthorize = async (req, res, next) => {
  try {
    const sid = req.cookies.sid;
    if (!sid) {
      if (!sid) {
        return res.status(401).json({ message: 'Unauthorized access' });
      }
    }
    const data = verifyJWT(sid);

    req.user = data;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

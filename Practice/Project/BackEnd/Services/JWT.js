import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret = process.env.SECRET;
export const createJWT = (data) => {
  return jwt.sign(data, secret);
};

export const verifyJWT = (token) => {
  return jwt.verify(token, secret);
};

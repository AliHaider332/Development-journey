import jwt from 'jsonwebtoken';
const SECRET = 'abc1234';

export const createToken = (data, expiresIn = '1h') => {
  return jwt.sign(
    { id: data._id, name: data.name, email: data.email, role: data.role },
    SECRET,
    { expiresIn }
  );
};

export const getTokenData = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null; // Return null if token is invalid or expired
  }
};

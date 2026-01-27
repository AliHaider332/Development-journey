import jwt from 'jsonwebtoken';
const secret = 'abc123';

export const createSession = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    secret
  );
};

export const getSession = (id) => {
  return jwt.verify(id, secret);
};

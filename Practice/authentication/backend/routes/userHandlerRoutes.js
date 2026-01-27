import express from 'express';

import {
  createUserSignupHandler,
  userLoginHandler,
} from '../controllers/userHandlerControls.js';

const userRoutes = express.Router();

userRoutes.post('/create-user', createUserSignupHandler);
userRoutes.post('/login-user', userLoginHandler);

export default userRoutes;

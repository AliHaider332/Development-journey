import express from 'express';
import {
  handleLogIn,
  handleSignIn,
  loginRender,
  signinRender,
} from '../controllers/handleUser.js';

const user_router = express.Router();

// POST routes must pass handler function
user_router.get('/signin', signinRender);
user_router.get('/login', loginRender);
user_router.post('/signin', handleSignIn); // ✅ remove dot
user_router.post('/login', handleLogIn); // ✅ remove dot

export default user_router;

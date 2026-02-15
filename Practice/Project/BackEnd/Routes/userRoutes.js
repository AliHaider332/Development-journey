import express from 'express';
import {
  userAuth,
  userLogin,
  userLogout,
  userSignUp,
} from '../Controllers/UserHandle.js';
import {
  checkAuthLoginInfo,
  checkAuthSignupInfo,
} from '../Middlewares/Authentication.js';
import { checkAuthorize } from '../Middlewares/Authorization.js';
const userRoutes = express.Router();
userRoutes.post('/signUp', checkAuthSignupInfo, userSignUp);
userRoutes.post('/LogIn', checkAuthLoginInfo, userLogin);
userRoutes.get('/logOut', checkAuthorize, userLogout);
userRoutes.get('/checkAuth', checkAuthorize, userAuth);
export default userRoutes;

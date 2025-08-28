const express = require('express');
const { signupcontrolar, postSignupcontrolar } = require('../../controlar/loginControlar');
const signuppage = express.Router();
signuppage.get('/register', signupcontrolar);
signuppage.post('/register',postSignupcontrolar)
module.exports = { signuppage };

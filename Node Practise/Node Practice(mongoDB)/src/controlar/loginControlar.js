const { check, validationResult } = require('express-validator');
const User = require('../module/loginSchema');
const bcrypt = require('bcryptjs');

exports.loginControlar = (req, res) => {
  res.render('login', { isLoggedIn: req.isLoggedIn, errors: [],role: req.session.user ? req.session.user.role : false });
};

exports.loginControlarPost = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((DATA) => {

      if (DATA) {
        bcrypt.compare(password, DATA.password).then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = DATA;
            return req.session.save((err) => {
              console.log(err);
              res.redirect('/client');
            });
          }
          return res.render('login', {
            isLoggedIn: req.isLoggedIn,
            errors: ['Invalid  Password'],role: req.session.user ? req.session.user.role : false
          });
        });
        return;
      }
      res.render('login', {
        isLoggedIn: req.isLoggedIn,
        errors: ['Invalid E-mail or Password'],role: req.session.user ? req.session.user.role : false
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/login');
    });
};

exports.logoutControlar = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
exports.signupcontrolar = (req, res) => {
  res.render('signup', {
    isLoggedIn: req.isLoggedIn,
    errors: [],
    oldData: {
      firstName: ' ',
      lastName: ' ',
      gender: ' ',
      role: ' ',
      email: ' ',
    },role: req.session.user ? req.session.user.role : false
  });
};
exports.postSignupcontrolar = [
  check('firstName')
    .notEmpty()
    .withMessage('Fisrt Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name should have atleast 2 characters')
    .matches(/^[a-zA-Z\+$]/)
    .withMessage('Name should Contain Latters only'),
  check('lastName')
    .notEmpty()
    .withMessage('Fisrt Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name should have atleast 2 characters')
    .matches(/^[a-zA-Z\+$]/)
    .withMessage('Name should Contain Latters only'),
  check('gender').notEmpty().withMessage('Select the gender'),
  check('role').notEmpty().withMessage('Select the Role'),
  check('email').isEmail().withMessage('Enter your E-mail'),
  check('password')
    .notEmpty()
    .withMessage('Enter Password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/)
    .withMessage(
      'Password must contain at least 1 uppercase, 1 lowercase, and 1 special character'
    ),
  check('confirmPassword').custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error('Password not matches');
    }
    return true;
  }),
  (req, res) => {
    console.log(req.body);
    const { firstName, lastName, gender, role, email, password } = req.body;
    const result = validationResult(req);
    const errormsg = result.array().map((item) => item.msg);
    if (errormsg.length > 0) {
      res.render('signup', {
        isLoggedIn: req.isLoggedIn,
        errors: errormsg,
        oldData: { firstName, lastName, gender, role, email },role: req.session.user ? req.session.user.role : false
      });
    } else {
      bcrypt
        .hash(password, 12)
        .then((hashedpassword) => {
          const user = new User({
            firstName,
            lastName,
            gender,
            role,
            email,
            password: hashedpassword,
          });
          user.save().then(() => {
            res.redirect('/login');
          });
        })
        .catch((err) => {
          res.render('signup', {
            isLoggedIn: req.isLoggedIn,
            errors: [err.message],
            oldData: { firstName, lastName, gender, role, email },role: req.session.user ? req.session.user.role : false
          });
        });
    }
  },
];

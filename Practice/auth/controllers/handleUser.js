import bcrypt from 'bcrypt';
import { user } from '../models/User_DB_Setup.js';

import { createSession } from '../services/session.js';

export const signinRender = (req, res) => {
  res.render('signin', { error: null });
};
export const loginRender = (req, res) => {
  res.render('login', { error: null });
};

export const handleSignIn = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.render('signin', { error: 'All fields are required' });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.render('signin', { error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await user.create({ name, email, password: hashedPassword, role });

    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('signin', { error: 'Something went wrong' });
  }
};


export const handleLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.render('login', { error: 'All fields are required' });
    }

    // Find user
    const data = await user.findOne({ email });
    if (!data) {
      return res.render('login', { error: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.render('login', { error: 'Invalid email or password' });
    }
    const token = createSession(data);
    res.cookie('u_id', token);
    // Login success
    res.redirect('/'); // or home page
  } catch (error) {
    console.error(error);
    res.render('login', { error: 'Something went wrong' });
  }
};

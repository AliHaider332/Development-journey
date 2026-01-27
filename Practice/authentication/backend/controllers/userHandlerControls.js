import { user } from '../models/user_DB.js';
import bcrypt from 'bcrypt';
import { createToken } from '../services/JWT.js';
export const createUserSignupHandler = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: 'Email is already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Respond with success and user info (excluding password)
    res.status(201).json({
      success: true,
      message: 'User successfully added.',
      user: {
        name: newUser.name,
        // email: newUser.email,
        // role: newUser.role,
      },
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};

export const userLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required.' });
    }

    // Find user
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password.' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = createToken(existingUser);

    // Set token in cookie (HttpOnly for security)
    res
      .cookie('s_id', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 1 hour
      })
      .status(200)
      .json({
        success: true,
        message: 'Login successful.',
        user: {
          name: existingUser.name,
          email: existingUser.email,
        },
      });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};





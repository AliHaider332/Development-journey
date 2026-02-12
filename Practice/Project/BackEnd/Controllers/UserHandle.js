import { UserModel } from '../Models/UserDB.js';
import bcrypt from 'bcrypt';
import { createJWT } from '../Services/JWT.js';
export const userSignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const data = await UserModel.findOne({ email });
    if (data) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered',
      });
    }
    const newPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: newPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: 'Successfully Registered' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const userLogin = async (req, res) => {
  try {
    const token = createJWT(req.user);
    res.cookie('sid', token, {
      httpOnly: true, // Cookie not accessible via client-side JS
      secure: false, // Set to true if using HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      sameSite: 'strict', // Helps prevent CSRF
    });

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const userLogout = async (req, res) => {
  try {
    res.clearCookie('sid', {
      httpOnly: true,
      secure: false, // true if HTTPS
      sameSite: 'lax',
      path: '/', // must match cookie path
    });

    return res.status(200).json({
      message: 'Logged out successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Logout failed',
    });
  }
};

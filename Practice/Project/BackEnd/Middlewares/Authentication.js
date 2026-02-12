import { z } from 'zod';
import { UserModel } from '../Models/UserDB.js';
import bcrypt from 'bcrypt';
const UserSchemaSignup = z.object({
  firstName: z.string().min(3, 'First name should be valid'),
  lastName: z.string().min(3, 'Last name should be valid'),
  email: z.string().email('Email is invalid'),
  password: z.string().min(8, 'Password should be strong'),
});

const UserSchemaLogin = z.object({
  email: z.string().email('Email is invalid'),
});

export const checkAuthSignupInfo = async (req, res, next) => {
  try {
    UserSchemaSignup.parse(req.body);

    next();
  } catch (err) {
    // console.log(err);
    let issue = [];
    if (err.name === 'ZodError') {
      issue = err.issues.map((e) => {
        return {
          field: e.path[0],
          issue: e.message,
        };
      });
    }
    return res.status(500).json({
      success: false,
      error: issue,
    });
  }
};
export const checkAuthLoginInfo = async (req, res, next) => {
  try {
    UserSchemaLogin.parse(req.body);
    const { email, password } = req.body;
    const data = await UserModel.findOne({ email });
    if (!data) {
      return res.status(400).json({
        success: false,
        message: 'Email not register',
      });
    }
    const passwordResult = await bcrypt.compare(password, data.password);
    if (!passwordResult) {
      return res.status(400).json({
        success: false,
        message: 'Password miss Matched',
      });
    }
    req.user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    next();
  } catch (err) {
    let issue = [];
    if (err.name === 'ZodError') {
      issue = err.issues.map((e) => {
        return {
          field: e.path[0],
          issue: e.message,
        };
      });
    }

    return res.status(500).json({
      success: false,
      error: issue,
    });
  }
};

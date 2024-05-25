import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authModel from '../models/authmodel.js';

const app = express();
app.use(cors());
app.use(express.json());

class AuthController {
  static userRegisteration = async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Received registration data:', req.body); // Add log to see received data
    try {
      if (username && email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (!isUser) {
          const genSalt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(password, genSalt);
          const newuser = new authModel({
            username,
            email,
            password: hashedPassword,
          });
          const saveuser = await newuser.save();
          if (saveuser) {
            return res.status(200).json({ message: "User registration successful" });
          }
        } else {
          return res.status(400).json({ message: "Email already registered" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email && password) {
        const isEmail = await authModel.findOne({ email: email });
        if (isEmail) {
          if (await bcryptjs.compare(password, isEmail.password)) {
            const token = jwt.sign({ userID: isEmail._id }, "pleaseSubscribe", {
              expiresIn: "2d"
            });
            return res.status(200).json({
              message: "Login successful",
              token,
              name: isEmail.username,
            });
          } else {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
        } else {
          return res.status(400).json({ message: "Email is not registered" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default AuthController;

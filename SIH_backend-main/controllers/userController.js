import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Regesteration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //compare login password and saved password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }); //"10h"->10 hours, "10d"->10 days, "10s"->10 seconds, "10"->10 milliSeconds

    const userDetails = {
      name: user.name,
      email: user.email,
    };
    const userDetailsJSON = JSON.stringify(userDetails);

    res.cookie("userDetails", userDetailsJSON, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      httpOnly: true, 
      secure: true, 
      sameSite: "none", 
    });


    res.status(200).send({
      success: true,
      message: "login successful",
      user: userDetails,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const checkLoggedInController = (req, res) => {
  const token = req.cookies.token;
  const userDetails = req.cookies.userDetails;
  res.status(200).send({
    success: true,
    message: "Already logged in",
    token,
    userDetails,
  });
};

export const logOutController = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true, 
      secure: true, 
      sameSite: "none", 
    });
    res.clearCookie("userDetails", {
      httpOnly: true, 
      secure: true, 
      sameSite: "none", 
    });
    res.status(200).send({
      success: true,
      message: "Logout successful",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Logout failed",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId, 'name email');
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting user",
      error,
    });
  }
}

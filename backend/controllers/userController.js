import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = await User.findOne({ email });
  if (identifiedUser && (await identifiedUser.matchPassword(password))) {
    res.json({
      _id: identifiedUser._id,
      name: identifiedUser.name,
      email: identifiedUser.email,
      isAdmin: identifiedUser.isAdmin,
      token: generateToken(identifiedUser._id),
    });
  } else {
    res.status(401);
    throw new Error("INVALID EMAIL OR PASSWORD");
  }
});

const signupUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const identifiedUser = await User.findOne({ email });

  if (identifiedUser) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

export { login, getUserProfile, signupUser };

import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToke.js";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
const authUser = asyncHandler(async (req, res) => {
  const { password, name } = req.body;
  const user = await User.findOne({ name: name });
  //   const matchPassword = await bcrypt.compare(password, user.password);
  //   console.log(matchPassword);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid user");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send(req.user);
});
export { authUser, getUserProfile };

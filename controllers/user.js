const bcrypt = require("bcrypt");
const { BadRequest, NotFound, Unauthorized } = require("http-errors");

const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponses");
const User = require("../models/user");

const getAllUser = asyncHandler(async (req, res, next) => {
  const user = await User.find().populate("posts");
  res.status(200).json({
    success: true,
    data: user,
  });
});
const createUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, phone, sector } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    sector,
  });
  const token = user.getSignedJWTToken();
  console.log(token);
  res.status(200).json({
    success: true,
    data: user,
    token,
  });
});

const getOneUser = asyncHandler(async (req, res, next) => {
  const isuserExist = await User.findById(req.params._id);
  if (!isuserExist)
    next(new ErrorResponse(`user with id ${req.params._id} not exist`, 404));
  else {
    const user = await User.find({ _id: req.params._id });
    res.status(200).json({
      success: true,
      data: user,
    });
  }
});
const deleteOneUser = asyncHandler(async (req, res, next) => {
  const isuserExist = await User.findById(req.params._id);
  if (!isuserExist)
    next(new ErrorResponse(`user with id ${req.params._id} not exist`, 404));
  else {
    isuserExist.remove();
    res.status(200).json({
      success: true,
    });
  }
});
const updateUser = asyncHandler(async (req, res, next) => {
  const isuserExist = await User.findById(req.params._id);
  if (!isuserExist)
    next(new ErrorResponse(`user with id ${req.params._id} not exist`, 404));
  const user = await User.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: user,
  });
});
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password){return next(new ErrorResponse(`Please provide email and password`, 400));}
  const user = await User.findOne({ email }).select('+password');
  if (!user){return next(new ErrorResponse(`credentials are not correct`, 401))}
  const valid = await user.matchPassword(password);
  if (!valid) {return next(new ErrorResponse(`credentials are not correct`, 401))}
const token = user.getSignedJWTToken()
  res.status(200).json({
    success: true,
    token
  });
});
module.exports = {
  getAllUser,
  createUser,
  getOneUser,
  deleteOneUser,
  updateUser,
  login,
};

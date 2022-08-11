const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/async");
const { BadRequest, NotFound, Unauthorized } = require("http-errors");

const ErrorResponse = require("../utils/errorResponses");
const User = require("../models/user");
const errorHandler = require("../middlewares/error");

const getAllUser = asyncHandler(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    data: user,
  });
});
const createUser = asyncHandler(async (req, res, next) => {

    const user = new User(req.body);
    const newuser = await user.save();
    res.status(200).json({
      success: true,
      data: newuser,
    });
})

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
})
const deleteOneUser = asyncHandler(async (req, res, next) => {
    const isuserExist = await User.findById(req.params._id);
    if (!isuserExist)
      next(new ErrorResponse(`user with id ${req.params._id} not exist`, 404));
    else {
      const user = await User.deleteOne({ _id: req.params._id });
      res.status(200).json({
        success: true,
      });
    }
})
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
})
const login =asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      next(new ErrorResponse(`user with id ${req.params._id} not exist`, 404));
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Unauthorized("Unauthorized user");
    // const token = jwt.sign({id:user._id, role: user.role}, 'some secret key', {
    //     expiresIn: 10 * 300
    // })

    // const sessionData =  {
    //     id: user._id,
    //     authenticated: true,
    //     role: user.role

    // }
    // req.session.user = sessionData

    res.status(200).json({
      success: true,
      data: user,
    });
})
module.exports = {
  getAllUser,
  createUser,
  getOneUser,
  deleteOneUser,
  updateUser,
  login,
};

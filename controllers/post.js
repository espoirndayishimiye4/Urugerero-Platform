const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponses");
const Post = require("../models/post");

const getAllPost = asyncHandler(async (req, res, next) => {
  const post = await Post.find().populate({
    path:'user',
    select: 'email'
  });
  res.status(200).json({
    success: true,
    data: post,
  });
});

const createPost = asyncHandler(async (req, res, next) => {
  const post = new Post(req.body);
  const newpost = await post.save();
  res.status(200).json({
    success: true,
    data: newpost,
  });
});

const getOnePost = asyncHandler(async (req, res, next) => {
  const ispostExist = await Post.findById(req.params._id);
  if (!ispostExist)
    next(new ErrorResponse(`post with id ${req.params._id} not exist`, 404));
  else {
    const post = await Post.find({ _id: req.params._id });
    res.status(200).json({
      success: true,
      data: post,
    });
  }
});
const deleteOnePost = asyncHandler(async (req, res, next) => {
  const ispostExist = await Post.findById(req.params._id);
  if (!ispostExist)
    next(new ErrorResponse(`post with id ${req.params._id} not exist`, 404));
  else {
    const post = await Post.deleteOne({ _id: req.params._id });
    res.status(200).json({
      success: true,
    });
  }
});
const updatePost = asyncHandler(async (req, res, next) => {
  const ispostExist = await Post.findById(req.params._id);
  if (!ispostExist)
    next(new ErrorResponse(`post with id ${req.params._id} not exist`, 404));
  const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: post,
  });
});

const photoUpload = asyncHandler(async (req, res, next) => {
  const ispostExist = await Post.findById(req.params.id);
  if (!ispostExist)
    return next(new ErrorResponse(`post with id ${req.params.id} not exist`, 404));
  else {
    if(!req.files) return next(new ErrorResponse(`please provide image`, 404));
    console.log(req.files)
  }
});

module.exports = {
  photoUpload,
  getAllPost,
  createPost,
  getOnePost,
  deleteOnePost,
  updatePost,
};

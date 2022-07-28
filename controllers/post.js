const Post = require('../models/post')

const asyncHandler = require('../middlewares/async')
const {NotFound, BadRequest} = require('http-errors')


const getAllPost = asyncHandler( async (req, res, next) =>{
    try {
        const post = await Post.find()
        res.status(200).json({
            success:true,
            data:post
        })
    } catch (error) {
        next(error)
    }
    
})
const createPost = asyncHandler( async (req, res, next) =>{
    try {
        const post = new Post(req.body)
        const newPost = await post.save()
        res.status(200).json({
        success:true,
        data:newPost
    })
    } catch (error) {
       next(error) 
    }
    
})

const getOnePost = asyncHandler( async (req, res, next) =>{
    try {
        const isPostExist = await Post.findById(req.params._id)
        if(!isPostExist) res.status(400).json({"message":"Post not found"})
        else{
        const post = await Post.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:post
        })}
    } catch (error) {
        next(error)
    }
})
const deleteOnePost = asyncHandler( async (req, res, next) =>{
    try {
        const isPostExist = await Post.findById(req.params._id)
        if(!isPostExist) res.status(400).json({"message":"Post not found"})
        else{
        const post = await Post.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
})
const updatePost = asyncHandler( async (req, res, next) =>{
    try {
        const isPostExist = await Post.findById(req.params._id)
        if(!isPostExist) res.status(400).json({"message":"Post not found"})
        const post = await Post.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:post
        })
    } catch (error) {
        next(error)
    }
})

module.exports = {getAllPost, createPost, getOnePost, deleteOnePost, updatePost}
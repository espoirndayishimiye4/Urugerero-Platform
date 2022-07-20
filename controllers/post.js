const Post = require('../models/post')

const getAllPost = async (req, res) =>{
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
    
}
const createPost = async (req, res) =>{
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
    
}

const getOnePost = async (req, res) =>{
    try {
        const post = await Post.find(req.body._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}
const deleteOnePost = async (req, res) =>{
    try {
        const post = await Post.deleteOne(req.body._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllPost, createPost, getOnePost, deleteOnePost}
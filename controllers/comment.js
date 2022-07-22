const Comment = require('../models/comment')

const getAllComment = async (req, res, next) =>{
    try {
        const comment = await Comment.find()
        res.status(200).json({
            success:true,
            data:comment
        })
    } catch (error) {
        next(error)
    }
    
}
const createComment = async (req, res, next) =>{
    try {
        const comment = new Comment(req.body)
        const newcomment = await comment.save()
        res.status(200).json({
        success:true,
        data:newcomment
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneComment = async (req, res, next) =>{
    try {
        const iscommentExist = await Comment.findById(req.params._id)
        if(!iscommentExist) res.status(400).json({"message":"comment not found"})
        else{
        const comment = await Comment.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:comment
        })}
    } catch (error) {
        next(error)
    }
}
const deleteOneComment = async (req, res, next) =>{
    try {
        const iscommentExist = await Comment.findById(req.params._id)
        if(!iscommentExist) res.status(400).json({"message":"comment not found"})
        else{
        const comment = await Comment.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
}
const updateComment = async (req, res, next) =>{
    try {
        const iscommentExist = await comment.findById(req.params._id)
        if(!iscommentExist) res.status(400).json({"message":"comment not found"})
        const comment = await comment.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:comment
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllComment, createComment, getOneComment, deleteOneComment, updateComment}
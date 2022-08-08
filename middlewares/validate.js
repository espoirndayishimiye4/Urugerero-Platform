const Joi = require('joi')
const {BadRequest} = require('http-errors')
const asyncHandler = require('./async')

const validateCreateUser = asyncHandler( async (req, res, next) => {
    try{
        const createUserSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            role: Joi.string().required(),
            email: Joi.string().email().lowercase().required(),
            phone: Joi.string().required(),
            sector:Joi.string().required()
        })
       await  createUserSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})


const validateCreateComment = asyncHandler( async (req, res, next) => {
    try{
        const createCommentSchema = Joi.object({
            userId: userId.required(),
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  createBookSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

const validateCreateAnnouncement = asyncHandler( async (req, res, next) => {
    try{
        const createAnnouncementSchema = Joi.object({
            role: Joi.string().valid('admin').required(),
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  createAnnouncementSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

const validateCreatePost = asyncHandler( async (req, res, next) => {
    try{
        const createPostSchema = Joi.object({
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  createPostSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})


const validateUpdateUser = asyncHandler( async (req, res, next) => {
    try{
        const updateUserSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.number().required(),
            phone: Joi.string().required(),
            sector:Joi.string().required()
        })
       await  updateUserSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

const validateUpdatePost = asyncHandler( async (req, res, next) => {
    try{
        const updatePostSchema = Joi.object({
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  updatePostSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

const validateUpdateComment = asyncHandler( async (req, res, next) => {
    try{
        const updateCommentSchema = Joi.object({
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  updateCommentSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

const validateUpdateAnnouncement = asyncHandler( async (req, res, next) => {
    try{
        const updateAnnouncementSchema = Joi.object({
            content: Joi.string().required(),
            image: Joi.string().optional(),
            video: Joi.string().optional()
        })
       await  updateAnnouncementSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

//===============================================================================================
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

module.exports = {
    validateCreatePost,
    validateCreateUser,
    validateUpdatePost,
    validateUpdateUser,
    validateCreateAnnouncement,
    validateUpdateAnnouncement,
    validateCreateComment,
    validateUpdateComment,
    validateEmail
}
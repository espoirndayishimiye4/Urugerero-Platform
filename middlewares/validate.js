const Joi = require('joi')
const {BadRequest} = require('http-errors')
const asyncHandler = require('./async')

const validateCreateUser = asyncHandler( async (req, res, next) => {
    try{
        const createUserSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            role: Joi.string().required(),
            email: Joi.number().required(),
            phone: Joi.string().required(),
            sector:Joi.string().required()
        })
       await  createUserSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})


const validateCreatePost = asyncHandler( async (req, res, next) => {
    try{
        const createPostSchema = Joi.object({
            content: Joi.string().required(),
            image,video: Joi.string().optional
        })
       await  createBookSchema.validateAsync(req.body)
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
            image: Joi.string().optional,
            video: Joi.string().optional
        })
       await  updatePostSchema.validateAsync(req.body)
       next()
    }catch(e){
        next(BadRequest(e.message))
    }
})

module.exports = {
    validateCreatePost,
    validateCreateUser,
    validateUpdatePost,
    validateUpdateUser
}
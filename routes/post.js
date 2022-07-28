const express = require('express')
const app = express()

const {validateCreatePost,validateUpdatePost} = require('../middlewares/validate')
const {getAllPost, createPost, getOnePost, deleteOnePost, updatePost} = require('../controllers/post')

const routes = express.Router()

routes.route('/:_id').get(getOnePost).delete(deleteOnePost).patch(validateUpdatePost, updatePost)
routes.route('/').get(getAllPost).post(validateCreatePost, createPost)

module.exports = routes
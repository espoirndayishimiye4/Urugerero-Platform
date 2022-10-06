const express = require('express')
const app = express()

const {photoUpload, getAllPost, createPost, getOnePost, deleteOnePost, updatePost} = require('../controllers/post')
const {protected, authorize} = require('../middlewares/auth')
const routes = express.Router()

routes.route('/photo').post( photoUpload)
routes.route('/:_id').get(protected, getOnePost).delete(protected, deleteOnePost).patch(protected, updatePost)
routes.route('/').get(protected,getAllPost).post( createPost)

module.exports = routes
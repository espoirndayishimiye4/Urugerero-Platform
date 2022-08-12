const express = require('express')
const app = express()

const {photoUpload, getAllPost, createPost, getOnePost, deleteOnePost, updatePost} = require('../controllers/post')
const {protected, authorize} = require('../middlewares/auth')
const routes = express.Router()

routes.route('/photo/:id').put( protected, photoUpload)
routes.route('/:_id').get(protected, getOnePost).delete(protected, deleteOnePost).patch(protected, updatePost)
routes.route('/').get(protected,getAllPost).post(protected, createPost)

module.exports = routes
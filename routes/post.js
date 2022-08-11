const express = require('express')
const app = express()

const {photoUpload, getAllPost, createPost, getOnePost, deleteOnePost, updatePost} = require('../controllers/post')

const routes = express.Router()

routes.route('/photo/:id').put(photoUpload)
routes.route('/:_id').get(getOnePost).delete(deleteOnePost).patch(updatePost)
routes.route('/').get(getAllPost).post(createPost)

module.exports = routes
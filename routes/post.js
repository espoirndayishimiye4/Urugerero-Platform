const express = require('express')
const app = express()

const {getAllPost, createPost, getOnePost, deleteOnePost} = require('../controllers/post')

const routes = express.Router()

routes.route('/:_id').get(getOnePost).delete(deleteOnePost)
routes.route('/').get(getAllPost).post(createPost)

module.exports = routes
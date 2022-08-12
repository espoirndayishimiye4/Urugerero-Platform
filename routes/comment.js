const express = require('express')
const app = express()

const {getAllComment, createComment, getOneComment, deleteOneComment, updateComment} = require('../controllers/comment')

const routes = express.Router()

routes.route('/:_id').get(getOneComment).delete(deleteOneComment).patch(updateComment)
routes.route('/').get(getAllComment).post(createComment)

module.exports = routes
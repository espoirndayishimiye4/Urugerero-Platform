const express = require('express')
const app = express()

const {getAllComment, createComment, getOneComment, deleteOneComment, updateComment} = require('../controllers/comment')
const { validateUpdateComment, validateCreateComment } = require('../middlewares/validate')

const routes = express.Router()

routes.route('/:_id').get(getOneComment).delete(deleteOneComment).patch(validateUpdateComment, updateComment)
routes.route('/').get(getAllComment).post(validateCreateComment, createComment)

module.exports = routes
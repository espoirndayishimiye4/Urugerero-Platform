const express = require('express')
const app = express()

const {validateCreateUser,validateUpdateUser} = require('../middlewares/validate')
const {getAllUser, createUser, getOneUser, deleteOneUser, updateUser} = require('../controllers/user')

const routes = express.Router()

routes.route('/:_id').get(getOneUser).delete(deleteOneUser).patch(validateUpdateUser, updateUser)
routes.route('/').get(getAllUser).post(validateCreateUser, createUser)

module.exports = routes
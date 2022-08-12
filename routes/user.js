const express = require('express')
const app = express()


const {getAllUser, createUser, getOneUser, deleteOneUser, updateUser, login} = require('../controllers/user')
const {protected, authorize} = require('../middlewares/auth')
const routes = express.Router()

routes.route('/:_id').get(protected, authorize('admin'), getOneUser).delete(protected, authorize('admin'),deleteOneUser).patch(protected, authorize('admin'),updateUser)
routes.route('/').get(protected, authorize('admin'),getAllUser).post(protected, authorize('admin'),createUser)

routes.route('/login').post(login)

module.exports = routes
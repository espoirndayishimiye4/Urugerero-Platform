const express = require('express')
const app = express()

const {getAllUser, createUser, getOneUser, deleteOneUser, updateUser} = require('../controllers/user')

const routes = express.Router()

routes.route('/:_id').get(getOneUser).delete(deleteOneUser).patch(updateUser)
routes.route('/').get(getAllUser).post(createUser)

module.exports = routes
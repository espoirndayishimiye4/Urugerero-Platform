const express = require('express')
const app = express()

const {getAllUsers, createUser,updateOneUser, getOneUser, deleteOneUser} = require('../controllers/user')

const routes = express.Router()

routes.route('/:_id').get(getOneUser).delete(deleteOneUser).put(updateOneUser)
routes.route('/').get(getAllUsers).post(createUser)

module.exports = routes
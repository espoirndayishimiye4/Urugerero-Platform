const express = require('express')
const app = express()


const {getAllUser, createUser, getOneUser, deleteOneUser, updateUser, login} = require('../controllers/user')

const routes = express.Router()

routes.route('/:_id').get(getOneUser).delete(deleteOneUser).patch(updateUser)
routes.route('/').get(getAllUser).post(createUser)

routes.route('/login').post(login)

module.exports = routes
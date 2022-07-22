const express = require('express')
const app = express()

const {getAllAdmin, createAdmin, getOneAdmin, deleteOneAdmin, updateAdmin} = require('../controllers/admin')

const routes = express.Router()

routes.route('/:_id').get(getOneAdmin).delete(deleteOneAdmin).patch(updateAdmin)
routes.route('/').get(getAllAdmin).post(createAdmin)

module.exports = routes
const express = require('express')
const app = express()

const {getAllAnnouncement, createAnnouncement, getOneAnnouncement, deleteOneAnnouncement, updateAnnouncement} = require('../controllers/announcement')
const { validateCreateAnnouncement, validateUpdateAnnouncement } = require('../middlewares/validate')

const routes = express.Router()

routes.route('/:_id').get(getOneAnnouncement).delete(deleteOneAnnouncement).patch(validateUpdateAnnouncement, updateAnnouncement)
routes.route('/').get(getAllAnnouncement).post(validateCreateAnnouncement, createAnnouncement)

module.exports = routes
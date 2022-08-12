const express = require('express')
const app = express()

const {getAllAnnouncement, createAnnouncement, getOneAnnouncement, deleteOneAnnouncement, updateAnnouncement} = require('../controllers/announcement')

const routes = express.Router()

routes.route('/:_id').get(getOneAnnouncement).delete(deleteOneAnnouncement).patch(updateAnnouncement)
routes.route('/').get(getAllAnnouncement).post(createAnnouncement)

module.exports = routes
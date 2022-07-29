const express = require('express')
const app = express()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         title:
 *           type: string
 *           description: The User title
 *         author:
 *           type: string
 *           description: The User author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The Users managing API
  */

/**
 * @swagger
 * /Users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

const {getAllUser, createUser, getOneUser, deleteOneUser, updateUser, login} = require('../controllers/user')

const routes = express.Router()

routes.route('/:_id').get(getOneUser).delete(deleteOneUser).patch(updateUser)
routes.route('/').get(getAllUser).post(createUser)

routes.route('/login').post(login)

module.exports = routes
const express = require('express');
const app = express();
const {getAllAdmins,getOneAdmin,createAdmin,updateAdmin,deleteAdmin} = require('../controllers/admin');
const router = express.Router();

router.use('/:id').get(getOneAdmin).delete(deleteAdmin).put(updateAdmin)

router.use('/').get(getAllAdmins).post(createAdmin)

module.exports = router
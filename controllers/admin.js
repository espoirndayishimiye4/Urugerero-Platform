const Admin = require('../models/admin')

//creating a new admin
const createAdmin = async(req, res, next) => {
    try {
        const admin = new Admin(req.body)
        const newAdmin = await admin.save()
        res.status(200).json({
        success:true,
        data:newAdmin
    })
    } catch (error) {
       next(error) 
    }
}

//deleting an admin
const deleteAdmin = async(req, res, next) => {
    try {
        const admin = await Admin.deleteOne(req.params._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

//updating an admin
const updateAdmin = async(req, res, next) => {
    try {
        const admin = await Admin.updateOne(req.params._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

//getting all admins
const getAllAdmins = async(req, res, next) => {
    try {
        const admin = await Admin.find()
        res.status(200).json(admin)
    } catch (error) {
        next(error)
    }
}

//retrieving a particular admin
const getOneAdmin = async(req, res, next) => {
    try {
        const admin = await Admin.find(req.params._id)
        res.status(200).json(admin)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createAdmin,
    updateAdmin,
    getAllAdmins,
    deleteAdmin,
    getOneAdmin
}
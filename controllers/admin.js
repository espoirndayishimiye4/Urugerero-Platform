const Admin = require('../models/admin')

const getAllAdmin = async (req, res, next) =>{
    try {
        const admin = await Admin.find()
        res.status(200).json({
            success:true,
            data:admin
        })
    } catch (error) {
        next(error)
    }
    
}
const createAdmin = async (req, res, next) =>{
    try {
        const admin = new Admin(req.body)
        const newadmin = await admin.save()
        res.status(200).json({
        success:true,
        data:newadmin
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneAdmin = async (req, res, next) =>{
    try {
        const isadminExist = await Admin.findById(req.params._id)
        if(!isadminExist) res.status(400).json({"message":"admin not found"})
        else{
        const admin = await Admin.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:admin
        })}
    } catch (error) {
        next(error)
    }
}
const deleteOneAdmin = async (req, res, next) =>{
    try {
        const isadminExist = await Admin.findById(req.params._id)
        if(!isadminExist) res.status(400).json({"message":"admin not found"})
        else{
        const admin = await Admin.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
}
const updateAdmin = async (req, res, next) =>{
    try {
        const isadminExist = await Admin.findById(req.params._id)
        if(!isadminExist) res.status(400).json({"message":"admin not found"})
        const admin = await Admin.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:admin
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllAdmin, createAdmin, getOneAdmin, deleteOneAdmin, updateAdmin}
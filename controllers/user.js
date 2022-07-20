const User = require('../models/user')

const getAllUsers = async (req, res) =>{
    try {
        const user = await User.find()
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
    
}
const createUser = async (req, res) =>{
    try {
        const user = new Post(req.body)
        const newUser = await user.save()
        res.status(200).json({
        success:true,
        data:newUser
    })
    } catch (error) {
       next(error) 
    }
    
}

const updateOneUser = async (req, res) => {
    try {
        const user = await User.updateOne(req.body._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

const getOneUser = async (req, res) =>{
    try {
        const user = await User.find(req.body._id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const deleteOneUser = async (req, res) =>{
    try {
        const user = await User.deleteOne(req.body._id)
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}


module.exports = {getAllUsers, createUser,updateOneUser, getOneUser, deleteOneUser}
const bcrypt = require('bcrypt')
const {BadRequest, NotFound, Unauthorized} = require('http-errors')
const User = require('../models/user')

const getAllUser = async (req, res, next) =>{
    try {
        const user = await User.find()
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        next(error)
    }
    
}
const createUser = async (req, res, next) =>{
    try {
        const user = new User(req.body)
        const newuser = await user.save()
        res.status(200).json({
        success:true,
        data:newuser
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneUser = async (req, res, next) =>{
    try {
        const isuserExist = await User.findById(req.params._id)
        if(!isuserExist) res.status(400).json({"message":"user not found"})
        else{
        const user = await User.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:user
        })}
    } catch (error) {
        next(error)
    }
}
const deleteOneUser = async (req, res, next) =>{
    try {
        const isuserExist = await User.findById(req.params._id)
        if(!isuserExist) res.status(400).json({"message":"user not found"})
        else{
        const user = await User.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
}
const updateUser = async (req, res, next) =>{
    try {
        const isuserExist = await User.findById(req.params._id)
        if(!isuserExist) res.status(400).json({"message":"user not found"})
        const user = await User.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        next(error)
    }
}
const login = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: req.body.email})
        if(!user) throw new NotFound('no user with this email exists')
        const valid = await bcrypt.compare(password, user.password)
        if(!valid) throw new Unauthorized('Unauthorized user')
        // const token = jwt.sign({id:user._id, role: user.role}, 'some secret key', {
        //     expiresIn: 10 * 300
        // })
    
        // const sessionData =  {
        //     id: user._id,
        //     authenticated: true, 
        //     role: user.role
    
        // }
        // req.session.user = sessionData
        
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        next(error)
    }



}
module.exports = {getAllUser, createUser, getOneUser, deleteOneUser, updateUser, login}
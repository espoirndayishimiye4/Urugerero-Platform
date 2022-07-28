const Announcement = require('../models/announcement')

const asyncHandler = require('../middlewares/async')
const {NotFound, BadRequest} = require('http-errors')

const getAllAnnouncement = asyncHandler( async (req, res, next) =>{
    try {
        const announcement = await Announcement.find()
        res.status(200).json({
            success:true,
            data:announcement
        })
    } catch (error) {
        next(error)
    }
    
})
const createAnnouncement = asyncHandler( async (req, res, next) =>{
    try {
        const announcement = new Announcement(req.body)
        const newannouncement = await announcement.save()
        res.status(200).json({
        success:true,
        data:newannouncement
    })
    } catch (error) {
       next(error) 
    }
    
})

const getOneAnnouncement = asyncHandler( async (req, res, next) =>{
    try {
        const isannouncementExist = await Announcement.findById(req.params._id)
        if(!isannouncementExist) res.status(400).json({"message":"announcement not found"})
        else{
        const announcement = await Announcement.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:announcement
        })}
    } catch (error) {
        next(error)
    }
})
const deleteOneAnnouncement = asyncHandler( async (req, res, next) =>{
    try {
        const isannouncementExist = await Announcement.findById(req.params._id)
        if(!isannouncementExist) res.status(400).json({"message":"announcement not found"})
        else{
        const announcement = await Announcement.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
})
const updateAnnouncement = asyncHandler( async (req, res, next) =>{
    try {
        const isannouncementExist = await Announcement.findById(req.params._id)
        if(!isannouncementExist) res.status(400).json({"message":"announcement not found"})
        const announcement = await Announcement.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:announcement
        })
    } catch (error) {
        next(error)
    }
})
module.exports = {getAllAnnouncement, createAnnouncement, getOneAnnouncement, deleteOneAnnouncement, updateAnnouncement}
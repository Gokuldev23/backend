
const asyncHandler = require('express-async-handler')
const contactModel = require('../models/contactModel')


const getAllContact = asyncHandler(async (req,res) =>{
    let response = await contactModel.find()
    res.status(200).json({message:"get All contact",data:response})
})

const createAContact = asyncHandler(async(req,res) =>{
    const {name,email} = req.body
    if(!name || !email){
        return res.status(400).json({message:"Some fields are empty"})
    }
    const contact = await contactModel.create({
        name,
        email
    })
    res.status(200).json({message:" contact created",data:contact})
})

const getSingleContact = asyncHandler((req,res) =>{
    res.status(200).json({message:`You got contact ${req.params.id}`})
})


const updateAContact = asyncHandler((req,res)=>{
    const {name,email} = req.body
    if(!name || !email){
        res.status(402).json({success:false,message:"Some fields are missing!"})
        return
    }
    res.status(200).json({success:true,message:`Contact ${req.params.id} Successfully upadted`})
})

const deleteAContact = asyncHandler((req,res)=>{
    res.status(200).json({message:`the contact ${req.params.id} deleted`})
})


module.exports={getAllContact,getSingleContact,updateAContact,deleteAContact,createAContact}
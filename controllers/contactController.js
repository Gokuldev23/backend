
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

const getSingleContact = asyncHandler(async(req,res) =>{

    let id = req.params.id
    if(!id){
        return res.status(400).json({message:"id is not passed"})
    }
    const contact = await contactModel.findById(id)
    if(!contact){
        return res.status(401).json({message:"Contact not found"})
    }
    res.status(200).json({message:`You got contact ${req.params.id}`,data:contact})
})


const updateAContact = asyncHandler(async(req,res)=>{
    let id = req.params.id
    if(!id){
        return res.status(400).json({message:"id is not passed"})
    }
    const {name,email} = req.body
    if(!name || !email){
        res.status(402).json({success:false,message:"Some fields are missing!"})
        return
    }
    const contact = await contactModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    res.status(200).json({success:true,message:`Contact ${req.params.id} Successfully upadted`,data:contact})
})

const deleteAContact = asyncHandler(async(req,res)=>{
    let id = req.params.id
    if(!id){
        return res.status(400).json({message:"id is not passed"})
    }
    let deleted = await contactModel.deleteOne({_id:id})
    console.log({deleted})

    return res.status(200).json({message:`the contact ${req.params.id} deleted`})
})


module.exports={getAllContact,getSingleContact,updateAContact,deleteAContact,createAContact}
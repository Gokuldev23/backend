
const asyncHandler = require('express-async-handler')


const getAllContact = asyncHandler((req,res) =>{
    res.status(200).json({message:"get All contact"})
})

const createAContact = asyncHandler((req,res) =>{
    res.status(200).json({message:" contact created"})
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
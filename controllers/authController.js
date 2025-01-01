const asyncHandler = require('express-async-handler')
const contactModel = require('../models/contactModel')


const register = asyncHandler(async (req,res) =>{
    // let response = await contactModel.find()
    res.status(200).json({message:"user register",data:null})
})

const login = asyncHandler(async(req,res) =>{
    const {name,email} = req.body
    if(!name || !email){
        return res.status(400).json({message:"Some fields are empty"})
    }
    // const contact = await contactModel.create({
    //     name,
    //     email
    // })
    res.status(200).json({message:"user logged In",data:null})
})

const currentUser = asyncHandler(async(req,res) =>{

    // let id = req.params.id
    // if(!id){
    //     return res.status(400).json({message:"id is not passed"})
    // }
    // const contact = await contactModel.findById(id)
    // if(!contact){
    //     return res.status(401).json({message:"Contact not found"})
    // }
    res.status(200).json({message:`Current User data`,data:null})
})

module.exports = {register,login,currentUser}
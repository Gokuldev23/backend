const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bycrpt = require("bcrypt")
const jwt = require('jsonwebtoken')


const register = asyncHandler(async (req,res) =>{
    // let response = await contactModel.find()
    const {email,name,password} = req.body
    if(!name || !email || !password){
        return res.status(400).json({message:"Some fields are empty"})
    }
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"})
    }else{
        let hasedPassword = await bycrpt.hash(password,10)
        let response = await User.create({
            name,email,password:hasedPassword
        })
        res.status(200).json({message:"user register"})
    }
})

const login = asyncHandler(async(req,res) =>{
    const {password,email} = req.body
    if(!password || !email){
        return res.status(400).json({message:"Some fields are empty"})
    }

    let user = await User.findOne({email}).lean()
    let hashedPassword = user.password

    let checkPassword = await bycrpt.compare(password,hashedPassword)
    if(!checkPassword){
        return res.status(400).json({message:"Password is incorrect"})
    }

    delete user.password
    let a_token = jwt.sign(
        {
            userData:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15m'}
    )

    res.status(200).json({message:"user logged In",data:a_token})
})

const currentUser = asyncHandler(async(req,res) =>{
    console.log(req.user)
    res.status(200).json({message:`Current User data`,data:req.user})
})

module.exports = {register,login,currentUser}
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
            userData:user
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'1m'}
    )

    res.status(200).json({message:"user logged In",data:a_token})
})

const currentUser = asyncHandler(async(req,res) =>{

    const header = req.headers.authorization
    if(!header){
        res.status(401).json({message:"Unauthorised token not present or Invalid"})
    }
    let token = header.split(' ')[1]

    let userData = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
        if(err){
            res.status(401).json({message:"User is Unauthorised"})
        }
        console.log(decode)
    })
    
    res.status(200).json({message:`Current User data`,data:null})
})

module.exports = {register,login,currentUser}
const jwt = require('jsonwebtoken')


const validateToken = async (req,res,next) => {
    const header = req.headers.authorization || req.header.Authorization
    if(!header){
        res.status(401).json({message:"Unauthorised token not present or Invalid"})
    }
    let token = header.split(' ')[1]
    
    let userData = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
        if(err){
            res.status(401).json({message:"User is Unauthorised"})
        }
        let userData = decode.userData
        req.user = userData
        next()
    })
}

module.exports={validateToken}
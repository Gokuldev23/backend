const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, "Name field is Required"]
    },
    email:{
        type : String,
        required : [true, "This Email field is Required"],
        unique : [true,"Email address already present"]
    },
    password:{
        type : String,
        required : [true,"Password should not be emoty"]
    }
  },
    {
        Timestamps:true
    }

)

module.exports = mongoose.model('User',userSchema)
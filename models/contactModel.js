const mongoose = require('mongoose')



const contactSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, "This Name field is Required"]
    },
    email:{
        type : String,
        required : [true, "This Email field is Required"]
    },
  },
    {
        Timestamps:true
    }

)

module.exports = mongoose.model('contact',contactSchema)
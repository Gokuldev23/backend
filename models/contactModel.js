const mongoose = require('mongoose')



const contactSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
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
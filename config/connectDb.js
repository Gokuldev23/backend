
const mongoose = require('mongoose')


const connectToMongoDb = async () => {
    try {
        let res = await mongoose.connect(process.env.DB_URL)
        console.log("Db connected successfully",res.connection.name)
    } catch (error) {
        console.log("DB connection failed",error)
    }
}

module.exports = {connectToMongoDb}
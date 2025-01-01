const express = require('express')
const { errorHandler } = require('./middleWare/errorHandler')
const { connectToMongoDb } = require('./config/connectDb')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT

connectToMongoDb()

app.get('/', (req, res) => res.send('Hello World!'))


app.use(express.json())
app.use('/api/contacts',require('./routes/contact'))
app.use('/api/user',require('./routes/users'))
app.use(errorHandler)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
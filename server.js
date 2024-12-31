const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/contacts',require('./routes/contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
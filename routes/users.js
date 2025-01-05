const { register, login, currentUser } = require('../controllers/authController')
const { validateToken } = require('../middleWare/validateToken')


const router = require('express').Router()

router.post('/register',register)

router.post('/login',login)

router.get('/currentUser',validateToken,currentUser)


module.exports = router
const { register, login, currentUser } = require('../controllers/authController')

const router = require('express').Router()

router.post('/register',register)

router.post('/login',login)

router.get('/currentUser',currentUser)


module.exports = router
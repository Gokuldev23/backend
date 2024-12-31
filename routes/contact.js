const { getAllContact, getSingleContact, updateAContact, deleteAContact, createAContact } = require('../controllers/contactController')

const router = require('express').Router()

router.get('/',getAllContact)

router.get('/:id',getSingleContact)

router.post('/',createAContact)

router.put('/:id',updateAContact)

router.delete('/:id',deleteAContact)



module.exports = router
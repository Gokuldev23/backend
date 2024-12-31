const router = require('express').Router()


router.get('/',(req,res)=>{
    res.status(200).json({message:"i am contact"})
})

router.post('/create',(req,res)=>{
    res.status(200).json({message:"the contact created"})
})


router.put('/update/:id',(req,res)=>{
    res.status(200).json({message:`the contact ${req.params.id} updated`})
})

router.delete('/delete/:id',(req,res)=>{
    res.status(200).json({message:`the contact ${req.params.id} updated`})
})



module.exports = router
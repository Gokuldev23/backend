


const getAllContact = (req,res) =>{
    res.status(200).json({message:"get All contact"})
}

const createAContact = (req,res) =>{
    res.status(200).json({message:" contact created"})
}

const getSingleContact = (req,res) =>{
    res.status(200).json({message:`You got contact ${req.params.id}`})
}


const updateAContact = (req,res)=>{
    res.status(200).json({message:`the contact ${req.params.id} updated`})
}

const deleteAContact = (req,res)=>{
    res.status(200).json({message:`the contact ${req.params.id} deleted`})
}


module.exports={getAllContact,getSingleContact,updateAContact,deleteAContact,createAContact}
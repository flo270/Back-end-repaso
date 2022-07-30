const Mod = require('../models/model')

const get = async (req,res)=>{
    try{
        const mod = await Mod.find({})
        res.status(201).json(mod)
    }catch(error){
        res.status(404).json(error)
    }
}

const post = async (req,res)=>{
    const{ imagen,nombre,detalle,precio}= req.body  
      try {
        const mod = new Mod({
            imagen,
            nombre,
            detalle,
            precio
        })
        const newMod = await mod.save()
        res.status(201).json(newMod)
    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteA=async(req,res)=>{
    const {id } = req.params
    const getById = await Mod.findByIdAndDelete(id)
    if(getById !== null){
        res.status(200).json("Se elimino ")
    }else{
        res.status(404).json("Algo salio mal y no se pudo eliminar ")
    }
}

const put=async(req,res)=>{
    const {id} = req.params 
    const{ imagen,nombre,detalle,precio}= req.body  
    const getIdUpdate = await Mod.findByIdAndUpdate(id,{ imagen,nombre,detalle,precio})
    if (getIdUpdate !== null) {
        res.status(200).json('exito al modificar')
        console.log(req.body)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion ")
    }
}

const getById = async(req,res)=>{
     const {id} = req.params  
    const getId = await Mod.findById(id)
    if (getId !== null) {
        res.status(200).json(getId)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la busqueda")
    } 
}
module.exports = { get, post, deleteA, put, getById}
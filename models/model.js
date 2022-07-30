const {Schema,model} = require('mongoose')

const modelSchema = new Schema(
    {   
        imagen: {
            type:String,
            required: true},
        nombre: { 
            type : String,
            required: true},
        detalle :{ 
            type : String,
            required: true},
        precio : Number,
    }
)
module.exports = model('model',modelSchema)
const mongoose = require('mongoose')

require('dotenv/config')
const gamesConnectionDB= async()=>{
    try {
        await mongoose.connect(process.env.URL_CONNECTION)
        console.log('Te conectaste con exito a la base de datos')
    } catch (error) {
        console.log('Algo salio mal, revise la conexion',error)
        
    }
}
gamesConnectionDB()
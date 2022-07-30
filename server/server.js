const express = require('express')
const app =express()

const cors = require('cors')
const morgan = require ('morgan')

require('dotenv/config')
 const routes= require('../routes/route')
    require('../dataBase/connection')

 const port= process.env.PORT

 app.use(cors())
 app.use(morgan('dev'))
 app.use(express.json())

 app.get('/',(req,res)=>{
    res.json('hola')
    console.log('hola mundo')
 })
 app.use('/mod', routes)

 app.listen(port,()=>{
    console.log('ESTAMOS EN EL PUERTO',port)
 })
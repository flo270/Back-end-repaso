const {Router} = require('express')
const {get, post, deleteA, put, getById} = require('../controller/controller')

const Routes = Router()

Routes.get('/', get)

Routes.post('/', post)

Routes.delete('/:id',deleteA)

Routes.put('/:id', put)

Routes.get('/:id', getById)

module.exports = Routes
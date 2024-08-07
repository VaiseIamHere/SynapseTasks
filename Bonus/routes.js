// File to handle all the routes and perform necessary CRUD operation using 'controller.js'

const express = require('express')
const controller = require('./controller.js')
const route = express.Router()

route.get('/', controller.general)

route.post('/post', controller.create)

route.get('/view/:name', controller.view)

route.get('/view', controller.viewAll)

route.put('/update/:name', controller.updateBook)

route.delete('/delete/:name' ,controller.deleteBook)

route.delete('/clear', controller.deleteAll)

// Bonus
route.get('/view/author/:name', controller.viewWithAuthor)

route.get('/view/genre/:name', controller.viewWithGenre)

module.exports = route
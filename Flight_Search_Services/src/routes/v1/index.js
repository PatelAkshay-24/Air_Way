const express = require('express')
const router = express.Router()

//import controller
const cityController = require('../../controllers/city-controller')


//Routers
router.post('/city/create',cityController.create)
router.delete('/city/delete/:id',cityController.destroy)
router.patch('/city/update/:id',cityController.update)
router.get('/city/find/:id',cityController.get)


module.exports = router
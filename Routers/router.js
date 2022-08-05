const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.get('/home', userController.getUsers)
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router


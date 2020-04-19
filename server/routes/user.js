const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

router.post('/login', userController.postLogin)

router.post('/signup', userController.postSignUp)

module.exports = router

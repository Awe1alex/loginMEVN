const express = require('express')
const { body } = require('express-validator')

const User = require('../models/user')
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/login', authController.postLogin)

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, { req }) => {
                return User.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject('Email address already in use!')
                    }
                })
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 8 }),
    ],
    authController.postSignUp
)

module.exports = router

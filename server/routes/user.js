const express = require('express')
const { body } = require('express-validator')
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const userController = require('../controllers/user')
const authorized = require('../middleware/authorized')

const router = express.Router()

router.post(
    '/edit-profile',
    authorized,
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
    userController.postEditProfile
)

module.exports = router

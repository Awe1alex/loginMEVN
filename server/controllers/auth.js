const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const jwtSecretKey = process.env.JWT_SECRET_KEY

exports.postLogin = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                const error = new Error('Wrong email or password')
                error.statusCode = 401
                throw error
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)
        })
        .then((passwordMatch) => {
            if (!passwordMatch) {
                const error = new Error('Wrong email or password')
                error.statusCode = 401
                throw error
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString(),
                },
                jwtSecretKey
            )
            res.status(200).json({
                token: token,
                userId: loadedUser._id.toString(),
            })
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
}

exports.postSignUp = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Enter valid data.')
        error.statusCode = 422
        error.data = errors.array()
        throw error
    }
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
            })
            return user.save()
        })
        .then((result) => {
            res.status(201).json({
                message: 'User successfuly created!',
                userId: result._id,
            })
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
}

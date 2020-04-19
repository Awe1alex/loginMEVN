const bcrypt = require('bcryptjs')

const User = require('../models/user')

exports.postLogin = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt
                    .compare(password, user.password)
                    .then((doMatch) => {
                        if (doMatch) {
                            res.status(200).json({
                                message: 'User logged in',
                            })
                        } else {
                            res.status(404).json({
                                message: 'Invalid email or password',
                            })
                        }
                    })
                    .catch((err) => {
                        res.redirect('/login')
                    })
            } else {
                res.status(404).json({
                    message: 'Invalid email or password',
                })
            }
        })
        .catch((err) => console.log(err))
}

exports.postSignUp = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    User.findOne({ email: email })
        .then((userDoc) => {
            if (userDoc) {
                return res.status(500).json({
                    message: 'Email already in use',
                })
            }
            return bcrypt
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
                    res.status(200).json({
                        message: 'User successfuly created',
                    })
                })
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
}

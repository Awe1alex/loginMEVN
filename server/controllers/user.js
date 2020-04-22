const bcrypt = require('bcryptjs')

const User = require('../models/user')

exports.postEditProfile = (req, res, next) => {
    const userId = req.userId
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    User.findById(userId)
        .then((user) => {
            bcrypt
                .hash(password, 12)
                .then((hashedPassword) => {
                    user.name = name
                    user.email = email
                    user.password = hashedPassword
                    return user.save()
                })
                .then((result) => {
                    res.status(200).json({
                        message: 'Profile successfuly updated!',
                        userId: result._id,
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

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/user', userRoutes)
app.use(authRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({ message: message, data: data })
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then((result) => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })

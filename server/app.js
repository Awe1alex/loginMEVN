const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const MONGODB_URI =
    'mongodb+srv://loginmevn:magebit21@cluster0-oyztk.mongodb.net/login?retryWrites=true&w=majority'

const userRoutes = require('./routes/user')

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(userRoutes)

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })

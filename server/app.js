const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/heelo-world', (req, res) => {
    res.send({
        title: 'Hello world!',
    })
})

app.listen(process.env.PORT || 3000)

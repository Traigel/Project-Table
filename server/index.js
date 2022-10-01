const express = require('express')
const data = require('./data-router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000;

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/data', data)

app.use((req, res) => {
    res.send(404);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')(express)
const app = express()

mongoose.connect(`mongodb+srv://week:week@cluster0-zojvf.mongodb.net/week8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})
app.use(express.json())
app.use(routes)

app.listen(3333)
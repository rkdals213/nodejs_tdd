const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const user = require('./api/user')

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', user)

// app.listen(3000, function () {
//     console.log('server is running')
// })

module.exports = app
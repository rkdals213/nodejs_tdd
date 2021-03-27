const express = require('express')
const logger3 = require('morgan')
const app = express()

function logger(req, res, next) {
    console.log('i am logger')
    next()
}

function logger2(req, res, next) {
    console.log('i am logger2')
    next()
}

function commonmw(req, res, next) {
    console.log('commonmw')
    next(new Error('error'))
}

function errormw(err, req, res, next) {
    console.log(err.message)
    next()
}

app.use(logger)
app.use(logger2)
app.use(logger3('dev'))
app.use(commonmw)
app.use(errormw)

app.listen(3000, function () {
    console.log('server is running')
})
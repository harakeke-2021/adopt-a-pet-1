const express = require("express")
const hbs = require('express-handlebars')

const routes = require('./routes')

const app = express()

module.exports = app

app.engine('hbs', hbs({
    extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
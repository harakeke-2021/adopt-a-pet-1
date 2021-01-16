const path = require('path')
const express = require('express')

//how to destructure this
const utils = require('./utils')

const router = express.Router()
const filePath = path.join(__dirname, 'petdata.json')

module.exports = router

router.get('/', (req, res) => {
    utils.getViewData(filePath, function(err, viewData) {
        res.render('home', viewData)
    })
})
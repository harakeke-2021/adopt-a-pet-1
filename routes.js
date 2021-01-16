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

router.post('/', (req, res) => {

    const newObj = req.body
   //get the existing data file
    utils.getViewData(filePath, function(err, viewData) {
        if (err) {
            console.log(error)
        } else {
            //Create the new ID for the pet based on the length of viewpets
            const newObjId = viewData.pets.length + 1
            
            //set the new ID to the object data submitted by the form
            newObj.id = newObjId

            viewData.pets.push(newObj)

            utils.setViewData(filePath, viewData, function(err, data) {
                
            })
            console.log(viewData)
            res.redirect('/')
        }
    })
    

})
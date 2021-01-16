const path = require('path')
const express = require('express')

//how to destructure this
const utils = require('./utils')

const router = express.Router()
const filePath = path.join(__dirname, 'petdata.json')

module.exports = router

//get HomePage showing all avaliable and rehomed pets
router.get('/', (req, res) => {
    utils.getViewData(filePath, function (err, viewData) {
        res.render('home', viewData)
    })
})

//get form to put pet up for adoption
router.get('/new', (req, res) => {
    res.render('new')
})


//get individual pet page
router.get('/pets/:id', (req, res) => {
    const petID = req.params.id

    //get the petdata containing the IDs then match the id passed through the file and return all data for that ID
    utils.getViewData(filePath, function (err, viewData) {
        petData = viewData.pets.find(pet => pet.id == petID)
        console.log(petData)
        res.render('pet', petData)
    })
})


//Post new pet adoption form to petdata.json
router.post('/', (req, res) => {

    //collect the req.body details by using the express.urlencoded function in the app.js file
    const newObj = req.body
    //get the existing data file
    utils.getViewData(filePath, function (err, viewData) {
        if (err) {
            console.log(error)
        } else {
            //Create the new ID for the pet based on the length of viewpets
            const newObjId = viewData.pets.length + 1

            //set the new ID to the object data submitted by the form
            newObj.id = newObjId
            newObj.isAdopted = false

            //push the new data to the existing data object
            viewData.pets.push(newObj)

            //call the writeFile function - if no error then redirect
            utils.setViewData(filePath, viewData, function (err, data) {

            })
            console.log(viewData)
            res.redirect('/')
        }
    })


})
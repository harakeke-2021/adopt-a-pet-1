const fs = require('fs')

module.exports = { getViewData,
                    setViewData }

function getViewData(filePath, callbackFunction) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return callbackFunction(new Error("unable to read file"))
        } else {
            const viewData = JSON.parse(data)
            
            //passing the parsed data back to the callback
            callbackFunction(null, viewData)
            
        }
    })
}


function setViewData (filePath, viewData, callbackFunction) {
    //null, 2 enables the JSON file to print pretty
    const data = JSON.stringify(viewData, null, 2)

    fs.writeFile(filePath, data, function(err) {
        if (err){
            return callbackFunction(new Error("unable to write file"))
        } else {
            callbackFunction(null, data)
        }
    })
}
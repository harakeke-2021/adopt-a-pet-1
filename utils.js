const fs = require('fs')

module.exports = { getViewData }

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


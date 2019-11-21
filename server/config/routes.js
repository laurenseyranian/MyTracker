const mongoose = require('mongoose');
const controller = require('../controller/controller.js')

module.exports = function(app) {
    console.log("INSIDE ROUTES")
    app.get('/home_json', controller.home) // View Home
    app.get("/calander_json", controller.calendar) // view calendar 
    app.get('/log_json', controller.log) // view food_log

}
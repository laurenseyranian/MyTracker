const mongoose = require('mongoose');
const controller = require('../controller/controller.js')

module.exports = function(app) {
    app.get('/home_json', controller.home) // View Home

}
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use('/foodlogs_json', require('./server/config/routes/routes'));


mongoose.connect('mongodb://localhost/tracker_db', { useNewUrlParser: true });

require('./server/models/models.js')
require('./server/config/routes.js')(app)
require('./server/config/routes/database');

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))});
app.listen(8000, () => console.log("listening on port 8000"));
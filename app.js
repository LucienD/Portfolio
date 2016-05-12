var express = require("express"),
    router = express.Router(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = process.env.PORT || 3000,
    app = express();


var projet = require('./routes/projet');
var mail = require('./routes/projet');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/projets1842');


app.use('/api', projet);
app.use('/api', mail);


app.listen(port, function () {
    console.log('Listening on port' + port);
});

//module.exports = app;

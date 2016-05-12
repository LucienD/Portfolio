var mongoose = require("mongoose"),
    projetSchema = mongoose.Schema;

var Projet = new projetSchema({
    type: String,
    img: String,
    title: String,
    resume: String,
    link: String
});
module.exports = mongoose.model('Projet', Projet);
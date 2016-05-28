 var Projet = require('../controllers/projet'),
     express = require("express"),
     router = express.Router();

 router.route('/')
     .get(function (req, res) {
         Projet.find(req, function (err, projets) {
             if (err) {
                 res.send(err);
             } else {
                 res.send(projets);
             }
         });
     })
     .post(function (req, res) {
         Projet.create(req, function (err, projet) {
             if (err) {
                 res.send(err);
             } else {
                 res.send(projet);
             }
         });
     });


 router.route('/:projet_id')
     .get(function (req, res) {
         Projet.findById(req, function (err, projet) {
             if (err) {
                 res.send(err);
             } else {
                 res.send(projet);
             }
         });
     })
     .put(function (req, res) {
         Projet.put(req, function (err, projet) {
             if (err) {
                 res.send(err);
             } else {
                 res.send(projet);
                 console.log("modifié t'as vu !");
             }
         });
     })
     .delete(function (req, res) {
         Projet.delete(req, function (err, projet) {
             if (err) {
                 res.send(err);
             } else {
                 res.send({
                     projet: "Delete !"
                 });
             }
         });
     });



 module.exports = router;

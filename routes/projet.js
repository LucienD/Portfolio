var express = require("express"),
    router = express.Router(),
    Projet = require('../controllers/projet');

router.route('/')
    .get(function (req, res) {
        Projet.find(req, function (err, projets) {
            if (err) {
                res.send(err);
            }
            res.send(projets);
        });
    })
    .post(function (req, res) {
        Projet.create(req, function (err, projet) {
            if (err) {
                res.send(err);
            }
            res.send(projet);
        });
    });


router.route('/:projet_id')
    .get(function (req, res) {
        Projet.findById(req, function (err, projet) {
            if (err) {
                res.send(err);
            }
            res.send(projet);
        });
    })
    .put(function (req, res) {
        Projet.put(req, function (err, projet) {
            if (err) {
                res.send(err);
            }
            res.send(projet);
            console.log("modifié t'as vu !");
        });
    })
    .delete(function (req, res) {
        Projet.delete(req, function (err, projet) {
            res.send({
                projet: "Delete !"
            });
        });
    });



module.exports = router;

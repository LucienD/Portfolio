var Projet = require('../models/projet');
var projet = {
    create: function (req, res) {
        new Projet({
            type: req.body.type,
            img: req.body.img,
            title: req.body.title,
            resume: req.body.resume,
            link: req.body.link
        }).save(function (err, projet) {
            res(projet);
        });
    },
    find: function (req, res) {
        Projet.find(function (err, projet) {
            res(projet);
        });
    },
    findById: function (req, res) {
        Projet.findOne({
                _id: req.params.projet_id
            },
            function (err, projet) {
                res(projet);
            });
    },
    delete: function (req, res) {
        Projet.remove({
            _id: req.params.projet_id
        }, function (err, projet) {
            if (err) {
                res(err);
            }
            res(projet);
        });
    },
    put: function (req, res) {
        Projet.findOne({
            _id: req.params.projet_id
        }, function (err, projet) {
            if (err) {
                res(err);
            }
            projet.type = req.body.type;
            projet.img = req.body.img;
            projet.title = req.body.tilre;
            projet.resume = req.body.resume;
            projet.link = req.body.link;
            projet.save(function (err, projet) {
                if (err) {
                    res(err);
                }
                res(projet);
            });
        });
    }
};
module.exports = projet;

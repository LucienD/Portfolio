var express = require('express');
var router = express.Router();
var mailer = require('nodemailer');

var transporter = mailer.createTransport({
    service: "Gmail",
    auth: {
        user: "luciendartois.portfolio@gmail.com",
        pass: "playstation3?"
    }
});


router.post('/send', function (req, res, next) {
    var mail = {
        to: "luciendartois@gmail.com",
        subject: "Contact form - portfolio",
        text: req.body.text,
        from: req.body.from
    }
    transporter.sendMail(mail, function (err, response) {
        if (err) {
            console.log(err);
            res.status('error').send(err);
        } else {
            console.log(response)
            res.status('200').send(response);
        }
    });
});

module.exports = router;
